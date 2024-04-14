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
