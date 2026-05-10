import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },

  {
    title: "About",
    link: "/#about",
  },

  {
    title: "Contact",
    link: "/#contact",
  },

  {
    title: "Blog",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    // mt-12 rounded-t-3xl
    <div className="dark:bg-black/90 dark:text-white bg-slate-100 ">
      <div className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* company detail */}
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl sm:text-left font-bold mb-3 text-justify gap-3 flex items-center">
              Car Rental
            </h1>
            <p>
              {" "}
              Discover reliable and affordable car rentals designed for every
              journey. From city rides to weekend getaways, book your ideal
              vehicle with comfort, convenience, and flexibility.
            </p>
            <br />

            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Karachi, Pakistan</p>
            </div>

            <div className="flex items-center gap-3">
              <FaMobileAlt />
              <p>+923113456098</p>
            </div>

            {/* social handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="">
                <FaInstagram className="text-3xl hover:bg-[#ffc727] duration-300" />
              </a>
              <a href="">
                <FaFacebook className="text-3xl hover:bg-[#ffc727] duration-300" />
              </a>
              <a href="">
                <FaLinkedin className="text-3xl hover:bg-[#ffc727] duration-300" />
              </a>
            </div>
          </div>

          {/* navlinks */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* first col */}
            <div>
              <div className="py-10 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => {
                    return (
                      <li
                        key={data.title}
                        className="cursor-pointer hover:text-[#ffc727] duration-300"
                      >
                        <span className="mr-2">&#11162;</span>
                        <a href={data.link}>{data.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* second col */}
            <div>
              <div className="py-10 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => {
                    return (
                      <li
                        key={data.title}
                        className="cursor-pointer hover:text-[#ffc727] duration-300"
                      >
                        <span className="mr-2">&#11162;</span>
                        <a href={data.link}>{data.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* third col */}
            <div>
              <div className="py-10 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => {
                    return (
                      <li
                        key={data.title}
                        className="cursor-pointer hover:text-[#ffc727] duration-300"
                      >
                        <span className="mr-2">&#11162;</span>
                        <a href={data.link}>{data.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
