import React from "react";
import { Link } from "react-router-dom";
import { Dot } from "lucide-react";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";

const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BreadCrump */}
      <div className="flex items-center gap-1">
        <Link to={"/"}>Home</Link>
        <span>
          {" "}
          <Dot />
        </span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/* Introductions */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div>
          <h1 className="text-gray-800 text-2xl md:text-4xl lg:text-5xl font-bold">
            Lorem ipsum, dolor sit amet consectetur
          </h1>
          <p className="mt-8 text-md md:text-xl">
            {" "}
            blanditiis repudiandae ducimus velit neque sint. enim optio
            similique sequi alias sunt!
          </p>
        </div>
        {/* animated menu */}
        <Link to={"/write"} className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animatedButton font-semibold "
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset={"0%"}>
                Write Your story .
              </textPath>
              <textPath href="#circlePath" startOffset={"50%"}>
                Share your idea .
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 right-0 left-0 bottom-0 m-auto w-24 h-24 bg-blue-800 rounded-full flex justify-center items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </button>
        </Link>
      </div>
      {/* categories  */}
      <MainCategories/>
      {/* Featured Post */}
      <FeaturedPosts/>
      {/* Post Lists */}
    </div>
  );
};

export default HomePage;
