import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Register = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-[#111827] border border-yellow-500/20 rounded-3xl p-8 shadow-2xl"
      >

        {/* heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Create <span className="text-yellow-400">Account</span>
          </h1>

          <p className="text-gray-400 mt-3 text-sm">
            Register now and start booking premium rental cars.
          </p>
        </div>

        {/* form */}
        <form className="space-y-5">

          {/* name */}
          <div>
            <label className="text-gray-300 text-sm">Full Name</label>

            <div className="mt-2 flex items-center bg-black border border-gray-700 rounded-xl px-4">
              <FaUser className="text-yellow-400" />

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-transparent outline-none py-4 px-3 text-white"
              />
            </div>
          </div>

          {/* email */}
          <div>
            <label className="text-gray-300 text-sm">Email</label>

            <div className="mt-2 flex items-center bg-black border border-gray-700 rounded-xl px-4">
              <FaEnvelope className="text-yellow-400" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none py-4 px-3 text-white"
              />
            </div>
          </div>

          {/* password */}
          <div>
            <label className="text-gray-300 text-sm">Password</label>

            <div className="mt-2 flex items-center bg-black border border-gray-700 rounded-xl px-4">
              <FaLock className="text-yellow-400" />

              <input
                type="password"
                placeholder="Create password"
                className="w-full bg-transparent outline-none py-4 px-3 text-white"
              />
            </div>
          </div>

          {/* button */}
          <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all duration-300 text-black font-semibold py-4 rounded-xl">
            Create Account
          </button>

        </form>

        {/* footer */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Already have an account?

          <Link
            to="/login"
            className="text-yellow-400 ml-2 hover:underline"
          >
            Login
          </Link>
        </p>

      </motion.div>
    </div>
  );
};

export default Register;