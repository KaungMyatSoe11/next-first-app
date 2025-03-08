"use client";
import React, { useEffect, useState } from "react";


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
  const [todos, setTodos] = useState<PostType[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTodos(json);
      });
  }, []);

  return (
    <div className="h-[80vh] overflow-auto">
      <h1 className="text-2xl font-bold">Blog Page</h1>
      <div className="overflow-scroll">
        {todos.map((todo: PostType) => (
          <p key={todo.id}>{todo.title}</p>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
