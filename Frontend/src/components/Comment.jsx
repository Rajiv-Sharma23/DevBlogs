import { format } from "timeago.js";
import Image from "./Image";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const Comment = ({ comment,postId }) => {
  const { getToken } = useAuth();
  const { user } = useUser();
  const role = user?.publicMetadata?.role;

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const token = await getToken(); // make sure getToken is async
      return axios.delete(
        `${import.meta.env.VITE_API_URL}/comments/${comment._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      toast.success("Comment deleted successfully");
    },
    onError: (error) => {
      toast.error(error?.response?.data || "Something went wrong");
    },
  });

  const handleDelete = () => {
    mutation.mutate();
  };

  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-2 lg:mb-6 text-sm lg:text-lg">
      <div className="flex items-center gap-3 text-gray-500">
        {comment.user.img && (
          <Image
            src={comment.user.img}
            className="w-10 h-10 rounded-full object-cover"
            alt={comment.user.username}
          />
        )}
        <span className="font-medium text-sm text-blue-800">
          {comment.user.username} .
        </span>
        {/* {console.log(comment.user.clerkUserId, user?.id)} */}
        {console.log(role)}

        <span className="font-medium text-sm">{format(comment.createdAt)}</span>
        {user && (comment.user.clerkUserId === user.id || role === "admin") && (
          <span
            className="text-sm text-red-600 font-medium cursor-pointer"
            onClick={handleDelete}
          >
            
            {mutation.isPending ? <span className="text-sm text-green-600 font-medium ">Deleting...</span> : "Delete"}
          </span>
        )}
      </div>
      <div className="mt-4">
        <p>{comment.desc}</p>
      </div>
    </div>
  );
};

export default Comment;
