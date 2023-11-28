"use client"
import { useState, useEffect, useCallback } from "react";

export function useMediaQuery(width : number) {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e : any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width}px)`);
    if (media.addEventListener) {
      media.addEventListener("change", updateTarget);
    } else {
      media.addListener(updateTarget);
    }
    if (media.matches) {
      setTargetReached(true);
    }
    if (media.removeEventListener) {
      return () => media.removeEventListener("change", updateTarget);
    } else {
      return () => media.removeListener(updateTarget);
    }
  }, []);

  return targetReached;
}
