import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { title } from "process";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Post } from "@/types";
import { Textarea } from "@/components/ui/textarea";
import { createPost } from "@/services/post";

type CreateModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const PostSchema = z.object({
  title: z.string().nonempty({ message: "Title is required" }),
  content:z.string().nonempty({message:"Content is required"}),
});

const CreateModal: React.FC<CreateModalProps> = ({ open, setOpen }) => {
  const form = useForm<z.infer<typeof PostSchema>>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: "alsjfkj",
      content:""
    },
  });

  const onSubmit = (values: any) => {
    const newPost={
        id:Math.round(Math.random()*100000000000000000),
        ...values,
       createdAt:new Date(),
       updatedAt:new Date(),
    }

    console.log(newPost);
    createPost(newPost);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <DialogTrigger className="border cursor-pointer border-slate-100 px-4 py-2 rounded-sm flex items-center justify-center group transition-all ease-in-out duration-300 hover:border-slate-700 ">
        <div>
          <Plus
            size={24}
            className="text-slate-200 delay-100 transition-all ease-in-out duration-300 group-hover:text-slate-700 "
          />
        </div>
      </DialogTrigger> */}
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Create Post</DialogTitle>
            </DialogHeader>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button>Create</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateModal;
