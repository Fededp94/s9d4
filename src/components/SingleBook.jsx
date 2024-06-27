import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  return (
    <Card
      style={{ width: "18rem", cursor: "pointer" }}
      onClick={() => setSelected(!selected)}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        {selected && <CommentArea />}
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
