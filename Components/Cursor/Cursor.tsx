import { useContext, useEffect } from "react";
import useMousePosition from "./UseMousePosition";
import { MouseContext } from "../../context/mouseContext";
const Cursor = () => {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  useEffect(() => {
    if (!(navigator.userAgent.indexOf("Chrome") != -1)) {
      const dot: HTMLElement | null = document.querySelector(".dot");
      const ring: HTMLElement | null = document.querySelector(".ring")

      if (dot && ring) {
        ring.style.display = "none";
      }
    }
  }, [cursorType]);

  return (
    <>
      <div
        className={`dot ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
      <div
        className={`ring ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};
export default Cursor;
