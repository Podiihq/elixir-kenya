function NavigationBar() {
  return (
    <div className="bg-black">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex justify-between items-center">
          <a
            href=""
            className="py-3 px-6 border text-white border-gradient-to-r to-[#00D68E] from-[#6941C6] hover:bg-gray-900"
          >
            {" "}
            Login Now ✴️
          </a>
          <div className="text-white flex gap-4">
            <a href="#" className="text-lg ">
              Choose Event
            </a>
            <a className="text-lg">/</a>
            <a href="#" className="text-lg">
              About Us
            </a>
            <a className="text-lg">/</a>
            <a href="#" className="text-lg">
              Ownership
            </a>
            <a className="text-lg">/</a>
            <a href="#" className="text-lg">
              Contact
            </a>
          </div>

          <a href="" className="py-3 px-6 bg-white hover:bg-gray-200">
            {" "}
            Register Now 🔥
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
