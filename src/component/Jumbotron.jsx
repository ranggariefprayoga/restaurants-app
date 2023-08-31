/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Star from "./Star";

function Jumbotron() {
  return (
    <div className="jumbotron-container overflow-hidden mt-9 max-h-96 md:max-h-screen grid md:grid-cols-[60%_40%] bg-gradient-to-r from-fuchsia-500 rounded-3xl">
      <img src="../../public/hero.jpg" alt="Jumbotron" className="rounded-3xl h-50 object-cover  " />
      <div className="hidden sm:flex items-center justify-start mt-16 flex-col w-full  sm:mt-28 lg:mt-26 ">
        <h1 className="text-black  text-3xl font-bold leading-normal p-2  ml-8">
          Find your <span className="drop-shadow-2xl inline-block  p-1 animate-bounce rounded bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">restaurant</span> and add it to favorites!
        </h1>
        <Link to={"#search"} className="px-5 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-black font-semibold rounded-full hover:text-white hover:bg-gradient-to-r hover:border-transparent">
          Get Started
        </Link>
        <Star />
      </div>
    </div>
  );
}

export default Jumbotron;