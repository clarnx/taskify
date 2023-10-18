import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Fab } from "react-tiny-fab";

import AddTaskForm from "../Home/AddTaskForm";
import useAppDataStore from "../../hooks/appDataStore";
import ShortUniqueId from "short-unique-id";

import "react-tiny-fab/dist/styles.css";

const { randomUUID } = new ShortUniqueId({ length: 10 });

const AddTaskFloatingActionButton = () => {
  const [showModal, setShowModal] = useState(false);

  const addTask = useAppDataStore((state: any) => state.addTask);

  const currentTask = useAppDataStore((state: any) => state.currentTask);

  const handleAddTaskButtonOnClick = () => {
    const currentTaskId = randomUUID();

    addTask({ ...currentTask, id: currentTaskId });

    setShowModal(false);
  };

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
        <Modal.Body>
          <AddTaskForm />
        </Modal.Body>

        <Modal.Footer className="border-0">
          <Button
            className="me-2"
            variant="secondary"
            onClick={() => setShowModal(false)}
          >
            Close
          </Button>

          <Button variant="primary" onClick={handleAddTaskButtonOnClick}>
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
