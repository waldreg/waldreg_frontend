import React from "react";
import { Post } from "../../../interfaces/board";

interface PostDetailProps {
  post: Post;
}

const PostDetail = ({ post }: PostDetailProps) => {
  return (
    <>
      <div>{post.id}</div>
      <div>{post.title}</div>
      <div>{post.category}</div>
      <div>{post.content}</div>
      <div>{post.author.user_id}</div>
      <div>{post.author.name}</div>
      <div>{post.created_at}</div>
      <div>{post.last_modified_at}</div>
      <div>{post.exist_file}</div>
    </>
  );
};

export default PostDetail;
