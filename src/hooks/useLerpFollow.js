import { useEffect } from "react";

// One shared pointer position for every follower on the page.
const pointer = { x: 0, y: 0, moved: false };
let listening = false;

const listen = () => {
  if (listening) return;
  listening = true;
  pointer.x = window.innerWidth / 2;
  pointer.y = window.innerHeight / 2;
  window.addEventListener(
    "pointermove",
    (e) => {
      if (e.pointerType && e.pointerType !== "mouse") return;
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.moved = true;
    },
    { passive: true }
  );
};

/**
 * Eases an element toward the pointer every frame by writing its transform directly
 * (no React re-renders). With `relativeTo`, coordinates are local to that container.
 */
const useLerpFollow = (ref, { ease = 0.15, enabled = true, relativeTo } = {}) => {
  useEffect(() => {
    if (!enabled) return undefined;
    const el = ref.current;
    if (!el) return undefined;
    listen();

    let x = pointer.x;
    let y = pointer.y;
    let lastX = Infinity; // forces the first write
    let lastY = Infinity;
    let raf;

    const loop = () => {
      x += (pointer.x - x) * ease;
      y += (pointer.y - y) * ease;
      let tx = x;
      let ty = y;
      if (relativeTo && relativeTo.current) {
        const r = relativeTo.current.getBoundingClientRect();
        tx -= r.left;
        ty -= r.top;
      }
      if (Math.abs(tx - lastX) > 0.1 || Math.abs(ty - lastY) > 0.1) {
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        lastX = tx;
        lastY = ty;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [ref, ease, enabled, relativeTo]);
};

export const pointerHasMoved = () => pointer.moved;

export default useLerpFollow;
