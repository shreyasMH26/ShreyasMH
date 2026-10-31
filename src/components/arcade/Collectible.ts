import { CollectibleType } from './types';

export class Collectible {
  public x: number;
  public y: number;
  public width: number = 32;
  public height: number = 32;
  public type: CollectibleType;
  public markedForRemoval: boolean = false;

  private baseY: number;
  private animTick: number = 0;

  constructor(x: number, y: number, type: CollectibleType) {
    this.x = x;
    this.baseY = y;
    this.y = y;
    this.type = type;
  }

  public update(speed: number) {
    this.x -= speed;
    this.animTick++;
    // Smooth floating bobbing
    this.y = this.baseY + Math.sin(this.animTick / 8) * 6;

    if (this.x + this.width < -40) {
      this.markedForRemoval = true;
    }
  }

  public getHitbox() {
    return {
      x: this.x - 2,
      y: this.y - 2,
      width: this.width + 4,
      height: this.height + 4,
    };
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    const x = this.x;
    const y = this.y;

    // Subtle pulsating glow circle behind collectible
    const glow = Math.sin(this.animTick / 6) * 3;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.beginPath();
    ctx.arc(x + 16, y + 16, 18 + glow, 0, Math.PI * 2);
    ctx.fill();

    switch (this.type) {
      case 'coffee':
        this.drawCoffee(ctx, x, y);
        break;
      case 'notes':
        this.drawNotes(ctx, x, y);
        break;
      case 'laptop':
        this.drawLaptop(ctx, x, y);
        break;
      case 'attendance':
        this.drawAttendance(ctx, x, y);
        break;
    }

    ctx.restore();
  }

  // 1. ☕ Steaming Hot Coffee Mug
  private drawCoffee(ctx: CanvasRenderingContext2D, x: number, y: number) {
    // Mug Body (Amber/Orange)
    ctx.fillStyle = '#f97316';
    ctx.fillRect(x + 6, y + 10, 18, 16);
    ctx.fillStyle = '#ea580c';
    ctx.fillRect(x + 8, y + 12, 14, 12);

    // Handle
    ctx.strokeStyle = '#f97316';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x + 24, y + 18, 4, -Math.PI / 2, Math.PI / 2);
    ctx.stroke();

    // Rising steam curls (Pixel animated)
    ctx.fillStyle = '#fed7aa';
    const steam = Math.sin(this.animTick / 5) * 2;
    ctx.fillRect(x + 10 + steam, y + 4, 2, 4);
    ctx.fillRect(x + 16 - steam, y + 2, 2, 5);
  }

  // 2. 📚 Golden Topper Notes Book
  private drawNotes(ctx: CanvasRenderingContext2D, x: number, y: number) {
    // Book cover (Gold / Amber)
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(x + 4, y + 6, 22, 20);

    // Book spine & pages
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x + 6, y + 8, 18, 16);
    ctx.fillStyle = '#d97706';
    ctx.fillRect(x + 4, y + 6, 4, 20); // Spine

    // Notes bookmark ribbon
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(x + 14, y + 4, 3, 14);

    // Star sparkle above book
    ctx.fillStyle = '#fef08a';
    ctx.fillRect(x + 22, y + 2, 3, 3);
  }

  // 3. 💻 Laptop (StackOverflow / Shield)
  private drawLaptop(ctx: CanvasRenderingContext2D, x: number, y: number) {
    // Screen (Cyan border)
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(x + 5, y + 6, 22, 16);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x + 5, y + 6, 22, 16);

    // Terminal Screen Glowing Content: < / >
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 8px monospace';
    ctx.fillText('</>', x + 8, y + 17);

    // Laptop Base / Keyboard deck
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(x + 2, y + 22, 28, 4);
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(x + 12, y + 24, 8, 2); // Trackpad
  }

  // 4. 🎓 Attendance Card (ID with Green 85% Stamp)
  private drawAttendance(ctx: CanvasRenderingContext2D, x: number, y: number) {
    // Card Base
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x + 4, y + 4, 24, 24);
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x + 4, y + 4, 24, 24);

    // Lanyard ribbon at top
    ctx.fillStyle = '#2563eb';
    ctx.fillRect(x + 14, y, 4, 5);

    // Photo placeholder
    ctx.fillStyle = '#60a5fa';
    ctx.fillRect(x + 7, y + 8, 8, 8);

    // Green Stamp: "85%"
    ctx.fillStyle = '#16a34a';
    ctx.font = 'bold 7px monospace';
    ctx.fillText('85%', x + 8, y + 23);
  }
}
