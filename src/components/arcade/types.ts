export type PlayerState = 'RUNNING' | 'JUMPING' | 'SLIDING' | 'HIT' | 'DEAD';

export type ObstacleType =
  | 'assignment'
  | 'professor'
  | 'exam'
  | 'calculator'
  | 'backlog_monster'
  | 'attendance_notice'
  | 'vtu_result'
  | 'deadline';

export type CollectibleType = 'coffee' | 'notes' | 'laptop' | 'attendance';

export interface DifficultyTier {
  minScore: number;
  maxScore: number;
  name: string;
  semester: string;
  baseSpeed: number;
  spawnInterval: number; // in frames
}

export interface FloatingText {
  id: string;
  text: string;
  x: number;
  y: number;
  color: string;
  opacity: number;
  vy: number;
  life: number;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
}

export interface MemeToast {
  id: string;
  message: string;
  duration: number; // in frames
  age: number;
}
