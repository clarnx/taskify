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

        // Add category only if category does not exist
        if (!parsedAppDataInLocalStorage.taskCategoryList.includes(category)) {
          parsedAppDataInLocalStorage.taskCategoryList.push(category);

          localStorage.setItem(
            "appData",
            JSON.stringify(parsedAppDataInLocalStorage)
          );
        }

        return {
          tasks: parsedAppDataInLocalStorage.tasks,
          currentTask: state.currentTask,
          taskCategoryList: parsedAppDataInLocalStorage.taskCategoryList,
          taskSearchResults: state.taskCategoryList,
        };
      }
    ),
  deleteTaskCategory: (category: string, index: number) =>
    set(
      (state: {
        tasks: string[];
        currentTask: any;
        taskCategoryList: string[];
        taskSearchResults: string[];
      }) => {
        const appDataInLocalStorage = localStorage.getItem("appData") as string;

        const categoryToDelete = category;

        const parsedAppDataInLocalStorage = JSON.parse(appDataInLocalStorage);

        // Remove category from list
        if (
          category.length > 0 ||
          category !== null ||
          category !== undefined
        ) {
          const updatedCategoryList =
            parsedAppDataInLocalStorage.taskCategoryList.filter(
              (category: string) => category !== categoryToDelete
            );

          parsedAppDataInLocalStorage.taskCategoryList = updatedCategoryList;

          localStorage.setItem(
            "appData",
            JSON.stringify(parsedAppDataInLocalStorage)
          );
        }

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
