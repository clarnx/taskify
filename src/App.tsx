import { Suspense, useEffect } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useThemeStore from "./hooks/themeStore";
import useAppDataStore from "./hooks/appDataStore";
import Layout from "./components/UI/Layout";
import Home from "./pages/Home";
import TaskCategory from "./pages/TaskCategory";

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
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "/task-category",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <TaskCategory />
        </Suspense>
      ),
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
