import { Button, Modal } from "react-bootstrap";

const TaskDetailsModal = ({
  showTaskDetailsModal,
  setShowTaskDetailsModal,
  taskDetails,
}: {
  showTaskDetailsModal: boolean;
  setShowTaskDetailsModal: any;
  taskDetails: any;
}) => {
  return (
    <Modal
      show={showTaskDetailsModal}
      onHide={() => setShowTaskDetailsModal(false)}
      backdrop="static"
      centered
    >
      <Modal.Header className="border-0" closeButton>
        <Modal.Title>More Task Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* ` Task Name: ${taskDetails?.taskName || ""}\n Description: $
        {taskDetails?.description || ""}\n Priority: $
        {taskDetails?.priority || ""}\n Category: ${taskDetails?.category || ""}
        \n Status: ${taskDetails?.status || ""}\n Due Date: $
        {taskDetails?.dueDate || ""}\n ` */}
        <div className="d-flex mb-2">
          <p className="fw-bold me-2">Task Name:</p>

          <p className="fst-italic" style={{ textTransform: "capitalize" }}>
            {taskDetails?.taskName || ""}
          </p>
        </div>
        <div className="d-flex mb-2">
          <p className="fw-bold me-2">Description:</p>

          <p className="fst-italic" style={{ textTransform: "capitalize" }}>
            {taskDetails?.description || ""}
          </p>
        </div>

        <div className="d-flex mb-2">
          <p className="fw-bold me-2">Priority:</p>

          <p className="fst-italic" style={{ textTransform: "capitalize" }}>
            {taskDetails?.priority || ""}
          </p>
        </div>

        <div className="d-flex mb-2">
          <p className="fw-bold me-2">Category:</p>

          <p className="fst-italic" style={{ textTransform: "capitalize" }}>
            {taskDetails?.category || ""}
          </p>
        </div>

        <div className="d-flex mb-2">
          <p className="fw-bold me-2">Status:</p>

          <p className="fst-italic" style={{ textTransform: "capitalize" }}>
            {taskDetails?.status || ""}
          </p>
        </div>

        <div className="d-flex mb-2">
          <p className="fw-bold me-2">Due Date:</p>

          <p className="fst-italic" style={{ textTransform: "capitalize" }}>
            {taskDetails?.dueDate || ""}
          </p>
        </div>
      </Modal.Body>

      <Modal.Footer className="border-0">
        <Button
          className="me-2"
          variant="secondary"
          onClick={() => setShowTaskDetailsModal(false)}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskDetailsModal;
