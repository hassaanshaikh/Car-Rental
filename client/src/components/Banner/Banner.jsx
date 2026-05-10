import React from "react";
import banner from "../../assets/banner.jpeg";
import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";

const bannerImage = {
  backgroundImage: `url(${banner})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Banner = () => {
  return (
    <div className="w-full flex justify-center py-6 dark:bg-black/90 dark:text-white bg-slate-100">
      <div
        className="w-[95%] min-h-55 sm:min-h-80 md:min-h-100 rounded-xl text-black py-10 sm:grid sm:place-items-center"
        style={bannerImage}
      >
        <div className="space-y-6 max-w-xl mx-auto">
          <h1
            data-aos="fade-up"
            className="text-2xl sm:text-4xl text-center font-semibold font-serif"
          >
            Get Started Our App
          </h1>

          <p data-aos="fade-up" className="text-center sm:px-20">
            Book your ride in minutes with a fast, secure, and reliable
            experience. Choose your destination, confirm your trip, and enjoy a
            smooth journey from start to finish.
          </p>

          <div className="flex justify-center items-center gap-4 flex-wrap">
            <a href="#" className="w-36 sm:w-40 md:w-44">
              <img
                src={b1}
                alt="Google Play"
                className="w-full h-auto object-contain mb-3"
              />
            </a>

            <a href="#" className="w-36 sm:w-40 md:w-44">
              <img
                src={b2}
                alt="App Store"
                className="w-full h-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
