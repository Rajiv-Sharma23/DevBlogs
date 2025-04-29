
import Searching from "./Search";
import { Link, useSearchParams } from "react-router-dom";

const SideMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterChange = (e) => {
    if (searchParams.get("sort") !== e.target.value) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        sort: e.target.value,
      });
    }
  };
  const handleCategoryChange = (category) => {
    if (searchParams.get("cat") !== category) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        cat:category,
      });
    }
  };

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
            onChange={handleFilterChange}
            className="appearance-none cursor-pointer w-3 h-3 border-[1.5px] checked:bg-blue-800 checked:border-[1.5px] rounded-sm bg-white"
          />{" "}
          Newest
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="sort"
            value="popular"
            onChange={handleFilterChange}
            className="appearance-none cursor-pointer w-3 h-3 border-[1.5px] checked:bg-blue-800 checked:border-[1.5px] rounded-sm bg-white"
          />{" "}
          Popular
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="sort"
            value="trending"
            onChange={handleFilterChange}
            className="appearance-none cursor-pointer w-3 h-3 border-[1.5px] checked:bg-blue-800 checked:border-[1.5px] rounded-sm bg-white"
          />{" "}
          Trending
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="sort"
            value="oldest"
            onChange={handleFilterChange}
            className="appearance-none cursor-pointer w-3 h-3 border-[1.5px] checked:bg-blue-800 checked:border-[1.5px] rounded-sm bg-white"
          />{" "}
          Oldest
        </label>
      </div>
      <h1 className="mt-8 font-medium text-sm">Categories</h1>
      <div className="flex flex-col gap-3 text-sm mt-4">
        <span className="underline cursor-pointer" onClick={() => handleCategoryChange("web-design")}>
          Web Design
        </span>
        <span className="underline cursor-pointer" onClick={() => handleCategoryChange("devlopment")}>
          Devlopment
        </span>
        <span className="underline cursor-pointer" onClick={() => handleCategoryChange("dataBases")}>
          Databases
        </span>
        <span className="underline cursor-pointer" onClick={() => handleCategoryChange("seo")}>
        spanrch Engines
        </span>
        <span className="underline cursor-pointer" onClick={() => handleCategoryChange("marketing")}>
          Marketing
        </span>
      </div>
    </div>
  );
};

export default SideMenu;
