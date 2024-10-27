import React from "react";

import replyIcon from "../assets/images/icon-reply.svg";

const Comment = ({user, content, createdAt, score}) => {
  return (
    <article className="card">
      <header>
        {/* <img src={user.image.webp} alt={user.username} /> */}
        <h1>{user.username}</h1>
        <p>{createdAt}</p>
      </header>
      <main>
        <p>
          {content}
        </p>
      </main>
      <footer>
        <div className="voteBtn">
          <button className="plus">+</button>
          <button className="number">{score}</button>
          <button className="minus">-</button>
        </div>
        <button className="replyBtn">
          <img src={replyIcon} alt="" />
          Reply
        </button>
      </footer>
    </article>
  );
};

export default Comment;
