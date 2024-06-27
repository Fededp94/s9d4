import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CommentArea = () => {
  const comments = [
    { id: 1, text: "Great book!" },
    { id: 2, text: "I found it very interesting." },
    { id: 3, text: "Would definitely recommend." },
  ];

  return (
    <div>
      <h5>Comments</h5>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  return (
    <Card
      style={{ width: "18rem", cursor: "pointer", marginBottom: "1rem" }}
      onClick={() => setSelected(!selected)}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        {selected && <CommentArea />}
      </Card.Body>
    </Card>
  );
};

const BookList = ({ books }) => {
  return (
    <Row>
      {books.map((book) => (
        <Col key={book.asin} md={4}>
          <SingleBook book={book} />
        </Col>
      ))}
    </Row>
  );
};

const App = () => {
  const books = [
    {
      asin: "1234567890",
      title: "Book Title 1",
      img: "https://example.com/book1.jpg",
    },
    {
      asin: "0987654321",
      title: "Book Title 2",
      img: "https://example.com/book2.jpg",
    },
  ];

  return (
    <div className="App" style={{ padding: "1rem" }}>
      <h1>Book List</h1>
      <BookList books={books} />
    </div>
  );
};

export default App;
