import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  animation?: "fade-in-up" | "fade-in" | "scale-in" | "slide-in-right";
}

const ANIM_CLASS: Record<NonNullable<RevealProps["animation"]>, string> = {
  "fade-in-up": "animate-fade-in-up",
  "fade-in": "animate-fade-in",
  "scale-in": "animate-scale-in",
  "slide-in-right": "animate-slide-in-right",
};

const Reveal = ({ children, delay = 0, className, animation = "fade-in-up" }: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const style: CSSProperties = visible ? { animationDelay: `${delay}ms` } : { opacity: 0 };

  return (
    <div ref={ref} className={cn(visible && ANIM_CLASS[animation], className)} style={style}>
      {children}
    </div>
  );
};

export default Reveal;
