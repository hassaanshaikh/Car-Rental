import React from 'react'
import cl1 from "../../assets/cl1.png";
import cl2 from "../../assets/cl2.png";
import car3 from "../../assets/car3.png";

const CarListData = [
  {
    name: "BMW UX",
    price: "100",
    image: cl1,
    aosDelay: "0",
  },
  {
    name: "KTA UX",
    price: "140",
    image: cl2,
    aosDelay: "500",
  },
  {
    name: "Jeep Wrangler",
    price: "120",
    image: car3,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className='pb-24 dark:bg-black/90 dark:text-white bg-slate-100 pt-12'>
      
      <div className='container mx-auto px-6'>

        <h1
          data-aos="fade-up"
          className='text-3xl sm:text-4xl mb-3 font-semibold font-serif'
        >
          Explore Our Premium Cars
        </h1>

        <p
          data-aos="fade-up"
          className='text-sm sm:text-base pb-10 text-gray-500 dark:text-gray-300'
        >
          Choose from a wide range of luxury, sports, and comfortable rental cars for every journey.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
          
          {CarListData.map((car) => {
            return (

              <div
                key={car.name}
                data-aos="fade-up"
                data-aos-delay={car.aosDelay}
                className='bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:scale-105 duration-300'
              >

                <div className='flex justify-center items-center h-55'>
                  <img
                    src={car.image}
                    alt={car.name}
                    className='w-full max-w-62 object-contain'
                  />
                </div>

                <div className='text-center space-y-2 mt-4'>

                  <h1 className='text-2xl font-semibold'>
                    {car.name}
                  </h1>

                  <p className='text-[#ffc727] text-lg font-medium'>
                    ${car.price}/Day
                  </p>

                </div>
              </div>

            )
          })}

        </div>

        <div className='grid place-content-center mt-8'>

            <button 
            data-aos="fade-up" 
            className="border-2 border-[#ffc727] px-6 py-2 text-[#ffc727] rounded-md hover:bg-[#ffc727]/80 duration-500 tracking-wider hover:text-black">
            Get Started </button>

        </div>

      </div>
    </div>
  )
}

export default CarList