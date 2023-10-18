import { OverlayTrigger, Tooltip } from "react-bootstrap";
import useAppDataStore from "../../hooks/appDataStore";

const TaskCategoryCard = ({ category, index }: any) => {
  const deleteTaskCategory = useAppDataStore(
    (state: any) => state.deleteTaskCategory
  );

  const handleDeleteIconOnClick = () => {
    deleteTaskCategory(category);
  };

  return (
    <div className="w-100 w-md-50">
      <div className="card rounded-3 h-100 shadow mb-3 border-0 py-2">
        <div className="card-body">
          <span className="w-100 h-100 d-flex justify-content-between align-content-center">
            <h6 className="card-title fw-bold mb-0 text-decoration-none opacity-75">
              {category}
            </h6>

            <span>
              <button
                className="btn btn-sm rounded-5 border-0 shadow-none ms-2"
                onClick={handleDeleteIconOnClick}
              >
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={<Tooltip>Delete</Tooltip>}
                >
                  <i className="bi bi-trash fs-6 text-danger"></i>
                </OverlayTrigger>
              </button>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskCategoryCard;
