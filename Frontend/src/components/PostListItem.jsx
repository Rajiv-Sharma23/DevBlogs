import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

const PostListItem = ({ post }) => {
  const imagePath = post.img?.includes("imagekit.io")
    ? post.img.split("/").pop()
    : post.img;
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* Image */}
      {post.img && (
        <div className="md:hidden xl:block xl:w-1/3 ">
          <Image
            src={imagePath}
            className="rounded-2xl object-cover "
            w={"735"}
          />
        </div>
      )}

      {/* Details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`/${post.slug}`} className="text-4xl font-semiboldbold">
          {post.title}
        </Link>
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 ">
          <span>Written By .</span>
          <Link to={`/posts?author=${post.user.username}`}className="text-blue-800 font-semibold ">
            {post.user.username}
          </Link>

          <span>On .</span>
          <Link className="text-blue-800 font-semibold">{post.category}</Link>
          <span>{format(post.createdAt)}</span>
        </div>
        <p>{post.desc}</p>
        <Link
          to={`/${post.slug}`}
          className="text-blue-800 font-semibold underline text-sm"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
