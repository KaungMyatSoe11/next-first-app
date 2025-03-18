"use client";
import { PostContext } from "@/providers/PostProvider";
import React, { useContext, useEffect, useState } from "react";
import PostCard from "./_components/PostCard";
import { Plus } from "lucide-react";
import CreateModal from "./_components/CreateModal";

//user info Type
//Apoiment Type extent user info

interface General {
  userId: number;
  id: number;
  title: string;
}

interface TodoType extends General {
  completed: boolean;
}

interface PostType extends General {
  body: string;
}

function BlogPage() {
  const { posts } = useContext(PostContext);
  const [open, setOpen] = useState(false);
  // const [todos, setTodos] = useState<PostType[]>([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //       setTodos(json);
  //     });
  // }, []);

  return (
    <div className="h-[100vh] overflow-auto">
      <h1 className="text-2xl font-bold">Blog Page</h1>
      <div className="grid grid-cols-4 space-x-4 py-6">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}

        {/* create component */}
        <div
          onClick={() => setOpen(true)}
          className="border cursor-pointer border-slate-100 px-4 py-2 rounded-sm flex items-center justify-center group transition-all ease-in-out duration-300 hover:border-slate-700 "
        >
          <Plus
            size={24}
            className="text-slate-200 delay-100 transition-all ease-in-out duration-300 group-hover:text-slate-700 "
          />
        </div>
        <CreateModal open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default BlogPage;
