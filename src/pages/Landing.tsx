import NavigationBar from "../components/NavigationBar";
import HeroImage from "../assets/images/hero-2.png";

function Landing() {
  return (
    <>
      <NavigationBar />
      <div className="bg-black text-white" style={{ fontFamily: "Roboto" }}>
        <div className="relative">
          <img
            src={HeroImage}
            alt=""
            className="object-cover w-full relative"
          />
          <h1 className="uppercase font-bold text-5xl text-white z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            DsgnConf
          </h1>
        </div>
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="flex justify-between">
            <p className="text-2xl uppercase">January 8 - 9</p>
            <p className="text-2xl uppercase">Live & Virtual</p>
            <p className="text-2xl uppercase">Mega Cinema, Mega Mall, Kisumu</p>
          </div>
          <h1 className="uppercase text-[10.2rem] font-black py-8 text-gray-100">
            Design Conf
          </h1>
        </div>
      </div>
    </>
  );
}

export default Landing;
