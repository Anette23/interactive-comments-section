import React from "react";
import replyIcon from "../assets/images/icon-reply.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";

const Comment = ({ comment }) => {
  return (
    <article className="card">
      <header>
        <img src={comment.user.image?.webp} alt={comment.user.username} />
        <h1>{comment.user.username}</h1>
        <p>{comment.createdAt}</p>
      </header>
      <main>
        {comment.replyingTo ? (
          <p>
            <strong>{comment.replyingTo}</strong> {comment.content}
          </p>
        ) : (
          <p>{comment.content}</p>
        )}
      </main>
      <footer>
        <div>
          <button>
            <img src={plusIcon} alt="add button for vote" />
            <p>{comment.score}</p>
            <img src={minusIcon} alt="decrease button for vote" />
          </button>
        </div>
        <div>
          <button>
            <img src={replyIcon} alt="button for reply on comment" />
            Reply
          </button>
        </div>
      </footer>
      {comment.replies && comment.replies.length > 0 && (
        <div>
          {comment.replies.map((reply) => (
            <article key={reply.id}>
              <header>
                <img src={reply.user.image?.webp} alt={reply.user.username} />
                <h1>{reply.user.username}</h1>
                <p>{reply.createdAt}</p>
              </header>
              <main>
                <p>
                  {reply.replyingTo && <strong>{reply.replyingTo} </strong>}
                  {reply.content}
                </p>
              </main>
              <footer>
                <div>
                  <button>
                    <img src={plusIcon} alt="add button for vote" />
                    <p>{reply.score}</p>
                    <img src={minusIcon} alt="decrease button for vote" />
                  </button>
                </div>
                <div>
                  <button>
                    <img src={replyIcon} alt="button for reply on comment" />
                    Reply
                  </button>
                </div>
              </footer>
            </article>
          ))}
        </div>
      )}
    </article>
  );
};

export default Comment;
