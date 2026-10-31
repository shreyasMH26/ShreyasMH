import { PlayerState } from './types';
import { sounds } from './SoundEffects';

export class Player {
  public x: number = 75;
  public y: number = 0;
  public groundY: number = 0;
  public vy: number = 0;
  public isGrounded: boolean = false;
  public state: PlayerState = 'RUNNING';

  // Dimensions
  public normalWidth: number = 42;
  public normalHeight: number = 54;
  public slideWidth: number = 54;
  public slideHeight: number = 26;

  // Physics
  private gravity: number = 0.72;
  private jumpPower: number = -14.2;

  // Animation & Timers
  public animFrame: number = 0;
  private animTick: number = 0;
  public slideTimer: number = 0;
  public maxSlideDuration: number = 42; // frames (~0.7s)

  // Powerup States
  public coffeeTimer: number = 0; // frames
  public hasShield: boolean = false; // from laptop
  public invincibilityTimer: number = 0; // after taking hit

  constructor() {}

  public init(groundY: number) {
    this.groundY = groundY;
    this.y = groundY - this.normalHeight;
    this.vy = 0;
    this.isGrounded = true;
    this.state = 'RUNNING';
    this.slideTimer = 0;
    this.coffeeTimer = 0;
    this.hasShield = false;
    this.invincibilityTimer = 0;
  }

  public jump() {
    if (this.isGrounded && this.state !== 'DEAD') {
      this.vy = this.jumpPower;
      this.isGrounded = false;
      this.state = 'JUMPING';
      this.slideTimer = 0;
      sounds.playJump();
    }
  }

  public slide() {
    if (this.isGrounded && this.state !== 'SLIDING' && this.state !== 'DEAD') {
      this.state = 'SLIDING';
      this.slideTimer = this.maxSlideDuration;
      sounds.playSlide();
    }
  }

  public releaseSlide() {
    if (this.state === 'SLIDING' && this.isGrounded) {
      this.state = 'RUNNING';
      this.slideTimer = 0;
    }
  }

  public update(isDownHeld: boolean) {
    if (this.state === 'DEAD') return;

    // Coffee Boost Decay
    if (this.coffeeTimer > 0) {
      this.coffeeTimer--;
    }

    // Invincibility Decay
    if (this.invincibilityTimer > 0) {
      this.invincibilityTimer--;
    }

    // Slide logic
    if (this.state === 'SLIDING') {
      if (this.slideTimer > 0) {
        this.slideTimer--;
      } else if (!isDownHeld) {
        this.state = 'RUNNING';
      }
    }

    // Jump / Gravity Physics
    if (!this.isGrounded) {
      this.vy += this.gravity;
      this.y += this.vy;

      const currentHeight = this.getHeight();
      if (this.y + currentHeight >= this.groundY) {
        this.y = this.groundY - currentHeight;
        this.vy = 0;
        this.isGrounded = true;
        this.state = isDownHeld ? 'SLIDING' : 'RUNNING';
        if (this.state === 'SLIDING') {
          this.slideTimer = this.maxSlideDuration;
        }
      }
    } else {
      const currentHeight = this.getHeight();
      this.y = this.groundY - currentHeight;
    }

    // Run animation cycle
    this.animTick++;
    if (this.animTick % 6 === 0) {
      this.animFrame = (this.animFrame + 1) % 4;
    }
  }

  public getWidth(): number {
    return this.state === 'SLIDING' ? this.slideWidth : this.normalWidth;
  }

  public getHeight(): number {
    return this.state === 'SLIDING' ? this.slideHeight : this.normalHeight;
  }

  // Slightly inset hitbox for forgiving, fair collision detection
  public getHitbox() {
    const w = this.getWidth();
    const h = this.getHeight();
    const insetX = 6;
    const insetY = this.state === 'SLIDING' ? 4 : 8;

    return {
      x: this.x + insetX,
      y: this.y + insetY,
      width: w - insetX * 2,
      height: h - insetY,
    };
  }

