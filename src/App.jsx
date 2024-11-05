import React, { useEffect, useState } from "react";
import Comment from "./components/Comment";
import Textarea from "./components/Textarea";

const App = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/comments");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchComments();
  }, []);

  

  return (
    <main>
      <h1>Comments</h1>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <Textarea />
    </main>
  );
};

export default App;
