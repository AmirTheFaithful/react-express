import { FC, ReactElement, useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

import "../../styles/components/comments/card.scss";

import NoAvatar from "../../assets/no-avatar-male.png";

const CommentCard: FC = (): ReactElement => {
  // const [author, setAuthor] = useState<UserObject | undefined>();

  // useEffect((): void => {
  //   axios
  //     .get(`http://localhost:2000/users/${comment.authorId}`)
  //     .then((response: AxiosResponse): void => setAuthor(response.data));
  // }, []);

  // if (!author) {
  //   return <div>User not found.</div>;
  // }

  return (
    <section className="comment-card">
      <div className="info">
        <img className="avatar" src={NoAvatar} />
        <div className="metrics">
          <h2 className="username">{"John Doe"}</h2>
          <p className="post-date">02.04.2024</p>
        </div>
      </div>
      <div className="contents">
        <p className="message">{"Hello, everone!"}</p>
      </div>
    </section>
  );
};

export default CommentCard;