  public hit(): boolean {
    if (this.invincibilityTimer > 0) return false;

    if (this.hasShield) {
      this.hasShield = false;
      this.invincibilityTimer = 90; // ~1.5s invincibility
      sounds.playHit();
      return false; // Survived via shield
    }

    this.state = 'DEAD';
    sounds.playHit();
    sounds.playGameOver();
    return true; // Lethal hit
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.save();

    // Flashing during invincibility
    if (this.invincibilityTimer > 0 && Math.floor(this.invincibilityTimer / 4) % 2 === 0) {
      ctx.globalAlpha = 0.4;
    }

    const currentW = this.getWidth();
    const currentH = this.getHeight();

    // ── Coffee Boost Trail ──
    if (this.coffeeTimer > 0) {
      ctx.fillStyle = 'rgba(249, 115, 22, 0.35)';
      ctx.fillRect(this.x - 12, this.y + 4, currentW, currentH - 4);
      ctx.fillStyle = 'rgba(251, 191, 36, 0.2)';
      ctx.fillRect(this.x - 22, this.y + 8, currentW, currentH - 8);
    }

    // ── Shield Aura (Cyan Hex Ring) ──
    if (this.hasShield) {
      ctx.save();
      const pulse = Math.sin(Date.now() / 150) * 3;
      const radius = Math.max(currentW, currentH) * 0.72 + pulse;
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#0284c7';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(this.x + currentW / 2, this.y + currentH / 2, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Shield sparkles
      ctx.fillStyle = '#bae6fd';
      for (let i = 0; i < 4; i++) {
        const angle = (Date.now() / 400 + (i * Math.PI) / 2) % (Math.PI * 2);
        const sx = this.x + currentW / 2 + Math.cos(angle) * radius;
        const sy = this.y + currentH / 2 + Math.sin(angle) * radius;
        ctx.fillRect(sx - 1.5, sy - 1.5, 3, 3);
      }
      ctx.restore();
    }

    // ── Pixel Art Character Rendering ──
    // Matches the provided icon character:
    // Messy anime hair, school backpack, white sneakers, running from VTU!
    if (this.state === 'SLIDING') {
      this.drawSlideState(ctx);
    } else if (this.state === 'JUMPING') {
      this.drawJumpState(ctx);
    } else if (this.state === 'DEAD') {
      this.drawDeadState(ctx);
    } else {
      this.drawRunState(ctx);
    }

    // ── Exclamation Mark Overhead (Alert / VTU Panic) ──
    if (this.state === 'JUMPING' || this.coffeeTimer > 0) {
      ctx.fillStyle = '#f97316'; // Vibrant VTU Alert Orange
      ctx.fillRect(this.x + 18, this.y - 18, 5, 10);
      ctx.fillRect(this.x + 18, this.y - 5, 5, 4);

      // White outline for 8-bit sharpness
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      ctx.strokeRect(this.x + 17.5, this.y - 18.5, 6, 11);
      ctx.strokeRect(this.x + 17.5, this.y - 5.5, 6, 5);
    }

    ctx.restore();
  }

  // 1. Running State (4 animated subframes)
  private drawRunState(ctx: CanvasRenderingContext2D) {
    const px = this.x;
    const py = this.y;
    const f = this.animFrame;

    // Hair / Head (Messy pixel mop matching icon)
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(px + 12, py + 4, 20, 16);
    ctx.fillRect(px + 8, py + 8, 8, 12);
    ctx.fillRect(px + 16, py + 0, 16, 8); // Top spikes

    // Face / Skin
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px + 16, py + 10, 14, 12);
    // Eye (focused anime pixel dot)
    ctx.fillStyle = '#000000';
    ctx.fillRect(px + 24, py + 13, 3, 4);

