import { useEffect, useRef } from "react";
import "./CursorLight.css";

const CursorLight = () => {
  const cursorLightRef = useRef(null);

  useEffect(() => {
    window.onmousemove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      cursorLightRef.current.style.left = x + "px";
      cursorLightRef.current.style.top = y + "px";
    };
  }, []);

  return <div ref={cursorLightRef} id="cursorLight" className="cursorLight"></div>;
};

export default CursorLight;
