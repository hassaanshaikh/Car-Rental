import React from "react";
import car3 from "../../assets/car3.png";

const About = () => {
  return (
    <div className="dark:bg-black/90 dark:text-white bg-slate-100 duration-300 py-16">
      
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10">
          
          {/* Image Section */}
          <div
            data-aos="slide-right"
            data-aos-duration="1500"
            className="flex justify-center"
          >
            <img
              src={car3}
              alt=""
              className="w-70 sm:w-100 md:w-125 object-contain drop-shadow-[2px_10px_6px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-5 text-center sm:text-left">
            
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold font-serif"
            >
              About Us
            </h1>

            <p data-aos="fade-up">
              We provide reliable, affordable, and premium car rental
              services designed to make every journey comfortable, safe,
              and hassle-free.
            </p>

            <p data-aos="fade-up">
              Whether you're traveling for business, vacations, or daily
              commuting, we offer the perfect car to match your comfort
              and style.
            </p>

            <button
              data-aos="fade-up"
              className="border-2 border-[#ffc727] px-6 py-2 text-[#ffc727] rounded-md hover:bg-[#ffc727]/80 duration-500 tracking-wider hover:text-black"
            >
              Get Started
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;