    // Torso / Jacket
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px + 10, py + 22, 18, 14);

    // Backpack (Dark with straps)
    ctx.fillStyle = '#222222';
    ctx.fillRect(px + 2, py + 20, 10, 15);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px + 9, py + 22, 3, 11); // Strap

    // Flying assignment sheet falling from bag
    if (f % 2 === 0) {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(px - 14, py + 24, 7, 6);
      ctx.fillStyle = '#555555';
      ctx.fillRect(px - 12, py + 26, 4, 1);
    }

    // Legs & Feet (Stridework)
    ctx.fillStyle = '#ffffff';
    if (f === 0) {
      // Leg 1 forward, Leg 2 back
      ctx.fillRect(px + 18, py + 36, 6, 12);
      ctx.fillRect(px + 22, py + 46, 10, 6); // Shoe 1

      ctx.fillRect(px + 8, py + 36, 6, 10);
      ctx.fillRect(px + 2, py + 44, 9, 6); // Shoe 2
    } else if (f === 1) {
      // Mid stride
      ctx.fillRect(px + 14, py + 36, 7, 14);
      ctx.fillRect(px + 16, py + 48, 9, 6);

      ctx.fillRect(px + 8, py + 36, 6, 8);
      ctx.fillRect(px + 4, py + 42, 8, 6);
    } else if (f === 2) {
      // Leg 2 forward, Leg 1 back
      ctx.fillRect(px + 8, py + 36, 6, 12);
      ctx.fillRect(px + 4, py + 46, 10, 6);

      ctx.fillRect(px + 18, py + 36, 6, 10);
      ctx.fillRect(px + 22, py + 44, 9, 6);
    } else {
      // Passing
      ctx.fillRect(px + 12, py + 36, 7, 14);
      ctx.fillRect(px + 10, py + 48, 9, 6);

      ctx.fillRect(px + 16, py + 36, 6, 8);
      ctx.fillRect(px + 18, py + 42, 8, 6);
    }

    // Arms swing
    ctx.fillStyle = '#ffffff';
    if (f === 0 || f === 1) {
      ctx.fillRect(px + 24, py + 24, 8, 5);
    } else {
      ctx.fillRect(px + 6, py + 24, 6, 5);
    }
  }

  // 2. Jumping State
  private drawJumpState(ctx: CanvasRenderingContext2D) {
    const px = this.x;
    const py = this.y;

    // Hair blowing back
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(px + 8, py + 2, 22, 16);
    ctx.fillRect(px + 2, py + 4, 8, 10);

    // Face
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px + 14, py + 8, 14, 12);
    // Eye wide
    ctx.fillStyle = '#000000';
    ctx.fillRect(px + 22, py + 11, 4, 4);

    // Torso
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px + 8, py + 20, 18, 14);

    // Backpack
    ctx.fillStyle = '#222222';
    ctx.fillRect(px - 1, py + 18, 10, 15);

    // Legs tucked up in athletic jump
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px + 16, py + 34, 12, 6);
    ctx.fillRect(px + 24, py + 38, 8, 8); // Shoe front

    ctx.fillRect(px + 6, py + 34, 8, 6);
    ctx.fillRect(px + 2, py + 38, 8, 8); // Shoe back

    // Arms up
    ctx.fillRect(px + 24, py + 18, 6, 10);

    // Trailing sheets of paper flying behind in wind
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px - 12, py + 14, 7, 5);
    ctx.fillRect(px - 22, py + 24, 6, 5);
  }

  // 3. Sliding State
  private drawSlideState(ctx: CanvasRenderingContext2D) {
    const px = this.x;
    const py = this.y;

    // Head tilted low
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(px + 24, py + 2, 16, 12);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px + 30, py + 6, 12, 10);
    ctx.fillStyle = '#000000';
    ctx.fillRect(px + 38, py + 9, 3, 3); // Eye

    // Body horizontal
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px + 12, py + 10, 20, 10);

    // Backpack low
    ctx.fillStyle = '#222222';
    ctx.fillRect(px + 10, py + 2, 12, 9);

    // Legs outstretched forward on floor
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px + 32, py + 14, 18, 6);
    ctx.fillRect(px + 46, py + 12, 8, 8); // Sneaker tips

    // Slide friction sparks / dust particles
    ctx.fillStyle = '#f97316';
    ctx.fillRect(px + 12, py + 20, 3, 3);
    ctx.fillRect(px + 22, py + 22, 4, 2);
    ctx.fillRect(px + 42, py + 21, 3, 3);
  }

  // 4. Dead / Detained State
  private drawDeadState(ctx: CanvasRenderingContext2D) {
    const px = this.x;
    const py = this.y + 16;

    // Collapsed flat on floor
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(px + 4, py + 8, 14, 10);

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px + 14, py + 10, 10, 8);

    // Knocked out "X" eye
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(px + 18, py + 12, 2, 2);
    ctx.fillRect(px + 20, py + 14, 2, 2);

    // Clothes & backpack strewn
    ctx.fillStyle = '#222222';
    ctx.fillRect(px - 4, py + 6, 10, 12);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px + 22, py + 12, 18, 7);

    // Backlog papers scattered around
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px - 14, py + 14, 8, 5);
    ctx.fillRect(px + 38, py + 14, 8, 5);
    ctx.fillRect(px + 18, py - 4, 8, 6);
  }
}
