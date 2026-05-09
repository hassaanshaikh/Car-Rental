import React from 'react'
import carr from "../../assets/carr.png";
import car2 from "../../assets/car2.png";

const Hero = ({ theme }) => {
  return (
    <div className='dark:bg-black dark:text-white duration-300 overflow-hidden'>
      
      <div className='container mx-auto min-h-screen flex items-center px-6'>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-10 w-full'>
          
          {/* Text Section */}
          <div className='order-2 sm:order-1 space-y-5 text-center sm:text-left'>
            
            <p
              data-aos="fade-up"
              className='text-[#ffc727] font-serif text-2xl'
            >
              Effortless
            </p>

            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className='text-5xl md:text-6xl lg:text-7xl font-semibold font-serif'
            >
              Car Rental
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              className='max-w-md'
            >
              Fast, easy and affordable car rentals at your fingertips.
            </p>

            <button
              data-aos="fade-up"
              data-aos-duration="1500"
              className='px-6 py-2 text-black bg-[#ffc727] rounded-md hover:bg-[#ffc727]/80 duration-300'
            >
              Get Started
            </button>
          </div>

          {/* Image Section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className='order-1 sm:order-2 flex justify-center'
          >
            <img
              src={theme === "dark" ? carr : car2}
              alt=""
              className='w-70 sm:w-100 md:w-125 lg:w-162 object-contain drop-shadow-[2px_20px_6px_rgba(0,0,0,0.5)]'
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero