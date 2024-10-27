const express = require("express");
const router = express.Router();
const fs = require("fs");

let comments = [];

fs.readFile("./data.json", (err, data) => {
  if (err) {
    console.error("Error reading data.json:", err);
    return;
  }

  const jsonData = JSON.parse(data);
  comments = jsonData.comments;
});

router.get("/", (req, res) => {
  res.json(comments);
});

router.post("/", (req, res) => {
  const newComment = {
    id: comments.id,
    user: req.body.user,
    content: req.body.content,
    createdAt: "Just now",
    score: 0,
    replies: [],
  };

  comments.push(newComment);

  fs.writeFile(
    "./data.json",
    JSON.stringify({ currentUser: {}, comments }),
    (err) => {
      if (err) {
        console.error("Error writing to data.json:", err);
      }
    }
  );

  res.status(201).json(newComment);
});

router.put("/:id", (req, res) => {
  const { id } = req.params; // Získaj id z parametrov
  const updatedComment = req.body; // Získaj nové údaje z tela požiadavky

  // Hľadaj komentár podľa id a aktualizuj ho
  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(id)
  );

  if (commentIndex !== -1) {
    comments[commentIndex] = { ...comments[commentIndex], ...updatedComment }; // Aktualizuj komentár

    // Ulož aktualizované komentáre do data.json
    fs.writeFile("./data.json", JSON.stringify({ comments }), (err) => {
      if (err) {
        console.error("Error writing to data.json:", err);
      }
    });

    res.status(200).json(comments[commentIndex]); // Vráť aktualizovaný komentár
  } else {
    res.status(404).json({ message: "Comment not found" }); // Ak komentár neexistuje
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const commentIndex = comments.findIndex(
    (comment) => comment.id !== parseInt(id)
  );

  if (commentIndex !== -1) {
    comments.splice(commentIndex, 1);

    fs.writeFile("./data.json", JSON.stringify({ comments }), (err) => {
      if (err) {
        console.error("Error writing to data.json:", err);
      }
    });
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Comment not found" });
  }
});

module.exports = router;
