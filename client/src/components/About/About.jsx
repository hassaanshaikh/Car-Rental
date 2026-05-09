import React from "react";
import car3 from "../../assets/car3.png";

const About = () => {
  return (
    <div className="dark:bg-black/90 dark:text-white bg-slate-100 duration-300 sm:min-h-130 sm:grid sm:place-items-center">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center mb-30">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img src={car3} className="sm:-translate-x-11 sm:scale-125 max-h-100 drop-shadow-[2px_10px_6px_rgba(0,0,0,0,50)]" alt="" />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6 mt-20">
              <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold font-serif">
                About Us
              </h1>
              <p data-aos="fade-up">
                We provide reliable, affordable, and premium car rental services designed to make every journey comfortable, safe, and hassle-free. From city rides to long road trips, we help you travel with confidence.
              </p>
              <p data-aos="fade-up">
                Whether you're traveling for business, vacations, or daily commuting, we offer the perfect car to match your comfort and style.
              </p>
              <button data-aos="fade-up" className="border-2 border-[#ffc727] px-6 py-2 text-[#ffc727] rounded-md hover:bg-[#ffc727]/80 duration-500 tracking-wider hover:text-black">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
