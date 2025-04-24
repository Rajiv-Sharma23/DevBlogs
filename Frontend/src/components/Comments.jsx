import axios from "axios";
import Comment from "../components/Comment";
import { useQuery } from "@tanstack/react-query";

const fetchComments = async (postId) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  );
  return res.data.post;
};

const Comments = ({ postId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  if (isPending) return "Loading...";

  if (error) return "Something went wrong" + error.message;

  if (!data) return "Comment not found";

  return (
    <div className="flex flex-col gap-8  lg:w-3/5 mb-10">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <div className="flex items-center justify-between gap-4 w-full">
        <textarea
          placeholder="Add your Comments"
          className="flex bg-white rounded-xl p-4 w-full"
        />
        <button className="bg-blue-800 text-white px-4 py-3 font-medium rounded-xl">
          Send
        </button>
      </div>
      {data.map((comment) => (
        <Comment key={comment._id} comment={comment}/>
      ))}
    </div>
  );
};

export default Comments;
