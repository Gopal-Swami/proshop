import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form className="d-flex w-50" onSubmit={submitHandler}>
      <Form.Control
        type="search"
        placeholder="Search Products..."
        className="me-2"
        aria-label="Search"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button type="submit" variant="outline-success" className="btn-sm">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
