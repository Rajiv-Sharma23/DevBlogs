import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Write = () => {
  const [value, setValue] = useState("");
  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        
      }
      );
    },
    onSuccess: (res) => {
      toast.success("Post has been created successfully");
      navigate(`/${res.data.post.slug}`);
    }
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn && !isLoaded) {
    return <div>Sign in to write</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)

    const data = {
      title : formData.get("title"),
      category : formData.get("category"),
      desc : formData.get("desc"),
      content: value,
    }
    console.log(data);

    mutation.mutate(data);
      
  }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6 ">
      <h1 className="text-2xl font-semibold text-purple-800  ">
        Create a New Post ✍
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6  flex-1 pb-5"
      >
        <button className="w-max bg-white text-gray-500 shadow-md p-2 rounded-xl">
          Add a cover image
        </button>
        <input
          type="text"
          placeholder="My Post Title"
          className="text-4xl font-semibold bg-transparent outline-none"
          name="title"
        />
        <div className="flex items-center gap-4 ">
          <label htmlFor="" className="font-semibold">
            Choose a category :
          </label>
          <select
            name="category"
            id=""
            defaultValue="web-design "
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="web-design">Web Design</option>
            <option value="devlopment">Devlopment</option>
            <option value="dataBases">DataBases</option>
            <option value="seo">Search Engines</option>
            <option value="other">Other</option>
            <option value="marketing">Marketing </option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-xl bg-white shadow-md"
          name="desc"
          placeholder="A Short Description"
        />
        <ReactQuill
          theme="snow"
          className=" rounded-2xl  bg-white shadow-md flex-1"
          value={value}
          onChange={setValue}
        />
        <button 
        type="submit"
        disabled={mutation.isPending}
        className="bg-blue-800 text-white w-max px-4 py-2 rounded-xl font-sans font-semibold disabled:bg:blue-400 disabled:cursor-not-allowed">
         {mutation.isPending ? "Loading..." : "Publish"}
        </button>
        {mutation.isError && <div>{mutation.error.message}</div>}
      </form>
    </div> 
  );
};

export default Write;
