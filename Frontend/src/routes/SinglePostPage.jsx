import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Searching from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8 mt-5">
      {/* Details */}
      <div className="flex gap-8">
        {/* Title and details */}
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
            ex!
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written By .</span>
            <Link to={"/test"} className="text-blue-800">
              Rajiv Sharma
            </Link>
            <span>On .</span>
            <Link to={"/test"} className="text-blue-800">
              Web design
            </Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, modi
            aliquam dolores ex quidem cupiditate iste deserunt perspiciatis
            laudantium pariatur? Nihil harum exercitationem quas tenetur
            corporis alias culpa cumque earum.
          </p>
        </div>
        {/* Image */}
        <div className="hidden lg:block w-2/5">
          <Image
            src={"postImg.jpeg"}
            className="rounded-2xl object-cover"
            w="500"
          />
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            inventore dolorum, nesciunt quo nulla rerum ut corporis molestiae
            non atque sunt, unde accusantium quam aperiam expedita provident ad
            assumenda? Ratione, dolorum fugiat. Harum vitae ducimus error, fuga
            possimus, quo, dolorem quae labore consequatur repudiandae
            perferendis! Expedita dolorum voluptatibus perspiciatis pariatur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            inventore dolorum, nesciunt quo nulla rerum ut corporis molestiae
            non atque sunt, unde accusantium quam aperiam expedita provident ad
            assumenda? Ratione, dolorum fugiat. Harum vitae ducimus error, fuga
            possimus, quo, dolorem quae labore consequatur repudiandae
            perferendis! Expedita dolorum voluptatibus perspiciatis pariatur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            inventore dolorum, nesciunt quo nulla rerum ut corporis molestiae
            non atque sunt, unde accusantium quam aperiam expedita provident ad
            assumenda? Ratione, dolorum fugiat. Harum vitae ducimus error, fuga
            possimus, quo, dolorem quae labore consequatur repudiandae
            perferendis! Expedita dolorum voluptatibus perspiciatis pariatur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            inventore dolorum, nesciunt quo nulla rerum ut corporis molestiae
            non atque sunt, unde accusantium quam aperiam expedita provident ad
            assumenda? Ratione, dolorum fugiat. Harum vitae ducimus error, fuga
            possimus, quo, dolorem quae labore consequatur repudiandae
            perferendis! Expedita dolorum voluptatibus perspiciatis pariatur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            inventore dolorum, nesciunt quo nulla rerum ut corporis molestiae
            non atque sunt, unde accusantium quam aperiam expedita provident ad
            assumenda? Ratione, dolorum fugiat. Harum vitae ducimus error, fuga
            possimus, quo, dolorem quae labore consequatur repudiandae
            perferendis! Expedita dolorum voluptatibus perspiciatis pariatur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            inventore dolorum, nesciunt quo nulla rerum ut corporis molestiae
            non atque sunt, unde accusantium quam aperiam expedita provident ad
            assumenda? Ratione, dolorum fugiat. Harum vitae ducimus error, fuga
            possimus, quo, dolorem quae labore consequatur repudiandae
            perferendis! Expedita dolorum voluptatibus perspiciatis pariatur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            inventore dolorum, nesciunt quo nulla rerum ut corporis molestiae
            non atque sunt, unde accusantium quam aperiam expedita provident ad
            assumenda? Ratione, dolorum fugiat. Harum vitae ducimus error, fuga
            possimus, quo, dolorem quae labore consequatur repudiandae
            perferendis! Expedita dolorum voluptatibus perspiciatis pariatur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            inventore dolorum, nesciunt quo nulla rerum ut corporis molestiae
            non atque sunt, unde accusantium quam aperiam expedita provident ad
            assumenda? Ratione, dolorum fugiat. Harum vitae ducimus error, fuga
            possimus, quo, dolorem quae labore consequatur repudiandae
            perferendis! Expedita dolorum voluptatibus perspiciatis pariatur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            inventore dolorum, nesciunt quo nulla rerum ut corporis molestiae
            non atque sunt, unde accusantium quam aperiam expedita provident ad
            assumenda? Ratione, dolorum fugiat. Harum vitae ducimus error, fuga
            possimus, quo, dolorem quae labore consequatur repudiandae
            perferendis! Expedita dolorum voluptatibus perspiciatis pariatur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            inventore dolorum, nesciunt quo nulla rerum ut corporis molestiae
            non atque sunt, unde accusantium quam aperiam expedita provident ad
            assumenda? Ratione, dolorum fugiat. Harum vitae ducimus error, fuga
            possimus, quo, dolorem quae labore consequatur repudiandae
            perferendis! Expedita dolorum voluptatibus perspiciatis pariatur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            inventore dolorum, nesciunt quo nulla rerum ut corporis molestiae
            non atque sunt, unde accusantium quam aperiam expedita provident ad
            assumenda? Ratione, dolorum fugiat. Harum vitae ducimus error, fuga
            possimus, quo, dolorem quae labore consequatur repudiandae
            perferendis! Expedita dolorum voluptatibus perspiciatis pariatur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            inventore dolorum, nesciunt quo nulla rerum ut corporis molestiae
            non atque sunt, unde accusantium quam aperiam expedita provident ad
            assumenda? Ratione, dolorum fugiat. Harum vitae ducimus error, fuga
            possimus, quo, dolorem quae labore consequatur repudiandae
            perferendis! Expedita dolorum voluptatibus perspiciatis pariatur?
          </p>
        </div>
        {/* Menu */}
        <div className="px-4 h-max sticky top-8 text-sm ">
          <h1 className="mt-2 mb-3 text-sm font-semibold">Author</h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center ">
              <Image
                src={"userImg.jpeg"}
                className="w-12 h-12 rounded-full object-cover"
                w="50"
                h="50"
              />
              <Link className="font-semibold text-blue-800 ">Rajiv Sharma</Link>
            </div>

            <div className="flex  gap-2">
              <p className="text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            {/* Links */}
            <div className="flex gap-2">
              <Link>
                <Image src={"facebook.svg"} />
              </Link>
              <Link>
                <Image src={"instagram.svg"} />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-3 mb-3 text-sm font-semibold">Categories</h1>
          <div className="flex flex-col gap-2  text-xs text-blue-800">
            <Link to="/" className="underline">
              {" "}
              All
            </Link>
            <Link to="/" className="underline">
              {" "}
              Web Design
            </Link>
            <Link to="/" className="underline">
              {" "}
              Devlopment
            </Link>
            <Link to="/" className="underline">
              {" "}
              Databases
            </Link>
            <Link to="/" className="underline">
              {" "}
              Search Engines
            </Link>
            <Link to="/" className="underline">
              {" "}
              Marketing
            </Link>
          </div>

          <h1 className="mt-3 mb-3 text-sm font-semibold">Search</h1>
          <Searching />

         
        </div>
      </div>
        <Comments/>
    </div>
  );
};

export default SinglePostPage;
