import { ObstacleType } from './types';

export class Obstacle {
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public type: ObstacleType;
  public isOverhead: boolean = false;
  public markedForRemoval: boolean = false;
  public passedPlayer: boolean = false;

  private animTick: number = 0;

  constructor(x: number, groundY: number, type: ObstacleType) {
    this.x = x;
    this.type = type;

    // Define size and altitude based on obstacle type
    switch (type) {
      case 'assignment':
        this.width = 34;
        this.height = 48;
        this.y = groundY - this.height;
        this.isOverhead = false;
        break;

      case 'professor':
        this.width = 38;
        this.height = 62;
        this.y = groundY - this.height;
        this.isOverhead = false;
        break;

      case 'exam':
        this.width = 44;
        this.height = 42;
        this.y = groundY - this.height;
        this.isOverhead = false;
        break;

      case 'calculator':
        this.width = 52;
        this.height = 36;
        this.y = groundY - this.height;
        this.isOverhead = false;
        break;

      case 'backlog_monster':
        this.width = 46;
        this.height = 54;
        this.y = groundY - this.height;
        this.isOverhead = false;
        break;

      case 'attendance_notice':
        // Overhead obstacle: requires sliding underneath!
        this.width = 68;
        this.height = 34;
        this.y = groundY - 76; // Suspended in air
        this.isOverhead = true;
        break;

      case 'vtu_result':
        // Overhead floating dialog
        this.width = 64;
        this.height = 36;
        this.y = groundY - 78;
        this.isOverhead = true;
        break;

      case 'deadline':
        // Flying alarm clock with alarm bells
        this.width = 44;
        this.height = 38;
        this.y = groundY - 74;
        this.isOverhead = true;
        break;

      default:
        this.width = 36;
        this.height = 46;
        this.y = groundY - this.height;
        this.isOverhead = false;
        break;
    }
  }

  public update(speed: number) {
    this.x -= speed;
    this.animTick++;

    if (this.x + this.width < -50) {
      this.markedForRemoval = true;
    }
  }

  // Slightly inset hitbox for fair, high-precision arcade collisions
  public getHitbox() {
    const padX = 5;
    const padY = 4;
    return {
      x: this.x + padX,
      y: this.y + padY,
      width: this.width - padX * 2,
      height: this.height - padY * 2,
    };
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.save();

    switch (this.type) {
      case 'assignment':
        this.drawAssignment(ctx);
        break;
      case 'professor':
        this.drawProfessor(ctx);
        break;
      case 'exam':
        this.drawExam(ctx);
        break;
      case 'calculator':
        this.drawCalculator(ctx);
        break;
      case 'backlog_monster':
        this.drawBacklogMonster(ctx);
        break;
      case 'attendance_notice':
        this.drawAttendanceNotice(ctx);
        break;
      case 'vtu_result':
        this.drawVtuResult(ctx);
        break;
      case 'deadline':
        this.drawDeadline(ctx);
        break;
    }

    ctx.restore();
  }

  // 1. Assignment Stack (Tall chaotic stack of papers)
  private drawAssignment(ctx: CanvasRenderingContext2D) {
    const x = this.x;
    const y = this.y;

    // Stack base
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x + 2, y + 6, 30, 42);

    // Dark paper sheets lines
    ctx.fillStyle = '#1e1e1e';
    for (let i = 0; i < 6; i++) {
      ctx.fillRect(x + 5, y + 10 + i * 6, 24, 2);
    }

    // Red Urgent Ribbon / Clip
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(x + 10, y + 4, 14, 4);
    ctx.fillRect(x + 12, y + 2, 10, 2);

    // "URGENT" Red Stamp
    ctx.fillStyle = '#dc2626';
    ctx.font = 'bold 7px monospace';
    ctx.fillText('URGENT', x + 4, y + 36);

