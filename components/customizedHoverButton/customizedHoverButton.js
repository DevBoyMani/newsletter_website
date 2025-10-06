"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

export default function CustomizedHoverButton({
  href = "",
  target = "",
  label = "customized button",
  fontSize = "",
  fontWeight = "",
  width = "",
  height = "",
  borderColor = "",
  hoverBorderColor = "",
  bgColor = "",
  hoverBgColor = "",
  hoverText = "",
  textColor = "",
  padding = "",
  margin = "",
}) {
  const btnRef = useRef(null);
  const [originStyle, setOriginStyle] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e) => {
    if (!btnRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setOriginStyle({
      transformOrigin: `${x}px ${y}px`,
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a
      href={href}
      ref={btnRef}
      target={target}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center justify-center rounded-full ${padding} ${margin} overflow-hidden group text-center transition-colors duration-300`}
      // style={{
      //   width,
      //   height,
      //   border: borderColor
      //     ? `1px solid ${isHovered ? hoverBgColor : borderColor}`
      //     : "none",
      //   backgroundColor: bgColor,
      //   color: isHovered ? hoverText : textColor,

      // }}
      style={{
        width,
        height,
        border: borderColor
          ? `1px solid ${isHovered ? hoverBgColor : borderColor}`
          : "none",
        backgroundColor: isHovered ? hoverBgColor : bgColor, // dynamically change
        color: isHovered ? hoverText : textColor,
      }}
    >
      {/* Expanding hover background */}
      <span
        style={{
          ...originStyle,
          backgroundColor: hoverBgColor,
        }}
        className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out z-0"
      />

      {/* Text */}
      <span
        className="relative z-10"
        style={{
          fontSize: fontSize.replace(/[\[\]]/g, ""),
          fontWeight: fontWeight.replace(/[\[\]]/g, ""),
          color: "inherit",
        }}
      >
        {label}
      </span>
    </a>
  );
}
