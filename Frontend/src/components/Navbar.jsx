import { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="w-full flex justify-between items-center h-16 md:h-20 ">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-4 text-2xl font-bold">
          <img src="/logo.png" alt="logo" className="w-8 h-8" />
          <span>DevBlogs.</span>
        </Link>

        {/* Mobile Menu  */}
        <div className="md:hidden">
          <div className="cursor-pointer text-4xl " onClick={clickHandler}>
            {open ? <X /> : <Menu />}
          </div>
          {/* menu list */}
          <div
            className={`w-full h-screen flex flex-col items-center justify-center 
          absolute top-16  ${open ? " right-0 " : "  -right-[100%]"}
          text-black transition-all duration-500 gap-6 text-2xl font-semibold `}
          >
            <Link to={"/"}>Home</Link>
            <Link to={""}>Trending</Link>
            <Link to={""}>Most Popular</Link>
            <Link to={""}>About</Link>
            <Link to={""}>
              <button className="py-2 px-4 bg-blue-800 text-white rounded-3xl">
                Login🖐
              </button>
            </Link>
          </div>
        </div>
        {/* Desktop Menu  */}
        <div className="hidden md:flex items-center gap-8 xl:gap-12 text-lg font-semibold">
          <Link to={"/"}>Home</Link>
          <Link to={""}>Trending</Link>
          <Link to={""}>Most Popular</Link>
          <Link to={""}>About</Link>
          <Link to={""}>
            <button className="py-2 px-4 bg-blue-800 text-white rounded-3xl">
              Login🖐
            </button>
          </Link>

          <div className="flex items-center gap-4 si">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
