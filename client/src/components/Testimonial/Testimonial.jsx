import React from "react";
import { FaStar } from "react-icons/fa";

const testimonialData = [
  {
    name: "Ahmed",
    description: "Excellent service and clean cars. Booking was quick and very convenient.",
    aosDelay: "0",
  },

  {
    name: "Hassaan",
    description: "Affordable prices with premium quality cars. Highly recommended for road trips.",
    aosDelay: "300",
  },

  {
    name: "Awais",
    description: "Professional staff and smooth rental experience from start to finish.",
    aosDelay: "600",
  },
];

const Testimonial = () => {
  return (
    <div className="py-14 sm:py-24 dark:bg-black dark:text-white">
      <div className="container mx-auto px-6">

        {/* Heading Section */}
        <div className="space-y-4 pb-12 text-center">

          <p
            data-aos="fade-up"
            className="font-serif font-semibold text-3xl sm:text-4xl"
          >
            What Our Clients Say About Us
          </p>

          <p
            data-aos="fade-up"
            className="sm:px-44 text-gray-600 dark:text-gray-300"
          >
            Hear from our happy customers who trust us for comfortable,
            reliable, and premium car rental experiences.
          </p>

        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black dark:text-white">

          {testimonialData.map((data) => {
            return (

              <div
                key={data.name}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="text-center group space-y-5 p-6 bg-white dark:bg-white/10 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl duration-300 max-w-95 mx-auto"
              >

                {/* Profile Image */}
                <div className="flex justify-center">
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="w-20 h-20 rounded-full object-cover border-4 border-[#ffc727]"
                  />
                </div>

                {/* Stars */}
                <div className="flex justify-center items-center gap-1 text-yellow-400 text-2xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-7">
                  {data.description}
                </p>

                {/* Name */}
                <p className="font-semibold text-xl">
                  {data.name}
                </p>

              </div>

            );
          })}

        </div>
      </div>
    </div>
  );
};

export default Testimonial;