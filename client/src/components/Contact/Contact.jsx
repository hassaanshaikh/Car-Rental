import React from "react";

const Contact = () => {
  return (
    <div className="dark:bg-black dark:text-white py-14">
      <div className="w-full flex justify-center" data-aos="zoom-in">
        <div className="w-[95%]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 py-24 bg-gray-800 rounded-xl">
            <div className="col-span-2 space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Let&apos;s collaborate on your upcoming car rental venture
              </h1>
              <p className="text-gray-400">
                Build a seamless, reliable, and user-friendly car rental
                experience for every journey.
              </p>
            </div>
            <div className="grid place-items-center">
                <a href="#" className="inline-block font-semibold py-2 px-6 bg-[#ffc727] text-white tracking-wider uppercase rounded-lg hover:bg-[#ffc727]/80 duration-300">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;