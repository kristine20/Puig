"use client";
import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState(0); // or null if you want to handle it more explicitly

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // Set width right after mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
