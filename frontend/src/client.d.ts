interface CommentObject {
  type?: string;
  postId: string;
  message: string;
  authorId: string;
}

interface UserObject {
  username: string;
  email: string;
  password: string;
  avatarUrl: string;
  gender?: string;
}

// Used to type arrow function components which are small parts of bigger elements
type Component<PropsType = undefined> = (props?: PropsType) => ReactElement;