    // Crumpled loose page on top
    ctx.fillStyle = '#f3f4f6';
    ctx.fillRect(x + 6, y, 16, 5);
  }

  // 2. Angry Professor (Pixel prof with glasses waving stick)
  private drawProfessor(ctx: CanvasRenderingContext2D) {
    const x = this.x;
    const y = this.y;
    const wave = Math.sin(this.animTick / 6) * 4;

    // Bald head / Grey Hair on sides
    ctx.fillStyle = '#e5e7eb';
    ctx.fillRect(x + 6, y + 8, 26, 16);
    ctx.fillStyle = '#f87171'; // Angry red face
    ctx.fillRect(x + 10, y + 10, 18, 14);

    // Spectacles & Angry Eyebrows
    ctx.fillStyle = '#000000';
    ctx.fillRect(x + 12, y + 13, 6, 4);
    ctx.fillRect(x + 20, y + 13, 6, 4);
    ctx.fillRect(x + 18, y + 14, 2, 2); // Bridge
    // Big Mustache
    ctx.fillStyle = '#374151';
    ctx.fillRect(x + 12, y + 20, 14, 4);

    // Formal Coat / Blazer
    ctx.fillStyle = '#18181b';
    ctx.fillRect(x + 8, y + 26, 22, 22);
    // Red tie
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(x + 17, y + 26, 4, 14);

    // Pants & Shoes
    ctx.fillStyle = '#27272a';
    ctx.fillRect(x + 10, y + 48, 7, 14);
    ctx.fillRect(x + 21, y + 48, 7, 14);
    ctx.fillStyle = '#000000';
    ctx.fillRect(x + 8, y + 58, 10, 4);
    ctx.fillRect(x + 20, y + 58, 10, 4);

    // Waving pointer stick / red pen in hand
    ctx.fillStyle = '#f97316';
    ctx.fillRect(x + 28, y + 18 + wave, 12, 3);
    ctx.fillStyle = '#dc2626';
    ctx.fillRect(x + 38, y + 16 + wave, 4, 6);
  }

  // 3. Surprise Internal Exam Desk
  private drawExam(ctx: CanvasRenderingContext2D) {
    const x = this.x;
    const y = this.y;

    // Exam Table Top
    ctx.fillStyle = '#3f3f46';
    ctx.fillRect(x + 2, y + 12, 40, 8);
    // Table legs
    ctx.fillStyle = '#27272a';
    ctx.fillRect(x + 5, y + 20, 4, 22);
    ctx.fillRect(x + 35, y + 20, 4, 22);

    // Question Paper Booklet
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x + 10, y + 2, 24, 12);
    ctx.fillStyle = '#0284c7';
    ctx.fillRect(x + 10, y + 2, 8, 12); // Blue booklet spine

    // Question paper text: "CIA 1"
    ctx.fillStyle = '#dc2626';
    ctx.font = 'bold 6px monospace';
    ctx.fillText('CIA 1', x + 20, y + 10);
  }

  // 4. Calculator (Scientific Calculator showing SYNTAX ERROR)
  private drawCalculator(ctx: CanvasRenderingContext2D) {
    const x = this.x;
    const y = this.y;

    // Casio Casing
    ctx.fillStyle = '#27272a';
    ctx.fillRect(x + 2, y + 2, 48, 34);

    // LCD Screen (Glowing green/amber)
    ctx.fillStyle = '#14532d';
    ctx.fillRect(x + 6, y + 6, 40, 10);

    // Screen Text: "ERR: 991"
    ctx.fillStyle = '#4ade80';
    ctx.font = 'bold 6px monospace';
    ctx.fillText('SYNTAX ERR', x + 8, y + 14);

    // Keypad Matrix
    ctx.fillStyle = '#71717a';
    for (let r = 0; r < 2; r++) {
      for (let c = 0; c < 5; c++) {
        ctx.fillRect(x + 6 + c * 8, y + 19 + r * 6, 6, 4);
      }
    }
  }

  // 5. Backlog Monster (Spiky demon with glowing eyes)
  private drawBacklogMonster(ctx: CanvasRenderingContext2D) {
    const x = this.x;
    const y = this.y;
    const pulse = Math.sin(this.animTick / 4) * 2;

    // Body (dark jagged pixel blob)
    ctx.fillStyle = '#18181b';
    ctx.fillRect(x + 6, y + 8, 34, 40);

    // Spikes / Horns on head & sides
    ctx.fillRect(x + 8, y + 2, 6, 8);
    ctx.fillRect(x + 32, y + 2, 6, 8);
    ctx.fillRect(x + 2, y + 16, 6, 8);
    ctx.fillRect(x + 38, y + 16, 6, 8);

    // Glowing Menacing Red Eyes
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(x + 12, y + 18, 7, 5 + pulse);
    ctx.fillRect(x + 27, y + 18, 7, 5 + pulse);

    // Sharp White Teeth
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x + 14, y + 32, 4, 5);
    ctx.fillRect(x + 22, y + 32, 4, 5);
    ctx.fillRect(x + 28, y + 32, 4, 5);

    // Chest stamp: "M1" (Engineering Mathematics 1)
    ctx.fillStyle = '#f97316';
    ctx.font = 'bold 8px monospace';
    ctx.fillText('M1', x + 18, y + 44);
  }

  // 6. Attendance Shortage Notice (Overhead Banner - Slide Underneath!)
  private drawAttendanceNotice(ctx: CanvasRenderingContext2D) {
    const x = this.x;
    const y = this.y;

    // Hanging strings
    ctx.strokeStyle = 'rgba(255,255,255,0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x + 8, y - 20);
    ctx.lineTo(x + 8, y);
    ctx.moveTo(x + 60, y - 20);
    ctx.lineTo(x + 60, y);
    ctx.stroke();

    // Red Warning Banner
    ctx.fillStyle = '#dc2626';
    ctx.fillRect(x, y, 68, 30);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x, y, 68, 30);

    // Banner Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 7px monospace';
    ctx.fillText('ATTENDANCE < 75%', x + 3, y + 12);
    ctx.fillStyle = '#fef08a';
    ctx.fillText('SLIDE TO DODGE!', x + 5, y + 24);
  }

  // 7. VTU Result Notification (Overhead Browser Popup - Slide Underneath!)
  private drawVtuResult(ctx: CanvasRenderingContext2D) {
    const x = this.x;
    const y = this.y;

    // Window frame
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(x, y, 64, 34);
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x, y, 64, 34);

    // Window top titlebar
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(x, y, 64, 9);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 6px monospace';
    ctx.fillText('vtu.ac.in', x + 4, y + 7);

    // Window Body
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 6.5px monospace';
    ctx.fillText('504 GATEWAY', x + 4, y + 20);
    ctx.fillStyle = '#f97316';
    ctx.fillText('CRASHED! 💀', x + 4, y + 29);
  }

  // 8. Deadline Clock (Flying Alarm Clock - Slide Underneath!)
  private drawDeadline(ctx: CanvasRenderingContext2D) {
    const x = this.x;
    const y = this.y;
    const bob = Math.sin(this.animTick / 3) * 3;

    // Clock Body (Circle)
    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    ctx.arc(x + 22, y + 18 + bob, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Twin Bells
    ctx.fillStyle = '#e5e7eb';
    ctx.fillRect(x + 10, y + 2 + bob, 6, 6);
    ctx.fillRect(x + 28, y + 2 + bob, 6, 6);

    // Clock Face (White)
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(x + 22, y + 18 + bob, 11, 0, Math.PI * 2);
    ctx.fill();

    // Clock Hands pointing at 11:59
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x + 22, y + 18 + bob);
    ctx.lineTo(x + 20, y + 10 + bob); // Hour hand at 11
    ctx.moveTo(x + 22, y + 18 + bob);
    ctx.lineTo(x + 22, y + 8 + bob); // Minute hand at 12
    ctx.stroke();

    // "11:59" Tag underneath
    ctx.fillStyle = '#f97316';
    ctx.font = 'bold 6px monospace';
    ctx.fillText('11:59 PM', x + 3, y + 37 + bob);
  }
}
