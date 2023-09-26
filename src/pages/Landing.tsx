import NavigationBar from "../components/NavigationBar";
import HeroImage from "../assets/images/hero-final.png";
import MainHero from "../assets/images/main-hero.png";
import { motion, useScroll, useSpring } from "framer-motion";

function Landing() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        className="fixed inset-0 h-4 bg-gray-600 origin-[0%] z-50"
        style={{ scaleX }}
      />
      <NavigationBar />
      <div className="bg-black text-gray-100" style={{ fontFamily: "Roboto" }}>
        <div className="relative">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            src={HeroImage}
            alt=""
            className="object-cover w-full relative"
          />
        </div>
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="flex justify-between gap-4 text-center text-sm">
            <p className="lg:text-2xl uppercase">January 8 - 9</p>
            <p className="lg:text-2xl uppercase">Live & Virtual</p>
            <p className="lg:text-2xl uppercase">
              Mega Cinema, Mega Mall, Kisumu
            </p>
          </div>
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0, type: "spring" }}
            transition={{ duration: 0.5 }}
            className="leading-none uppercase text-[5rem] lg:text-[10.2rem] font-black py-8 text-gray-100 text-center"
          >
            Design Conf
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-lg lg:text-3xl text-gray-300 text-center"
          >
            Master class and workeshops at <br></br> Design Conference.
          </motion.p>
          <div className="flex justify-center mt-6">
            <motion.a
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px rgba(255,255,255)",
              }}
              href=""
              className="lg:text-2xl py-3 px-6 border text-white border-gradient-to-r to-[#00D68E] from-[#6941C6] hover:bg-gray-900"
            >
              {" "}
              Let's Rock 🔥
            </motion.a>
          </div>
        </div>
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
          <div className="grid grid-cols-2 gap-12 items-center bg-gray-900 rounded-xl">
            <div>
              <img
                src={MainHero}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center py-20">
              <h3 className="text-7xl font-bold">Productive Sessions</h3>
              <p className="mt-8 px-12">
                One billion people aged 60+ live today, and it’s growing faster
                than any other age group. Here are some key points to consider
                to design experiences that are more accessible and inclusive for
                older adults.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
