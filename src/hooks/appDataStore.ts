import { create } from "zustand";
import initalTaskDetails from "../data/initialTaskDetails";

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
          currentTask: parsedAppDataInLocalStorage.currentTask,
          taskCategoryList: parsedAppDataInLocalStorage.taskCategoryList,
          taskSearchResults: state.taskCategoryList,
        };
      }
    ),
  setCurrentTaskDetails: (currentTask: any) =>
    set(
      (state: {
        tasks: string[];
        currentTask: any;
        taskCategoryList: string[];
        taskSearchResults: string[];
      }) => {
        return {
          ...state,
          currentTask,
        };
      }
    ),
  setTaskSearchResults: (query: string) =>
    set(
      (state: {
        tasks: string[];
        currentTask: any;
        taskCategoryList: string[];
        taskSearchResults: string[];
      }) => {
        const appDataInLocalStorage = localStorage.getItem("appData") as string;

        const parsedAppDataInLocalStorage = JSON.parse(appDataInLocalStorage);

        // Logic to set taskSearchResults based on taskName or description or priority or category or status.
        // Search is partial search

        const taskSearchResults = parsedAppDataInLocalStorage?.tasks?.filter(
          (task: any) => {
            return Object.values(task)?.some(
              (val) =>
                typeof val === "string" &&
                val.toLowerCase().includes(query.toLowerCase())
            );
          }
        );

        return {
          ...state,
          taskSearchResults,
        };
      }
    ),
  markTaskAsComplete: (currentTaskId: string) =>
    set(
      (state: {
        tasks: string[];
        currentTask: any;
        taskCategoryList: string[];
        taskSearchResults: string[];
      }) => {
        const appDataInLocalStorage = localStorage.getItem("appData") as string;

        const parsedAppDataInLocalStorage = JSON.parse(appDataInLocalStorage);

        parsedAppDataInLocalStorage.tasks =
          parsedAppDataInLocalStorage?.tasks?.map((task: any) => {
            const updatedStatus =
              task?.status === "completed" ? "in-progress" : "completed";
            if (task?.id === currentTaskId) {
              return { ...task, status: updatedStatus };
            } else {
              return task;
            }
          });

        // Add task to local storage
        localStorage.setItem(
          "appData",
          JSON.stringify(parsedAppDataInLocalStorage)
        );

        return {
          ...state,
          tasks: [...parsedAppDataInLocalStorage.tasks],
          currentTask: initalTaskDetails,
        };
      }
    ),
  addTask: (currentTask: any) =>
    set(
      (state: {
        tasks: string[];
        currentTask: any;
        taskCategoryList: string[];
        taskSearchResults: string[];
      }) => {
        const appDataInLocalStorage = localStorage.getItem("appData") as string;

        const parsedAppDataInLocalStorage = JSON.parse(appDataInLocalStorage);

        parsedAppDataInLocalStorage.tasks = [
          ...parsedAppDataInLocalStorage.tasks,
          currentTask,
        ];

        // Add task to local storage
        localStorage.setItem(
          "appData",
          JSON.stringify(parsedAppDataInLocalStorage)
        );

        return {
          ...state,
          tasks: [...parsedAppDataInLocalStorage.tasks],
          currentTask: initalTaskDetails,
        };
      }
    ),

  deleteTask: (currentTaskId: string) =>
    set(
      (state: {
        tasks: string[];
        currentTask: any;
        taskCategoryList: string[];
        taskSearchResults: string[];
      }) => {
        const appDataInLocalStorage = localStorage.getItem("appData") as string;

        const parsedAppDataInLocalStorage = JSON.parse(appDataInLocalStorage);

        const updatedTaskList = parsedAppDataInLocalStorage?.tasks?.filter(
          (task: any) => task?.id !== currentTaskId
        );

        // Task deleted during search must update the taskSearchResults list
        const updatedTaskSearchResultsList = state.taskSearchResults?.filter(
          (task: any) => task?.id !== currentTaskId
        );

        parsedAppDataInLocalStorage.tasks = [...updatedTaskList];

        // Add task to local storage
        localStorage.setItem(
          "appData",
          JSON.stringify(parsedAppDataInLocalStorage)
        );

        return {
          ...state,
          tasks: [...parsedAppDataInLocalStorage.tasks],
          currentTask: initalTaskDetails,
          taskSearchResults: [...updatedTaskSearchResultsList],
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
