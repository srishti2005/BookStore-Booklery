import React from "react";
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36 space-y-8">
          <h1 className="text-2xl md:text-4xl font-bold text-purple-800 leading-tight">
            Hello, The Bookery welcomes you to learn something{" "}
            <span className="text-yellow-500">new every day!!!</span>
          </h1>
          <p className="text-sm md:text-lg text-purple-700 bg-yellow-100 p-4 rounded-lg shadow-md">
            "Welcome to The Bookery, where every story finds its home. Discover a world of curated reads across genres, designed to inspire, captivate, and transport you."
          </p>
          <div className="flex items-center gap-2 p-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-800 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-5 h-5 text-yellow-300"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow bg-transparent text-yellow-100 placeholder-yellow-200" />
          </div>
          
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2 flex justify-center md:justify-end">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
