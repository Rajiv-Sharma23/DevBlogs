import axios from "axios";
import Comment from "../components/Comment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";

const fetchComments = async (postId) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  );
  return res.data.comments;
};

const Comments = ({ postId }) => {
  const { getToken } = useAuth();
  const {user} = useUser();

  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken(); // make sure getToken is async
      return axios.post(
        `${import.meta.env.VITE_API_URL}/comments/${postId}`,
        newComment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
    onError: (error) => {
      toast.error(error?.response?.data || "Something went wrong");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      desc: formData.get("desc"),
    };
    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col gap-8  lg:w-3/5 mb-10">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-4 w-full"
      >
        <textarea
          name="desc"
          placeholder="Add your Comments"
          className="flex bg-white rounded-xl p-4 w-full"
        />
        <button className="bg-blue-800 text-white px-4 py-3 font-medium rounded-xl">
          Send
        </button>
      </form>
      {isPending
        ? "Loading..."
        : error
        ? "error Loading Comments"
        : 
        <>
        {
          mutation.isPending && (
            <Comment comment= {{
              desc : `$mutation.variables.desc (Sending...)`,
              createdAt: new Date(),
              user: {
                img: user.imageUrl,
                name: user.username,
              }
            }} />
          )
        }


        {data.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </>
        }
    </div>
  );
};

export default Comments;
