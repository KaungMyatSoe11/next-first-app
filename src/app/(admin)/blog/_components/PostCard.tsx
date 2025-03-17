import { Post } from "@/types";
import { Ellipsis } from "lucide-react";
import Link from "next/link";
import EditDropDown from "./EditDropDown";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="border border-slate-500 px-4 py-2 rounded-sm relative">
      <h1 className="font-bold text-lg">
        <Link href={`/blog/${post.id}`}>{post.title}</Link>
      </h1>
      <p>posted {post.createdAt.toLocaleDateString()}</p>
      <EditDropDown />
    </div>
  );
};

export default PostCard;
