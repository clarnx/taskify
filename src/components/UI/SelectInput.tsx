import { Form } from "react-bootstrap";

const SelectInput = ({
  options = [],
  optionLabel = "Select",
  onChangeHandler = () => {},
}: {
  options: any[];
  optionLabel: string;
  onChangeHandler: any;
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{optionLabel}</Form.Label>
      <Form.Select
        className="w-100 shadow-none border border-2 border-secondary-subtle opacity-50"
        aria-label="Select input"
        onChange={onChangeHandler}
      >
        <option>Click to select</option>

        {options.map((option: string, index: number) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default SelectInput;
