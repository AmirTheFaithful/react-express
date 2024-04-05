import { FC, ReactElement } from "react";

import "./commentCard.css";

interface Comment {
  title: string;
  message: string;
}

const CommentCard: FC<{ comment: Comment }> = ({ comment }): ReactElement => {
  return (
    <section>
      <h1>{comment.title}</h1>
      <p>{comment.message}</p>
    </section>
  );
};

export default CommentCard;
