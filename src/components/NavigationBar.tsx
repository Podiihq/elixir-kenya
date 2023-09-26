import { motion } from "framer-motion";

function NavigationBar() {
  return (
    <div className="bg-black z-50 fixed w-full">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="lg:flex justify-between items-center">
          <motion.a
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgba(255,255,255)",
            }}
            href="#"
            className="py-3 px-6 border text-white border-gradient-to-r to-[#00D68E] from-[#6941C6] hover:bg-gray-900"
          >
            {" "}
            Login Now ✴️
          </motion.a>
          <div className="text-white flex gap-4">
            <a href="#" className="text-lg ">
              Hype
            </a>
          </div>
          <motion.a
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgba(255,255,255)",
            }}
            href="#"
            className="py-3 px-6 bg-white hover:bg-gray-200"
          >
            {" "}
            Register Now 🔥
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
