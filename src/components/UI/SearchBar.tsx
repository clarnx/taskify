import { Form } from 'react-bootstrap';

const SearchBar = ({placeholder = "Search"}: {placeholder: string}) => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center mt-5">
      <Form.Control
        className="w-100 w-md-50 shadow-none border border-2 border-secondary-subtle opacity-50"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchBar