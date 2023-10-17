import { useEffect, useState } from "react";
import { Fab } from "react-tiny-fab";

import "react-tiny-fab/dist/styles.css";

const AddTaskFloatingActionButton = () => {

  const [showFAB, setShowFAB] = useState(false);

  const [showModal, setShowModal] = useState(false)


  useEffect(() => {
    if (typeof window !== "undefined") {
      setShowFAB(true);
    }
  }, []);

  return showFAB === true ? (
    <Fab
      mainButtonStyles={{
        backgroundColor: "#7e56da",
        borderRadius: "50%",
      }}
      style={{
        bottom: 24,
        right:  12,
        zIndex: 1,
      }}
      event="click"
      icon={<i className="bi bi-plus display-6"></i>}
      alwaysShowTitle={true}
    //   onClick={}
    />
  ) : null;
};

export default AddTaskFloatingActionButton;
