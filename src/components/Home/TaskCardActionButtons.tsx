import useAppDataStore from "../../hooks/appDataStore";
import IconButton from "../UI/IconButton";

const TaskCardActionButtons = ({ taskDetails }: any) => {
  const deleteTask = useAppDataStore((state: any) => state.deleteTask);

  const markTaskAsComplete = useAppDataStore(
    (state: any) => state.markTaskAsComplete
  );

  return (
    <>
      <IconButton
        toolTipPlacement="top"
        toolTipText={
          taskDetails?.status === "completed"
            ? "Mark In-progress"
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
    </>
  );
};

export default TaskCardActionButtons;
