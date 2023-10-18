// import formatDate from "../../../utils/formatDate";

import TaskCardActionButtons from "./TaskCardActionButtons";

const TaskCard = ({ taskDetails }: any) => {
  const getPriorityTextColor = (priority: string) => {
    if (priority === "low") {
      return "text-info";
    }

    if (priority === "medium") {
      return "text-warning";
    }

    if (priority === "high") {
      return "text-danger";
    }
  };

  const getPriorityTextBackgroundColor = (priority: string) => {
    if (priority === "low") {
      return "#0dcaf020";
    }

    if (priority === "medium") {
      return "#f5a62320";
    }

    if (priority === "high") {
      return "#f2136120";
    }
  };

  return (
    <div className="w-100 w-md-50">
      <div className="card rounded-3 h-100 shadow mb-4 border-0 py-3">
        <div className="card-body pb-0">
          <div className="row">
            <div className="col-12 col-md-8">
              <h6 className="card-title fw-bold mb-0">
                <a className="link-secondary-alt text-decoration-none">
                  {taskDetails?.taskName}
                </a>
              </h6>
              <small className="fw-medium fst-italic opacity-50">
                {taskDetails?.category}
              </small>

              <div className="d-flex flex-row mt-3 mt-md-2">
                <div className="">
                  <span
                    className={`badge ${
                      taskDetails?.status === "completed"
                        ? "text-success"
                        : "text-warning"
                    }`}
                    style={{
                      backgroundColor:
                        taskDetails?.status === "completed"
                          ? "#17c96420"
                          : "#f5a62320",
                    }}
                  >
                    {taskDetails?.status}
                  </span>
                </div>

                <div className="d-flex align-items-center">
                  <i className="bi bi-dot"></i>
                  <div className="">
                    <span
                      className={`badge ${getPriorityTextColor(
                        taskDetails?.priority
                      )}`}
                      style={{
                        backgroundColor: getPriorityTextBackgroundColor(
                          taskDetails?.priority
                        ),
                      }}
                    >
                      {taskDetails?.priority}
                    </span>
                  </div>
                  {/* <small>{formatDate(taskDetails.createdAt)}</small> */}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mt-3 mt-md-0 d-flex justify-content-start justify-content-md-end">
              <TaskCardActionButtons taskDetails={taskDetails} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
