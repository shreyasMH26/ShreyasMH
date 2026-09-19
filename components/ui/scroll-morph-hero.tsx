"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

export interface ProjectCardItem {
    src: string;
    title?: string;
    category?: string;
}

interface FlipCardProps {
    src: string;
    index: number;
    total: number;
    phase: AnimationPhase;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
    title?: string;
    category?: string;
}

// --- FlipCard Component ---
const IMG_WIDTH = 64;
const IMG_HEIGHT = 90;

function FlipCard({
    src,
    index,
    target,
    title,
    category
}: FlipCardProps) {
    return (
        <motion.div
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 15,
            }}
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className="cursor-pointer group"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-zinc-200 border border-black/10"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={src}
                        alt={title || `project-${index}`}
                        className="h-full w-full object-cover select-none pointer-events-none"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-xl bg-[#051A24] flex flex-col items-center justify-center p-2.5 border border-white/10 text-center select-none"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <p className="text-[7px] font-mono font-bold text-sky-400 uppercase tracking-widest mb-0.5">
                        {category || 'PROJECT'}
                    </p>
                    <p className="text-[10px] font-serif font-semibold text-white leading-tight line-clamp-2 px-1">
                        {title || 'Details'}
                    </p>
                    <span className="text-[7px] font-mono text-[#8EA3AD] mt-1 tracking-wider uppercase">
                        View
                    </span>
                </div>
            </motion.div>
        </motion.div>
    );
}

// --- Verified Unsplash Stock Images ---
const DEFAULT_IMAGES = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1534972195531-a756b1126975?w=500&auto=format&fit=crop&q=80"
];

const DEFAULT_PROJECT_TITLES = [
    { title: "XTICH Platform", category: "BRAND" },
    { title: "EchoVerse AI", category: "INTELLIGENCE" },
    { title: "AI Steering Wheel", category: "COMPUTING" },
    { title: "SecureVault", category: "SECURITY" },
    { title: "IoT Laser Rig", category: "HARDWARE" },
    { title: "Doubt System", category: "EDTECH" },
    { title: "Autonomous Agents", category: "AI LABS" },
    { title: "Vector Graph DB", category: "DATA" },
    { title: "macOS Interface", category: "SYSTEMS" },
    { title: "Neural Synthesis", category: "RESEARCH" },
    { title: "Local LLM Hub", category: "EDGE AI" },
    { title: "Hardware Microcontroller", category: "SYSTEM" },
    { title: "Client Encryption", category: "CRYPTO" },
    { title: "Academic Portal", category: "PLATFORM" },
    { title: "Telemetry Dashboard", category: "ANALYTICS" },
    { title: "Audio Visualizer", category: "SOUND" },
    { title: "Dynamic Marquee", category: "INTERFACE" },
    { title: "Bento Systems", category: "DESIGN" },
    { title: "Embedded C++", category: "FIRMWARE" },
    { title: "Next-Gen Studio", category: "PORTFOLIO" },
];

const TOTAL_IMAGES = 20;
const MAX_SCROLL = 3000;

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export interface ScrollMorphHeroProps {
    introHeading?: string;
    introSubheading?: string;
    activeHeading?: string;
    activeDescription?: string;
    images?: string[];
    className?: string;
}

