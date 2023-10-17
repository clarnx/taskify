import { create } from "zustand";

const useAppDataStore = create((set: any) => ({
  tasks: [],
  taskCategory: [],
  initAppDataStore: () =>
    set((state: { tasks: string[]; taskCategory: string[] }) => {
      const appDataInLocalStorage = localStorage.getItem("appData") as string;

      const parsedAppDataInLocalStorage = JSON.parse(appDataInLocalStorage);
      return {
        tasks: parsedAppDataInLocalStorage.tasks,
        taskCategory: parsedAppDataInLocalStorage.taskCategory,
      };
    }),
}));

export default useAppDataStore;
