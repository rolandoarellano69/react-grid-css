import NavLink from "./NavLink";
import IconBuger from "../icons/IconBurger";
import { useState } from "react";
// import IconMenuClose from "../icons/IconMenuClose";

const NavBar = () => {
  const [first, setfirst] = useState(false)
  const handleClickMenu = () => {
    console.log("click");
  }
  return (
    <nav className="absolute top-10  px-8 items-center text-white flex w-full">
      <button className="lg:hidden" onClick={handleClickMenu}>
        <IconBuger />
      </button>
      <a href="#" className=" mx-auto pr-[20px] text-4xl mb-3 lg:mx-0 lg:pr-[90px]"> room

      </a>

      <div className="hidden gap-16  lg:flex">
        <NavLink text="home" />
        <NavLink text="shop" />
        <NavLink text="about" />
        <NavLink text="contact" />


      </div>
    </nav>
  )
}
export default NavBar;