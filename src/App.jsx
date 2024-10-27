import React, { useEffect, useState } from 'react';
import Comment from './components/Comment';

const App = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Načítanie komentárov z backendu
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('http://localhost:5000/comments');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched comments:', data);
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  const handleAddComment = async () => {
    if (!newComment) return;
  
    const newCommentData = {
      user: { username: "newUser"},
      content: newComment,
    };
  
    try {
      const response = await fetch('http://localhost:5000/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCommentData),
      });
  
      if (!response.ok) {
        const errorText = await response.text(); // Načítanie textu odpovede
        throw new Error(`Network response was not ok: ${errorText}`);
      }
  
      const addedComment = await response.json();
      setComments([...comments, addedComment]);
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };
  

  return (
    <main>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
      />
      <button onClick={handleAddComment}>Add Comment</button>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          user={comment.user}
          content={comment.content}
          createdAt={comment.createdAt}
          score={comment.score}
        />
      ))}
    </main>
  );
};

export default App;
