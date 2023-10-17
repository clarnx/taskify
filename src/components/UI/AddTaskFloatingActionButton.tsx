import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Fab } from "react-tiny-fab";

import "react-tiny-fab/dist/styles.css";

const AddTaskFloatingActionButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        centered
      >
        <Modal.Header className="border-0" closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>

        <Modal.Footer className="border-0">
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <Fab
        mainButtonStyles={{
          backgroundColor: "#7e56da",
          borderRadius: "50%",
        }}
        style={{
          bottom: 24,
          right: 12,
          zIndex: 1,
        }}
        event="click"
        icon={<i className="bi bi-plus display-6"></i>}
        alwaysShowTitle={true}
        onClick={() => setShowModal(true)}
      />
    </>
  );
};

export default AddTaskFloatingActionButton;