export default function IntroAnimation({
    introHeading = "The future is built on AI.",
    introSubheading = "SCROLL TO EXPLORE",
    activeHeading = "Explore Selected Work",
    activeDescription = "Discover software architectures, AI operating layers, and physical systems designed from zero to one.",
    images = DEFAULT_IMAGES,
    className = ""
}: ScrollMorphHeroProps) {
    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };

        const observer = new ResizeObserver(handleResize);
        observer.observe(containerRef.current);

        setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        });

        return () => observer.disconnect();
    }, []);

    const virtualScroll = useMotionValue(0);
    const scrollRef = useRef(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            const current = scrollRef.current;
            if ((current >= MAX_SCROLL && e.deltaY > 0) || (current <= 0 && e.deltaY < 0)) {
                return;
            }

            e.preventDefault();

            const newScroll = Math.min(Math.max(current + e.deltaY, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };

        let touchStartY = 0;
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };
        const handleTouchMove = (e: TouchEvent) => {
            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;
            touchStartY = touchY;

            const current = scrollRef.current;
            if ((current >= MAX_SCROLL && deltaY > 0) || (current <= 0 && deltaY < 0)) {
                return;
            }

            const newScroll = Math.min(Math.max(current + deltaY, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };

        container.addEventListener("wheel", handleWheel, { passive: false });
        container.addEventListener("touchstart", handleTouchStart, { passive: true });
        container.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleWheel);
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
        };
    }, [virtualScroll]);

    const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
    const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

    const scrollRotate = useTransform(virtualScroll, [600, 3000], [0, 360]);
    const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const relativeX = e.clientX - rect.left;

            const normalizedX = (relativeX / rect.width) * 2 - 1;
            mouseX.set(normalizedX * 100);
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    useEffect(() => {
        const timer1 = setTimeout(() => setIntroPhase("line"), 500);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
        return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, []);

    const imageList = useMemo(() => {
        if (images && images.length >= TOTAL_IMAGES) return images.slice(0, TOTAL_IMAGES);
        return DEFAULT_IMAGES;
    }, [images]);

    const scatterPositions = useMemo(() => {
        return imageList.map(() => ({
            x: (Math.random() - 0.5) * 1500,
            y: (Math.random() - 0.5) * 1000,
            rotation: (Math.random() - 0.5) * 180,
            scale: 0.6,
            opacity: 0,
        }));
    }, [imageList]);

    const [morphValue, setMorphValue] = useState(0);
    const [rotateValue, setRotateValue] = useState(0);
    const [parallaxValue, setParallaxValue] = useState(0);

    useEffect(() => {
        const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
        const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
        const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
        return () => {
            unsubscribeMorph();
            unsubscribeRotate();
            unsubscribeParallax();
        };
    }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

    const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
    const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

    return (
        <div ref={containerRef} className={`relative w-full h-full bg-[#FAFAFA] overflow-hidden select-none ${className}`}>
            <div className="flex h-full w-full flex-col items-center justify-center perspective-1000">

                <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2 px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 1 }}
                        className="text-2xl font-serif font-medium tracking-tight text-[#051A24] md:text-4xl"
                    >
                        {introHeading}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 0.6 - morphValue } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-4 text-xs font-mono font-bold tracking-[0.25em] text-[#273C46]"
                    >
                        {introSubheading}
                    </motion.p>
                </div>

                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="absolute top-[8%] sm:top-[10%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4 max-w-xl"
                >
                    <span className="text-xs font-mono uppercase tracking-widest text-[#273C46] mb-2 font-semibold">
                        3D Showcase
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-semibold text-[#0D212C] tracking-tight mb-3">
                        {activeHeading}
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-[#273C46] leading-relaxed">
                        {activeDescription}
                    </p>
                </motion.div>

                <div className="relative flex items-center justify-center w-full h-full">
                    {imageList.slice(0, TOTAL_IMAGES).map((src, i) => {
                        let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                        if (introPhase === "scatter") {
                            target = scatterPositions[i] || { x: 0, y: 0, rotation: 0, scale: 0.6, opacity: 0 };
                        } else if (introPhase === "line") {
                            const lineSpacing = 72;
                            const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
                            const lineX = i * lineSpacing - lineTotalWidth / 2;
                            target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                        } else {
                            const isMobile = containerSize.width < 768;
                            const minDimension = Math.min(containerSize.width || 800, containerSize.height || 600);

                            const circleRadius = Math.min(minDimension * 0.35, 340);
                            const circleAngle = (i / TOTAL_IMAGES) * 360;
                            const circleRad = (circleAngle * Math.PI) / 180;
                            const circlePos = {
                                x: Math.cos(circleRad) * circleRadius,
                                y: Math.sin(circleRad) * circleRadius,
                                rotation: circleAngle + 90,
                            };

                            const baseRadius = Math.min(containerSize.width || 800, (containerSize.height || 600) * 1.5);
                            const arcRadius = baseRadius * (isMobile ? 1.35 : 1.1);

                            const arcApexY = (containerSize.height || 600) * (isMobile ? 0.35 : 0.25);
                            const arcCenterY = arcApexY + arcRadius;

                            const spreadAngle = isMobile ? 100 : 130;
                            const startAngle = -90 - (spreadAngle / 2);
                            const step = spreadAngle / (TOTAL_IMAGES - 1);

                            const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
                            const maxRotation = spreadAngle * 0.8;
                            const boundedRotation = -scrollProgress * maxRotation;

                            const currentArcAngle = startAngle + (i * step) + boundedRotation;
                            const arcRad = (currentArcAngle * Math.PI) / 180;

                            const arcPos = {
                                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                rotation: currentArcAngle + 90,
                                scale: isMobile ? 1.35 : 1.7,
                            };

                            target = {
                                x: lerp(circlePos.x, arcPos.x, morphValue),
                                y: lerp(circlePos.y, arcPos.y, morphValue),
                                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                                scale: lerp(1, arcPos.scale, morphValue),
                                opacity: 1,
                            };
                        }

                        const meta = DEFAULT_PROJECT_TITLES[i % DEFAULT_PROJECT_TITLES.length];

                        return (
                            <FlipCard
                                key={i}
                                src={src}
                                index={i}
                                total={TOTAL_IMAGES}
                                phase={introPhase}
                                target={target}
                                title={meta.title}
                                category={meta.category}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
