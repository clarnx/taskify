// import formatDate from "../../../utils/formatDate";
// import DashboardPostActionButtons from "./DashboardPostActionButtons";

const TaskCard = ({ taskDetails }: any) => {
  return (
    <div className="w-100 w-md-50">
      <div className="card rounded-3 h-100 shadow mb-3 border-0">
        <div className="card-body pb-0">
          <div className="row">
            <div className="col-12 col-md-8">
              <h6 className="card-title fw-bold mb-0">
                <a
                  href={``}
                  className="link-secondary-alt text-decoration-none"
                >
                  {/* {taskDetails.title} */}
                  Walk the dog
                </a>
              </h6>

              <div className="d-flex flex-row mt-3 mt-md-2">
                <div className="">
                  <span
                    className="badge text-success"
                    style={{
                      backgroundColor: "#17c96420",
                    }}
                  >
                    In-progress
                  </span>
                </div>

                <div className="d-flex align-items-center opacity-75">
                  <i className="bi bi-dot mx-1"></i>
                  {/* <small>{formatDate(taskDetails.createdAt)}</small> */}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mt-3 mt-md-0">Action Buttons</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
