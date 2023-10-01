import { motion } from "framer-motion";
import LogoIcon from "../assets/images/logo/logo.png";

function NavigationBar() {
  return (
    <div className="bg-black w-full">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex justify-between items-center ">
          <a href="#">
            <img src={LogoIcon} alt="" className="w-24" />
          </a>
          <motion.a
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgba(255,255,255)",
            }}
            href="https://t.me/elixirkenya"
            className="no-wrap py-3 px-6 bg-purple-500 text-white hover:text-black hover:bg-gray-200"
          >
            {" "}
            Join Community 🔥
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
