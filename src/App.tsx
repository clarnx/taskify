import React, { useEffect } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useThemeStore from "./hooks/themeStore";
import useAppDataStore from "./hooks/appDataStore";
import Layout from "./components/UI/Layout";
import Home from "./components/Home/Index";

function App() {
  const currentTheme = useThemeStore((state: any) => state.currentTheme);

  const initThemeInStore = useThemeStore(
    (state: any) => state.initThemeInStore
  );

  const initAppDataStore = useAppDataStore(
    (state: any) => state.initAppDataStore
  );

  // Initialize app data and theme

  useEffect(() => {
    initThemeInStore();
  }, [initThemeInStore]);

  useEffect(() => {
    initAppDataStore();
  }, [initAppDataStore]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document
        ?.querySelector("body")
        ?.setAttribute("data-bs-theme", currentTheme);
    }
  }, [currentTheme]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  );
}

export default App;
