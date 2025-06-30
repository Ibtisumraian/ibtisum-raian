import React, { useRef } from "react";

const BubbleWrapper = ({ children }) => {
  const containerRef = useRef(null);

  const handleClick = (e) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    for (let i = 0; i < 15; i++) {
      const bubble = document.createElement("span");
      const size = Math.random() * 10 + 5; // 5px to 15px
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 120 + 60; // 60px to 180px
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      Object.assign(bubble.style, {
        position: "absolute",
        left: `${offsetX}px`,
        top: `${offsetY}px`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: "#ec9956",
        opacity: "0.9",
        pointerEvents: "none",
        transform: "translate(0, 0)",
        transition: "transform 2s ease-out, opacity 1.5s ease-out",
        zIndex: 50,
      });

      container.appendChild(bubble);

      requestAnimationFrame(() => {
        bubble.style.transform = `translate(${x}px, ${y}px) scale(0.6)`;
        bubble.style.opacity = "0";
      });

      setTimeout(() => {
        bubble.remove();
      }, 2000);
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className="relative inline-block overflow-visible"
    >
      {children}
    </div>
  );
};

export default BubbleWrapper;
