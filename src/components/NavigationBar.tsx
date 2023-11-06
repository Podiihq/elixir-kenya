import LogoIcon from "../assets/images/logo/logo.png";

function NavigationBar() {
  return (
    <div className="w-full">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <div className="lg:flex justify-between items-center ">
          <a href="#">
            <img src={LogoIcon} alt="" className="w-20 lg:w-24" />
          </a>
          {/* <div className="text-[#D9D9D9] lg:flex gap-8 font-semibold hidden">
            <a href="#about" className="hover:text-[#79628C]">
              About Us
            </a>
            <a href="#webinars" className="hover:text-[#79628C]">
              Meetups
            </a>
            <a href="#speakers" className="hover:text-[#79628C]">
              Speakers
            </a>
            <a href="#watch" className="hover:text-[#79628C]">
              Webinars
            </a>
          </div> */}
          {/* <motion.a
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgba(255,255,255)",
            }}
            href="https://t.me/elixirkenya"
            className="flex items-center gap-2 no-wrap py-3 px-6 bg-purple-500 text-white hover:text-black hover:bg-gray-200"
          >
            {" "}
            Join Community
            <i className="fa fa-telegram text-2xl"></i>
          </motion.a> */}
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
