import { useEffect } from "react";

export default function RtlToggler() {
  const toggleRtl = () => {
    const currentRtl = localStorage.getItem("rtl") === "true";
    const newRtl = !currentRtl;

    localStorage.setItem("rtl", `${newRtl}`);
    window.location.reload();
  };
  useEffect(() => {
    const isRtl = localStorage.getItem("rtl") === "true";
    document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
    document.body.classList.toggle("rtl", isRtl);
  }, []);
  return (
    <a
      href="#"
      onClick={toggleRtl}
      id="toggle-rtl"
      className="btn-style-2 radius-3"
    >
      <span>rtl</span>
      <span>ltr</span>
    </a>
  );
}
