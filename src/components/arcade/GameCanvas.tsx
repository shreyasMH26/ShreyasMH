import React, { useEffect, useRef, useState, useCallback } from 'react';
import { GameEngine } from './GameEngine';
import { DifficultyTier, MemeToast } from './types';
import { GameHUD } from './GameHUD';
import { StartScreen } from './StartScreen';
import { GameOverScreen } from './GameOverScreen';
import { GameControls } from './GameControls';
import { sounds } from './SoundEffects';

interface GameCanvasProps {
  onBackToPortfolio: () => void;
}

export const GameCanvas: React.FC<GameCanvasProps> = ({ onBackToPortfolio }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const engineRef = useRef<GameEngine | null>(null);

  // React State for UI
  const [gameState, setGameState] = useState<'MENU' | 'PLAYING' | 'GAMEOVER'>('MENU');
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [tier, setTier] = useState<DifficultyTier>({
    minScore: 0,
    maxScore: 100,
    name: 'First Semester',
    semester: 'Sem 1',
    baseSpeed: 6.2,
    spawnInterval: 95,
  });
  const [toast, setToast] = useState<MemeToast | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(sounds.getMuted());
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [hasShield, setHasShield] = useState<boolean>(false);
  const [coffeeTimer, setCoffeeTimer] = useState<number>(0);

  // Initialize Engine
  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new GameEngine(canvasRef.current, {
      onScoreUpdate: (currentScore, bestScore, currentTier) => {
        setScore(currentScore);
        setHighScore(bestScore);
        setTier(currentTier);
        if (engineRef.current) {
          setHasShield(engineRef.current.player.hasShield);
          setCoffeeTimer(engineRef.current.player.coffeeTimer);
        }
      },
      onGameOver: (finalScore, bestScore) => {
        setScore(finalScore);
        setHighScore(bestScore);
        setGameState('GAMEOVER');
      },
      onToast: (activeToast) => {
        setToast(activeToast);
      },
    });

    engineRef.current = engine;
    setHighScore(engine.highScore);

    // Initial render for background preview
    engine.render();

    const handleResize = () => {
      engine.resize();
      if (!engine.isRunning) {
        engine.render();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      engine.destroy();
    };
  }, []);

  // Keyboard controls with scroll prevention
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent browser space/arrow scrolling
      if (['Space', 'ArrowUp', 'ArrowDown'].includes(e.code)) {
        e.preventDefault();
      }

      if (e.code === 'Space' || e.code === 'ArrowUp') {
        if (gameState === 'MENU') {
          handleStartGame();
        } else if (gameState === 'GAMEOVER') {
          handleRestartGame();
        } else {
          engineRef.current?.jump();
        }
      } else if (e.code === 'ArrowDown') {
        if (gameState === 'PLAYING') {
          engineRef.current?.slide();
        }
      } else if (e.code === 'KeyR') {
        if (gameState === 'PLAYING' || gameState === 'GAMEOVER') {
          handleRestartGame();
        }
      } else if (e.code === 'KeyP') {
        if (gameState === 'PLAYING') {
          handleTogglePause();
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'ArrowDown') {
        engineRef.current?.releaseSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameState]);

  // Touch Swipe on Canvas
  const touchStartY = useRef<number>(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    if (deltaY > 30) {
      // Swipe down -> Slide
      engineRef.current?.slide();
      setTimeout(() => {
        engineRef.current?.releaseSlide();
      }, 500);
    } else {
      // Tap -> Jump
      if (gameState === 'MENU') {
        handleStartGame();
      } else if (gameState === 'GAMEOVER') {
        handleRestartGame();
      } else {
        engineRef.current?.jump();
      }
    }
  };

  const handleStartGame = useCallback(() => {
    setGameState('PLAYING');
    setIsPaused(false);
    engineRef.current?.start();
  }, []);

  const handleRestartGame = useCallback(() => {
    setGameState('PLAYING');
    setIsPaused(false);
    engineRef.current?.restart();
  }, []);

  const handleTogglePause = useCallback(() => {
    if (!engineRef.current || gameState !== 'PLAYING') return;
    engineRef.current.pause();
    setIsPaused(engineRef.current.isPaused);
  }, [gameState]);

  const handleToggleMute = useCallback(() => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
  }, []);

  return (
    <div
      className="relative w-full h-[480px] sm:h-[540px] md:h-[600px] max-w-5xl mx-auto rounded-3xl overflow-hidden border-2 border-white/15 bg-black shadow-[0_0_50px_rgba(0,0,0,0.8)] select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* HTML5 Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-pointer"
        onClick={() => {
          if (gameState === 'PLAYING') {
            engineRef.current?.jump();
          }
        }}
      />

      {/* CRT Scanline Retro Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.45) 50%)',
          backgroundSize: '100% 4px',
        }}
      />

      {/* CRT Vignette Edge Shadow */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.85)]" />

      {/* 1. HUD during gameplay */}
      {gameState === 'PLAYING' && (
        <GameHUD
          score={score}
          highScore={highScore}
          tier={tier}
          hasShield={hasShield}
          coffeeTimer={coffeeTimer}
          toast={toast}
          isMuted={isMuted}
          isPaused={isPaused}
          onToggleMute={handleToggleMute}
          onTogglePause={handleTogglePause}
        />
      )}

      {/* 2. Start Screen */}
      {gameState === 'MENU' && (
        <StartScreen
          onStart={handleStartGame}
          onBack={onBackToPortfolio}
        />
      )}

      {/* 3. Game Over Screen */}
      {gameState === 'GAMEOVER' && (
        <GameOverScreen
          score={score}
          highScore={highScore}
          onRestart={handleRestartGame}
          onBack={onBackToPortfolio}
        />
      )}

      {/* 4. On-Screen Touch Controls (Mobile) */}
      {gameState === 'PLAYING' && (
        <GameControls
          onJump={() => engineRef.current?.jump()}
          onSlideStart={() => engineRef.current?.slide()}
          onSlideEnd={() => engineRef.current?.releaseSlide()}
        />
      )}
    </div>
  );
};
