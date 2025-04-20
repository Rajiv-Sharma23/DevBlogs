import { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="w-full flex justify-between items-center h-16 md:h-20 ">
      {/* Logo */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <img src="/logo.png" alt="logo" className="w-8 h-8" />
        <span>DevBlogs.</span>
      </div>
      {/* Mobile Menu  */}
      <div className="md:hidden">
        <div className="cursor-pointer text-4xl " onClick={clickHandler}>
          {open ? <X /> : <Menu />}
        </div>
        {/* menu list */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center 
          absolute top-16  ${open ? " right-0 " : "  -right-[100%]"}
          text-black transition-all duration-500 gap-6 text-2xl font-semibold ` } >
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most Popular</a>
          <a href="/">About</a>
          <a href="/">
            <button className="py-2 px-4 bg-blue-800 text-white rounded-3xl">
              Login🖐
            </button>
          </a>
        </div>
      </div>
      {/* Desktop Menu  */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 text-lg font-semibold">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <a href="/">
          <button className="py-2 px-4 bg-blue-800 text-white rounded-3xl">
            Login🖐
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
