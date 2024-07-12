import { useState, useEffect } from "react";

interface ScreenSize {
  width: number;
  height: number;
  isMobile: boolean;
}

const useScreenSize = (): ScreenSize => {
  const [screen, setScreen] = useState<ScreenSize>({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth <= 700,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth <= 700,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screen;
};

export default useScreenSize;
