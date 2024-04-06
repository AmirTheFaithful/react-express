import { FC, ReactElement, useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

import CommentCard from "./CommentCard";

import "./list.css";

interface Comment {
  title: string;
  message: string;
}

const List: FC = (): ReactElement => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/comments")
      .then((response: AxiosResponse): void => setComments(response.data));
  }, []);

  return (
    <article>
      {comments &&
        comments.length > 0 &&
        comments.map(
          (comment: Comment, index: number): ReactElement => (
            <CommentCard comment={comment} key={index} />
          )
        )}
    </article>
  );
};

export default List;
