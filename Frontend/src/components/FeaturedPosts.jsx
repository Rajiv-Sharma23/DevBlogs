import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8 mb-10">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Image */}
        <Image src={"featured1.jpeg"} className="rounded-3xl object-cover aspect-video" />
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* title */}
        <Link
          to={"/test"}
          className="text-xl font-semibold lg:text-2xl lg:font-bold"
        >
          lorem ipsum dolor sit amet consectetur
        </Link>
      </div>
      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">

        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src={"featured2.jpeg"}
            className={"rounded-3xl object-cover w-1/3 aspect-video"}
          />

          {/* details and Title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-2 lg:gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold ">02.</h1>
              <Link className="text-blue-800 text-sm lg:text-lg">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to={"/test"}
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing .
            </Link>
          </div>
        </div>

        {/* third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src={"featured2.jpeg"}
            className={"rounded-3xl object-cover w-1/3 aspect-video"}
          />

          {/* details and Title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold ">03.</h1>
              <Link className="text-blue-800 lg:text-lg">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to={"/test"}
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing .
            </Link>
          </div>
        </div>
        {/* Fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src={"featured2.jpeg"}
            className={"rounded-3xl object-cover w-1/3 aspect-video"}
          />

          {/* details and Title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold ">04.</h1>
              <Link className="text-blue-800 lg:text-lg">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to={"/test"}
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing .
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
