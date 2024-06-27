import React from "react";

const CommentArea = () => {
  const comments = [
    { id: 1, text: "Bel Libro!" },
    { id: 2, text: "Molto interessante" },
    { id: 3, text: "Raccomandato" },
  ];

  return (
    <div>
      <h5>Commenti</h5>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentArea;
