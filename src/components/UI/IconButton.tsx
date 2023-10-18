import { OverlayTrigger, Tooltip } from "react-bootstrap";

const IconButton = ({
  toolTipPlacement = "top",
  toolTipText = "",
  icon,
  onClickHandler = () => {},
}: {
  toolTipPlacement: any;
  toolTipText: string;
  icon: any;
  onClickHandler: any;
}) => {
  return (
    <span>
      <button
        className="btn btn-sm rounded-5 border-0 shadow-none mx-1"
        onClick={onClickHandler}
      >
        <OverlayTrigger
          placement={toolTipPlacement}
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip>{toolTipText}</Tooltip>}
        >
          {icon}
        </OverlayTrigger>
      </button>
    </span>
  );
};

export default IconButton;
