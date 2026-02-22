"use client";

import { useState, useLayoutEffect } from "react";
import { useTheme } from "next-themes";
import { DarkIcon, LightIcon } from "next-mahine-icon";

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center p-2">
        <div className="h-7 w-7 animate-spin rounded-full border-2 border-gray-400 border-t-transparent" />
      </div>
    );
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };



  return (
    <button onClick={handleToggle} className="p-2">
      {isDark ? (
          <DarkIcon width={30} height={30} className="  cursor-pointer" />
      ) : (
          <LightIcon
          width={25}
          height={25}
         
            className="cursor-pointer "
          />
      )}
    </button>
  );
};

export default ThemeToggle;
