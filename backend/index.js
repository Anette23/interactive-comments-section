const express = require("express");
const router = express.Router();
const fs = require("fs");

const readData = () => {
  try {
    const data = fs.readFileSync("./data.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data:", error);
    throw error;
  }
};

const writeData = (data) => {
  try {
    fs.writeFileSync("./data.json", JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing data:", error);
    throw error;
  }
};

// GET endpoint
router.get("/comments", (req, res) => {
  try {
    const data = readData();
    res.json(data.comments);
  } catch (error) {
    res.status(500).json({ message: "Error reading comments", error });
  }
});

// POST endpoint
router.post("/comments", (req, res) => {
  try {
    const data = readData();

    const newComment = {
      id: Date.now(),
      content:req.body.content,
      createdAt: new Date().toISOString(),
      score:0,
      user:data.currentUser,
      replies:[],
    }
    if (req.body.parentId) {
      const parentComment = data.comments.find(
        (comment) => comment.id === req.body.parentId
      );
      if (parentComment) {
        parentComment.replies.push(newComment);
      } else {
        return res.status(404).json({ message: "Parent comment not found" });
      }
    } else {
      
      data.comments.push(newComment);
    }
    data.comments.push(newComment)
    writeData(data)
    res.status(201).json(newComment)
  
  } catch (error) {
    res.status(500).json({ message: "Error adding comment", error })
  }
});

module.exports = router;
