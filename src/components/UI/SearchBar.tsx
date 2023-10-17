import React from 'react'
import { Form } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center mt-5">
      <Form.Control
        className="w-50 shadow-none border border-2 border-secondary-subtle"
        type="text"
        placeholder="Search tasks"
      />
    </div>
  );
}

export default SearchBar