import { debounce } from "@/utils/debounce";
import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [scrolled, setScrolled] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(500);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use 'auto' or 'instant' as well
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      setScrolled(currentScroll);

      const totalScrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollHeight(totalScrollHeight);
    };
    const debouncedScroll = debounce(handleScroll, 50); // tweak as needed

    handleScroll(); // initial
    window.addEventListener("scroll", debouncedScroll);

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, []);

  return (
    <div
      className={`progress-wrap ${scrolled > 150 ? "active-progress" : ""}`}
      onClick={() => scrollToTop()}
    >
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            strokeDasharray: "307.919, 307.919",
            transition: "none",
            strokeDashoffset: 307.919 - (scrolled / scrollHeight) * 307.919,
          }}
        />
      </svg>
    </div>
  );
}
