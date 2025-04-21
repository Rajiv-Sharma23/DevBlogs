import React from "react";
import { Link } from "react-router-dom";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg gap-8 items-center justify-center">
      {/* Links */}
      <div className="flex-1 flex items-center justify-between flex-wrap font-semibold">
        <Link
          to={"/posts"}
          className="bg-blue-800 text-white rounded-full py-2 px-4"
        >
          All posts
        </Link>
        <Link
          to={"/posts?cat=web-design"}
          className="hover:bg-blue-50 rounded-full py-2 px-4"
        >
          Web Design
        </Link>
        <Link
          to={"/posts?cat=devlopment"}
          className="hover:bg-blue-50 rounded-full py-2 px-4"
        >
          Devlopment
        </Link>
        <Link
          to={"/posts?cat=dataBases"}
          className="hover:bg-blue-50 rounded-full py-2 px-4"
        >
          DataBases
        </Link>
        <Link
          to={"/posts?cat=seo"}
          className="hover:bg-blue-50 rounded-full py-2 px-4"
        >
          Search Engines
        </Link>
        <Link
          to={"/posts?cat=marketing"}
          className="hover:bg-blue-50 rounded-full py-2 px-4"
        >
          Marketing
        </Link>
       
      </div>
      <span className="text-xl font-medium">| </span>
      {/* Search */}
      <div className="bg-gray-100 rounded-full p-2 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-search-icon lucide-search"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input type="text" placeholder="search a post..." className="bg-transparent"/>
      </div>
    </div>
  );
};

export default MainCategories;
