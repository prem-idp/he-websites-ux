"use client";
import { useEffect, useRef, useState } from "react";

interface LazyLoadWrapperProps {
    children: React.ReactNode;
    rootMargin?: string;
    threshold?: number;
}

const LazyLoadWrapper: React.FC<LazyLoadWrapperProps> = ({
    children,
    rootMargin = "0px",
    threshold = 0.1,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Stop observing once loaded
                }
            },
            { rootMargin, threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [rootMargin, threshold]);

    return <div ref={ref}>{isVisible ? children : null}</div>;
};

export default LazyLoadWrapper;
