import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target.text.value;
    navigate(`/${form}`);
  };
  return (
    <Form onSubmit={handleSearch} className="d-flex">
      <Form.Group
        className="d-flex rounded-lg justify-content-center "
        controlId="formBasicEmail"
      >
        <Form.Control
          className="searchInput Input "
          type="text"
          name="text"
          placeholder="search"
        />
      </Form.Group>
      <Button className="searchBtn" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Search;
