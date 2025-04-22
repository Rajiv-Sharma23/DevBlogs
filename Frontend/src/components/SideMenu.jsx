import React from "react";
import Searching from "./Search";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 font-medium text-sm ">Search</h1>
      <Searching />
      <h1 className="mt-8 font-medium text-sm">Filters</h1>
      <div className="flex flex-col gap-3 text-sm mt-4">
        <label htmlFor="">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="appearance-none cursor-pointer w-3 h-3 border-[1.5px] checked:bg-blue-800 checked:border-[1.5px] rounded-sm bg-white"
          />{" "}
          Newest
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="sort"
            value="popular"
            className="appearance-none cursor-pointer w-3 h-3 border-[1.5px] checked:bg-blue-800 checked:border-[1.5px] rounded-sm bg-white"
          />{" "}
          Popular
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="sort"
            value="trending"
            className="appearance-none cursor-pointer w-3 h-3 border-[1.5px] checked:bg-blue-800 checked:border-[1.5px] rounded-sm bg-white"
          />{" "}
          Trending
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="sort"
            value="oldest"
            className="appearance-none cursor-pointer w-3 h-3 border-[1.5px] checked:bg-blue-800 checked:border-[1.5px] rounded-sm bg-white"
          />{" "}
          Oldest
        </label>
      </div>
      <h1 className="mt-8 font-medium text-sm">Categories</h1>
      <div className="flex flex-col gap-3 text-sm mt-4">
        <Link className="underline " to={"/posts?cat=web-design"}>
          Web Design
        </Link>
        <Link className="underline " to={"/posts?cat=devlopment"}>
          Devlopment
        </Link>
        <Link className="underline " to={"/posts?cat=dataBases"}>
          Databases
        </Link>
        <Link className="underline " to={"/posts?cat=seo"}>
          Search Engines
        </Link>
        <Link className="underline " to={"/posts?cat=marketing"}>
          Marketing
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
