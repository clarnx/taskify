// Task data structure below
//===========================
// id
// title
// description
// dueDate
// priority (e.g., low, medium, high)
// status (e.g. completed)
// category
// createdAt

// Category data structure below
//===========================
// name

(function initAppData() {
  const currentAppDataInLocalStorage = localStorage.getItem("appData");
  if (currentAppDataInLocalStorage === null) {
    const appData = {
      tasks: [],
      taskCategory: [],
    };
    localStorage.setItem("appData", JSON.stringify(appData));
  }
})();
