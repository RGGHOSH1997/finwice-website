import { useState, useRef, useEffect } from "react";

interface ProgressBarComponentProps {
  max: number;
  children?: React.ReactNode;
}

const ProgressBarComponent = ({ max, children }: ProgressBarComponentProps) => {
  const [counted, setCounted] = useState<number>(0);
  const targetElement = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<number | null>(null);

  const startCountup = () => {
    const intervalId = setInterval(() => {
      setCounted((prevCounted) => {
        const newCounted = prevCounted + 1;
        if (newCounted >= max) {
          clearInterval(intervalId);
        }
        return newCounted;
      });
    }, 2000 / max);
  };

  useEffect(() => {
    const handleIntersection = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCountup();
          observer.unobserve(entry.target);
        }
      });
    };

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetElement.current) {
      observer.observe(targetElement.current);
    }

    return () => {
      if (targetElement.current) {
        observer.unobserve(targetElement.current);
      }
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
    // Re-run when max changes to restart progression on new target
  }, [max]);
  return (
    <>
      <div
        ref={targetElement}
        className="value"
        style={{ width: `${counted}%` }}
      >
        {children}
      </div>
    </>
  );
};

export default ProgressBarComponent;
