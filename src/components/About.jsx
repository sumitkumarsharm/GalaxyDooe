import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  // use tostify
  

  return (
    <div
      className="flex flex-col justify-center items-center container mx-auto p-14  md:px-20 lg:px-32 overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About
        <span className="underline decoration-1 underline-offset-4 under font-light ">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 ">
        Passionate about Properties, Dedicated to your Vision
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          className="w-full sm:w-1/2 max-w-lg"
          alt=""
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6  md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">6+</p>
              <p className="">years of experience</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">13+</p>
              <p className="">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">22+</p>
              <p className="">Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p className="">Ongoing Projects</p>
            </div>
          </div>
          <div>
            <p className="my-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellat esse minus pariatur ad, quis suscipit, porro delectus corrupti quasi aperiam rerum commodi tempora nisi sed odio illo soluta! Pariatur, tenetur modi magni quasi repellendus blanditiis, fugiat dictadoloremque, minima, cum error quo dolore debitis, repellendus consectetur excepturi ducimus  delectus voluptate dolorem necessitatibus. Fugiat similique soluta, blanditiis dolor earum odit harum maiores expedita voluptatibus magnam accusantium temporibus minima ex natus, perspiciatis consequatur veniam eius quia quisquam optio.</p>
            <button  className="px-10 py-2 rounded bg-blue-500 border-2 border-transparent hover:bg-transparent hover:border-blue-500 text-white hover:text-blue-600  ">Learn more </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
