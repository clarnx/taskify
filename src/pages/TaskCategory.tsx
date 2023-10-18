import { Form } from "react-bootstrap";
import useAppDataStore from "../hooks/appDataStore";
import TaskCategoryItems from "../components/TaskCategory/TaskCategoryItems";

const TaskCategory = () => {
  const taskCategoryList = useAppDataStore(
    (state: any) => state.taskCategoryList
  );

  const addTaskCategory = useAppDataStore(
    (state: any) => state.addTaskCategory
  );

  const handleOnEnter = (e: any) => {
    const currentCategory = e.target.value;
    if (e.key === "Enter") {
      addTaskCategory(currentCategory);
      e.target.value = ""
    }
  };

  return (
    <div className="row justify-content-between justify-content-lg-center m-0">
      <span className="w-100 w-md-50 fw-bolder">
        <h4 className="mb-4">Task Categories</h4>
      </span>

      <div className="w-100 d-flex justify-content-center align-items-center mt-1">
        <Form.Control
          className="w-100 w-md-50 shadow-none border border-2 border-secondary-subtle opacity-50"
          type="text"
          placeholder="Enter cetogory and hit enter..."
          onKeyDown={handleOnEnter}
        />
      </div>

      <div className="w-100 mt-4 d-flex  flex-column justify-content-center align-items-center gap-4">
        {taskCategoryList?.length > 0 ? (
          <TaskCategoryItems taskCategoryList={taskCategoryList} />
        ) : (
          "No added category"
        )}
      </div>
    </div>
  );
};

export default TaskCategory;
