import useAppDataStore from "../../hooks/appDataStore";
import IconButton from "../UI/IconButton";

const TaskCardActionButtons = ({ taskDetails }: any) => {
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
  };

  return (
    <>
      <IconButton
        toolTipPlacement="top"
        toolTipText="View more"
        icon={<i className="bi bi-eye fs-6 text-primary"></i>}
        onClickHandler={() => ""}
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
        toolTipText="Delete"
        icon={<i className="bi bi-trash fs-6 text-danger"></i>}
        onClickHandler={() => deleteTask(taskDetails?.id)}
      />

      <IconButton
        toolTipPlacement="top"
        toolTipText="Copy to clipboard"
        icon={<i className="bi bi-clipboard-check fs-6 text-warning"></i>}
        onClickHandler={copyTaskDetailsToClipboard}
      />
    </>
  );
};

export default TaskCardActionButtons;
