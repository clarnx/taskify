import { Form } from "react-bootstrap";

const Input = ({
  className = "",
  inputLabel = "Input",
  inputType = "text",
  placeholder = "",
  onInputHandler = () => {},
}: {
  className: string;
  inputLabel: string;
  inputType: string;
  placeholder: string;
  onInputHandler: any;
}) => {
  return inputType === "textarea" ? (
    <Form.Group className="mb-3">
      <Form.Label>{inputLabel}</Form.Label>
      <Form.Control
        className={`${className} w-100 shadow-none border border-2 border-secondary-subtle opacity-50`}
        type={inputType}
        placeholder={placeholder}
        onInput={onInputHandler}
        as="textarea"
        rows={2}
      />
    </Form.Group>
  ) : (
    <Form.Group className="mb-3">
      <Form.Label>{inputLabel}</Form.Label>
      <Form.Control
        className={`${className} w-100 shadow-none border border-2 border-secondary-subtle opacity-50`}
        type={inputType}
        placeholder={placeholder}
        onInput={onInputHandler}
      />
    </Form.Group>
  );
};

export default Input;
