import { useEffect, useRef, useState } from "react";
import Odometer from "odometer";
// import "odometer/themes/odometer-theme-default.css"; // if you need the CSS

interface OdometerInstance {
  update: (value: number) => void;
  // destroy?: () => void; // call if available in your build
}

type Props = { max?: number };

const OdometerComponent = ({ max = 100 }: Props) => {
  const odometerRef = useRef<HTMLDivElement | null>(null);
  const odometerInstRef = useRef<OdometerInstance | null>(null);
  const [value, setValue] = useState(0);

  // init once
  useEffect(() => {
    const el = odometerRef.current;
    if (!el) return;

    // initialize with a stable starting value (0); we’ll update via state
    odometerInstRef.current = new Odometer({ el, value: 0 });

    return () => {
      // odometerInstRef.current?.destroy?.();
      odometerInstRef.current = null;
    };
  }, []);

  // update when value changes
  useEffect(() => {
    odometerInstRef.current?.update(value);
  }, [value]);

  // intersection observer (fire once)
  useEffect(() => {
    const el = odometerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setValue(max);
            observer.unobserve(entry.target); // one-shot
          }
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el); // use captured node; don’t read ref on cleanup
      observer.disconnect();
    };
  }, [max]);

  return (
    <div ref={odometerRef} className="odometer">
      0
    </div>
  );
};

export default OdometerComponent;
