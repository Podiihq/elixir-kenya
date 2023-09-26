import NavigationBar from "../components/NavigationBar";
import HeroImage from "../assets/images/hero-final.png";

function Landing() {
  return (
    <>
      <NavigationBar />
      <div className="bg-black text-gray-100" style={{ fontFamily: "Roboto" }}>
        <div className="relative">
          <img
            src={HeroImage}
            alt=""
            className="object-cover w-full relative"
          />
          <h1 className="uppercase font-bold text-5xl text-white z-10 absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            DsgnConf
          </h1>
        </div>
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="flex justify-between">
            <p className="text-2xl uppercase">January 8 - 9</p>
            <p className="text-2xl uppercase">Live & Virtual</p>
            <p className="text-2xl uppercase">Mega Cinema, Mega Mall, Kisumu</p>
          </div>
          <h1 className="leading-none uppercase text-[10.2rem] font-black py-8 text-gray-100">
            Design Conf
          </h1>
          <p className="text-3xl text-gray-300 text-center">
            Master class and workeshops at <br></br> Design Conference
          </p>
          <div className="flex justify-center mt-6">
            <a
              href=""
              className="text-2xl py-3 px-6 border text-white border-gradient-to-r to-[#00D68E] from-[#6941C6] hover:bg-gray-900"
            >
              {" "}
              Let's Rock 🔥
            </a>
          </div>
          <div className="my-32"></div>
        </div>
      </div>
    </>
  );
}

export default Landing;
