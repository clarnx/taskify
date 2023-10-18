import toast from "react-hot-toast";
import useAppDataStore from "../../hooks/appDataStore";
import IconButton from "../UI/IconButton";
import { useState } from "react";
import TaskDetailsModal from "./TaskDetailsModal";

const TaskCardActionButtons = ({ taskDetails }: any) => {
  const [showTaskDetailsModal, setShowTaskDetailsModal] = useState(false);
  const deleteTask = useAppDataStore((state: any) => state.deleteTask);

  const markTaskAsComplete = useAppDataStore(
    (state: any) => state.markTaskAsComplete
  );

  const copyTaskDetailsToClipboard = () => {
    const taskDetailsTextToCopy = `
    Task Name: ${taskDetails?.taskName || ""}\n
    Description: ${taskDetails?.description || ""}\n
    Priority: ${taskDetails?.priority || ""}\n
    Category: ${taskDetails?.category || ""}\n
    Status: ${taskDetails?.status || ""}\n
    Due Date: ${taskDetails?.dueDate || ""}\n
    `;
    navigator.clipboard.writeText(taskDetailsTextToCopy);

    toast.success("Task details copied to clipboard", {
      className: "mt-3",
    });
  };

  return (
    <>
      <TaskDetailsModal
        showTaskDetailsModal={showTaskDetailsModal}
        setShowTaskDetailsModal={setShowTaskDetailsModal}
        taskDetails={taskDetails}
      />
      <IconButton
        toolTipPlacement="top"
        toolTipText="View more"
        icon={<i className="bi bi-eye fs-6 text-primary"></i>}
        onClickHandler={() => setShowTaskDetailsModal(true)}
      />
      <IconButton
        toolTipPlacement="top"
        toolTipText={
          taskDetails?.status === "completed"
            ? "Mark in-progress"
            : "Mark complete"
        }
        icon={
          taskDetails?.status === "completed" ? (
            <i className="bi bi-dash-circle fs-6 text-warning"></i>
          ) : (
            <i className="bi bi-check-circle fs-6 text-success"></i>
          )
        }
        onClickHandler={() => markTaskAsComplete(taskDetails?.id)}
      />

      <IconButton
        toolTipPlacement="top"
        toolTipText="Copy to clipboard"
        icon={<i className="bi bi-clipboard-check fs-6 opacity-75"></i>}
        onClickHandler={copyTaskDetailsToClipboard}
      />

      <IconButton
        toolTipPlacement="top"
        toolTipText="Delete"
        icon={<i className="bi bi-trash fs-6 text-danger"></i>}
        onClickHandler={() => deleteTask(taskDetails?.id)}
      />
    </>
  );
};

export default TaskCardActionButtons;
