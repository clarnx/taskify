import { create } from "zustand";

const useAppDataStore = create((set: any) => ({
  tasks: [],
  currentTask: {},
  taskCategoryList: [],
  taskSearchResults: [],
  initAppDataStore: () =>
    set(
      (state: {
        tasks: string[];
        currentTask: any;
        taskCategoryList: string[];
        taskSearchResults: string[];
      }) => {
        const appDataInLocalStorage = localStorage.getItem("appData") as string;

        const parsedAppDataInLocalStorage = JSON.parse(appDataInLocalStorage);

        return {
          tasks: parsedAppDataInLocalStorage.tasks,
          currentTask: state.currentTask,
          taskCategoryList: parsedAppDataInLocalStorage.taskCategoryList,
          taskSearchResults: state.taskCategoryList,
        };
      }
    ),
  addTaskCategory: (category: string) =>
    set(
      (state: {
        tasks: string[];
        currentTask: any;
        taskCategoryList: string[];
        taskSearchResults: string[];
      }) => {
        const appDataInLocalStorage = localStorage.getItem("appData") as string;

        const parsedAppDataInLocalStorage = JSON.parse(appDataInLocalStorage);

        parsedAppDataInLocalStorage.taskCategoryList.push(category);

        localStorage.setItem(
          "appData",
          JSON.stringify(parsedAppDataInLocalStorage)
        );

        return {
          tasks: parsedAppDataInLocalStorage.tasks,
          currentTask: state.currentTask,
          taskCategoryList: parsedAppDataInLocalStorage.taskCategoryList,
          taskSearchResults: state.taskCategoryList,
        };
      }
    ),
}));

export default useAppDataStore;
