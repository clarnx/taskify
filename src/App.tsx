import React, { useEffect } from "react";

import Navbar from "./components/UI/Navbar";
import useThemeStore from "./hooks/themeStore";

function App() {
  const currentTheme = useThemeStore((state: any) => state.currentTheme);
  const initThemeInStore = useThemeStore(
    (state: any) => state.initThemeInStore
  );

  useEffect(() => {
    initThemeInStore();
  }, [initThemeInStore]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document
        ?.querySelector("body")
        ?.setAttribute("data-bs-theme", currentTheme);
    }
  }, [currentTheme]);
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
