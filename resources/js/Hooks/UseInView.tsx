// hooks/useInView.tsx
import { useEffect, useState, useRef } from "react";

export function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // hanya animasi sekali
        }
      },
      { threshold: 0.2 } // 20% elemen masuk viewport
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}
