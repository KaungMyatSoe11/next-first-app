"use client"
import { Post } from "@/types";
import React, { createContext } from "react";

interface PostContextType {
  posts: Post[];
  isEdit?: boolean;
}

export const PostContext = createContext<PostContextType>({
  posts: [],
  isEdit: false,
});

const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const posts: Post[] = [
    {
      id: "1",
      title: "Post 1",
      content: "Body 1",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      title: "Post 2",
      content: "Body 2",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
};

export default PostProvider;
