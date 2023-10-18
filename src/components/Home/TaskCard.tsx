// import formatDate from "../../../utils/formatDate";
// import DashboardPostActionButtons from "./DashboardPostActionButtons";

const TaskCard = ({ taskDetails }: any) => {
  return (
    <div className="w-100 w-md-50">
      <div className="card rounded-3 h-100 shadow mb-3 border-0 py-3">
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
                    className="badge text-success"
                    style={{
                      backgroundColor: "#17c96420",
                    }}
                  >
                    {taskDetails?.status}
                  </span>
                </div>

                <div className="d-flex align-items-center opacity-75">
                  <i className="bi bi-dot"></i>
                  <div className="">
                    <span
                      className="badge text-info"
                      style={{
                        backgroundColor: "#0dcaf020",
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
              Action Buttons
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
