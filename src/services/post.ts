import { Post } from "@/types";

export const createPost = async (post: Post) => {
  try {
    const res = await fetch("http://localhost:8000/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};



