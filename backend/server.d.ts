// Data structure of the comment object
export interface Comment {
  type: string;
  title: string;
  postId: string;
  message: string;
  authorId: string;
  avatarURL: string;
}

// Used to define types of objects with new values given from the body of request
export interface InsertionData {
  newValues: Comment;
}
