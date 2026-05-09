import React from 'react'
import { BiSolidMoon, BiSolidSun } from "react-icons/bi"

const NavLinks = [
  {
    id: "1", name: "Home", link: "/#",
  },
  {
    id: "2", name: "CARS", link: "/#cars",
  },
  {
    id: "3", name: "ABOUT", link: "/#about",
  },
  {
    id: "4", name: "BOOKING", link: "/#booking",
  },
]

const Navbar = ({ theme, setTheme }) => {
  return (
    <nav className='shadow-md bg-slate-100 dark:bg-black/90 dark:text-white duration-300 '>
      <div className='container mx-auto px-4'>
        <div className="flex justify-between items-center py-4">

          <div>
            <h1 className='text-3xl font-bold font-serif'>
              Car Rental
            </h1>
          </div>

          <div className='hidden md:block'>
            <ul className='flex items-center gap-8'>
              {NavLinks.map((data) => (
                <li key={data.id}>
                  <a
                    className='py-2 hover:border-b-2 hover:text-[#ffc727] hover:border-[#ffc727] transition-all duration-300 text-lg font-medium'
                    href={data.link}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className='text-2xl cursor-pointer'
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className='text-2xl cursor-pointer'
              />
            )}
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar