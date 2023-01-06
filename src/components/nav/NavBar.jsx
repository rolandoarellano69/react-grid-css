import NavLink from "./NavLink";
import IconBuger from "../icons/IconBurger";
import { useState, useRef } from "react";
import IconMenuClose from "../icons/IconMenuClose";

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  const refNavbar = useRef(null);

  const openMenuClass = "absolute top-10  px-8 items-center text-white flex w-full transition-all duration-500 lg:text-white lg:bg-transparent ";
  const closeMenuClass = "absolute top-10  px-8 items-center  text-black bg-white flex w-full py-4 justify-between transition-all duration-500 block lg:bg-transparent lg:text-white lg:justify-start "


  //h-1 w-full scale-x-0 peer-hover:scale-x-75 peer-hover:bg-white transition-all duration-500 block
  //vanilla JS
  const handleClickMenu = () => {
    setActiveMenu(!activeMenu)
    // console.log(refNavbar.current.querySelector("#navLinks"));

    refNavbar.current.querySelector("#navLinks").classList.toggle("hidden");
    refNavbar.current.querySelector("#navLinks").classList.add("flex", "gap-8");
    refNavbar.current.querySelector("#navBrand").classList.toggle("hidden");
  }
  //vainilla JS


  return (
    <nav ref={refNavbar} className={activeMenu ? closeMenuClass : openMenuClass} >

      <button className="lg:hidden" onClick={handleClickMenu}>
        {
          activeMenu ? (<IconMenuClose />) : (<IconBuger />
          )}

      </button>
      <a id="navBrand" href="#" className=" mx-auto pr-[20px] text-4xl mb-3 lg:mx-0 lg:block lg:pr-16 "> room

      </a>

      <div className="hidden gap-16  lg:flex" id="navLinks">
        <NavLink text="home" />
        <NavLink text="shop" />
        <NavLink text="about" />
        <NavLink text="contact" />


      </div>
    </nav>
  )
}
export default NavBar;