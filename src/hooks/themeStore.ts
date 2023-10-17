import { create } from "zustand";

const useThemeStore = create((set: any) => ({
  currentTheme: null,
  initThemeInStore: () =>
    set((state: { currentTheme: any }) => {
      const currentThemeInLocalStorage = localStorage.getItem("currentTheme");
      return {
        currentTheme: currentThemeInLocalStorage,
      };
    }),
  toggleTheme: () =>
    set((state: { currentTheme: any }) => {
      if (state.currentTheme === "light") {
        localStorage.setItem("currentTheme", "dark");
        return {
          currentTheme: "dark",
        };
      } else if (state.currentTheme === "dark") {
        localStorage.setItem("currentTheme", "light");
        return {
          currentTheme: "light",
        };
      }
    }),
}));

export default useThemeStore;
