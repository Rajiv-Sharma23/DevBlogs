import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Upload from "../components/Upload";

const Write = () => {
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [img,setImg] = useState('');
  const [video,setVideo] = useState('');
  const [progress, setProgress] = useState(null);
  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    img && setValue(prev => prev+ `<p><img src="${img}" /></p> " />`);
  },[img])

  useEffect(() => {
    video && setValue(prev => prev+ `<p><iframe class="ql-video" src="${video}"></iframe></p>`);
  },[video])

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post has been created successfully");
      navigate(`/${res.data.post.slug}`);
    },
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn && !isLoaded) {
    return <div>Sign in to write</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      img: cover || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };
    console.log(data.img);

    if (!data.title || !data.category || !data.desc || !data.content) {
      toast.error("All fields are required");
      return;
    }

    mutation.mutate(data);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6 ">
      <h1 className="text-2xl font-semibold text-purple-800  ">
        Create a New Post ✍
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6  flex-1 pb-5"
      >
        <Upload type={"image"} setProgress={setProgress} setData={setCover}>
          <button
            type="button"
            className="w-max bg-white text-gray-500 shadow-md p-2 rounded-xl"
          >
            Add a cover image
          </button>
        </Upload>

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
        <div className="flex flex-1">
          <div className="flex flex-col gap-2 mr-2 ">
            <div className="">
              <Upload
                type={"image"}
                setProgress={setProgress}
                setData={setImg}
                
              >
                <img src="/img.png" alt="image" className="w-12 h-12" />
              </Upload>
            </div>
            <div className="">
              <Upload
                type={"video"}
                setProgress={setProgress}
                setData={setVideo}
              >
                <img src="/vid.png" className="w-12 h-12" />
              </Upload>
            </div>
          </div>
          <ReactQuill
            theme="snow"
            className=" rounded-2xl  bg-white shadow-md flex-1"
            value={value}
            onChange={setValue}
            readOnly={0<progress && progress<100}
          />
        </div>
        <div className="flex items-center gap-8">
          <button
            type="submit"
            disabled={mutation.isPending || (0<progress && progress<100)}
            className="bg-purple-700 text-white w-max px-4 py-2 rounded-xl font-sans font-semibold disabled:bg-purple-400 disabled:cursor-not-allowed"
          >
            {mutation.isPending ? "Loading..." : "Publish"}
          </button>

          {progress !== null && (
            <div className="bg-green-200 p-2 w-[35%] border-2 border-purple-600 rounded-xl">
              <h1 className="text-purple-600 text-lg font-bold flex justify-center">
                {progress < 100
                  ? `Image Uploading: ${progress}%`
                  : `Image Uploaded ✌`}
              </h1>
            </div>
          )}
        </div>

        {mutation.isError && <div>{mutation.error.message}</div>}
      </form>
    </div>
  );
};

export default Write;
