import React from 'react'
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Best Price",
    icon: (
      <FaCameraRetro className="text-5xl text-[#ffc727] group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Affordable and competitive prices for every journey.",
    aosdelay: "0",
  },

  {
    name: "Fast and Safe",
    icon: (
      <GiNotebook className="text-5xl text-[#ffc727] group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Quick booking process with secure and reliable service.",
    aosdelay: "500",
  },

  {
    name: "Experience Drivers",
    icon: (
      <SlNote className="text-5xl text-[#ffc727] group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Professional and experienced drivers for comfortable rides.",
    aosdelay: "1000",
  },
]

const Services = () => {
  return (
    <div className='dark:bg-black dark:text-white py-14'>

      <div className='container mx-auto px-4'>

        {/* Heading */}
        <div className='text-center mb-12'>
          <h1 className='text-3xl sm:text-4xl font-semibold font-serif'>
            Why Choose Us
          </h1>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>

          {skillsData.map((skills) => (
            <div
              key={skills.name} data-aos="fade-up" data-aos-delay={skills.aosDelay}
              className='card group space-y-3 sm:space-y-6 sm:py-16 bg-black p-4 text-center hover:bg-[#ffc727] border border-amber-100 text-white hover:text-black rounded-lg duration-300'
            >

              {/* Icon */}
              <div className='flex justify-center mb-5'>
                {skills.icon}
              </div>

              {/* Title */}
              <h1 className='text-2xl font-bold mb-3'>
                {skills.name}
              </h1>

              {/* Description */}
              <p className='text-gray-500 group-hover:text-black duration-300 mb-4'>
                {skills.description}
              </p>

              {/* Button */}
              <a
                href={skills.link}
                className='text-[#ffc727] group-hover:text-black font-semibold'
              >
                Learn More
              </a>

            </div>
          ))}

        </div>

      </div>
    </div>
  )
}

export default Services