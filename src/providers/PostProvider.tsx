"use client";
import { Post } from "@/types";
import React, { createContext, useEffect, useState } from "react";
import { createPost } from "@/services/post";

interface PostContextType {
  posts: Post[];
  isEdit?: boolean;
  CreatePost: (post: Post) => Promise<void>;
}

export const PostContext = createContext<PostContextType>({
  posts: [],
  isEdit: false,
  CreatePost: async (post: Post) => {},
});

const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/posts", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const CreatePost = async (post: Post) => {
    const newPost = await createPost(post);
    console.log(newPost);
    setPosts((prev) => [...prev, newPost]);
  };

  

  return (
    <PostContext.Provider value={{ posts, CreatePost }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
