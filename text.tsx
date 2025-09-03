"use client";
import { useRef, useState } from "react";

export default function CoolBeansButton() {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [originStyle, setOriginStyle] = useState<React.CSSProperties>({});

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!btnRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // dynamic transform-origin at cursor point
    setOriginStyle({
      transformOrigin: `${x}px ${y}px`,
    });
  };

  return (
    <a
      href="#"
      ref={btnRef}
      onMouseEnter={handleMouseEnter}
      className="coolBeans relative inline-block"
    >
      hover me
      <span className="fill" style={originStyle}></span>
    </a>
  );
}
