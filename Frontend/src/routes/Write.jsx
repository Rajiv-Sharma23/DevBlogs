import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn && !isLoaded) {
    return <div>Sign in to write</div>;
  }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6 ">
      <h1 className="text-2xl font-semibold text-purple-800  ">Create a New Post ✍</h1>
      <form action="" className="flex flex-col gap-6  flex-1 pb-5">
        <button className="w-max bg-white text-gray-500 shadow-md p-2 rounded-xl">Add a cover image</button>
        <input type="text" placeholder="My Post Title" className="text-4xl font-semibold bg-transparent outline-none"/>
        <div className="flex items-center gap-4 ">
          <label htmlFor="" className="font-semibold">Choose a category :</label>
          <select name="cat" id="" defaultValue="web-design " className="p-2 rounded-xl bg-white shadow-md">
            <option value="web-design" >Web Design</option>
            <option value="devlopment">Devlopment</option>
            <option value="dataBases">DataBases</option>
            <option value="seo">Search Engines</option>
            <option value="other">Other</option>
            <option value="marketing">Marketing </option>
          </select>
        </div>
        <textarea name="description" className="text-gray-500 bg-white rounded-2xl p-3 ">A Short description</textarea>
        <ReactQuill theme="snow" className=" rounded-2xl  bg-white shadow-md flex-1"/>
        <button className="bg-blue-800 text-white w-max px-4 py-2 rounded-xl font-sans font-semibold">Publish</button>
      </form>
    </div>
  );
};

export default Write;
