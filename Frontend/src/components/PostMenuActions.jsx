import { useAuth, useUser } from "@clerk/clerk-react";
import { Save, SaveOff, Star, Trash2 } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PostMenuActions = ({ post }) => {
  // const { user } = useUser();
  const { getToken } = useAuth();
  const { user } = useUser();
  const navigate = useNavigate();

  const {
    isPending,
    error,
    data: savedPosts,
  } = useQuery({
    queryKey: ["savedPosts"],
    queryFn: async () => {
      const token = await getToken();
      return axios.get(`${import.meta.env.VITE_API_URL}/users/saved`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const isAdmin = user?.publicMetadata?.role === "admin" || false;
  const isSaved = savedPosts?.data?.some((p) => p === post._id) || false;

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(`${import.meta.env.VITE_API_URL}/posts/${post._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      toast.success("Post deleted successfully!");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  const queryClient = useQueryClient();

  const saveMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.patch(
        `${import.meta.env.VITE_API_URL}/users/save`,
        {
          postId: post._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["savedPosts"] });
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  const handleSave = () => {
    if (!user) return navigate("/login");
    saveMutation.mutate();
  };


  const featureMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.patch(
        `${import.meta.env.VITE_API_URL}/posts/feature`,
        {
          postId: post._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post",post.slug] });
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  const handleFeature = () => {
    if (!user) return navigate("/login");
    featureMutation.mutate();
  };

  return (
    <div>
      <h1 className="mt-3 mb-3 text-sm font-semibold">Actions</h1>
      {isPending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        <div
          className="flex items-center gap-2 py-1 text-sm cursor-pointer"
          onClick={handleSave}
        >
          {saveMutation.isPending ? (
            <div className="text-sm text-green-600 font-bold ">in Progress</div>
          ) : isSaved ? (
            <span className="flex  gap-2 font-semibold">
              <SaveOff size={16} /> Unsave this Post
            </span>
          ) : (
            <span className="flex  gap-2 font-semibold">
              <Save size={16} /> Save this Post
            </span>
          )}
        </div>
        ) }
      {/* {console.log("postwa", post.user, "user", user)} */}
      {
          isAdmin && (
            <div className="flex items-center gap-2 py-1 text-sm cursor-pointer font-medium" onClick={handleFeature}>
              <Star size={16}  fill={featureMutation.isPending
                  ? post.isFeatured
                    ? "none"
                    : "black"
                  : post.isFeatured
                  ? "black"
                  : "none"}/>
             {featureMutation.isPending ? (
               <div className="text-sm text-green-600 font-bold ">featuring</div>
             ) : post.isFeatured ? <span>Unfeature this Post</span> : (
               <span>Feature this Post</span> 
             )}
            </div>
          )
        } 
      {/* Ownership verification via Clerk user ID */}
      {user && (post?.user?.clerkUserId === user.id || isAdmin) && (
        <div
          className="flex items-center gap-2 py-1 text-sm cursor-pointer text-red-600 font-medium"
          onClick={handleDelete}
        >
          <Trash2 size={16} />

          {deleteMutation.isPending ? (
            <div className="text-sm text-red-500">Delete in Progress</div>
          ) : (
            <span>Delete this Post</span>
          )}
        </div>
      )}
    </div>
  );
};

export default PostMenuActions;
