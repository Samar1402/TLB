import React from "react";
import delivery from "../assets/delivery_transparent.png";

const Home = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row  border rounded-xl shadow-md p-6 justify-evenly bg-gradient-to-r from-slate-950 to-yellow-200">
        <div className="flex flex-col gap-10">
          <h1 className="text-8xl font-semibold text-center md:text-left w-[700px] text-white mt-4 ">
            We Are Ready To <span className="text-yellow-200">Deliver</span>{" "}
            Your F☺️☺️d 👉🏻
          </h1>
          <button className="border-black bg-teal-700 text-white px-6 py-2 rounded-2xl w-36 h-14 justify-center font-semibold">
            ORDER NOW
          </button>
        </div>

        <img
          src={delivery}
          alt="Food Delivery"
          className="w-auto h-[640px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Home;
