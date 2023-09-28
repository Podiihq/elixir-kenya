import NavigationBar from "../components/NavigationBar";
import HeroImage from "../assets/images/hero-final.png";
import Hero2 from "../assets/images/sub-hero-1.png";
import Hero3 from "../assets/images/sub-hero-2.png";
import Hero4 from "../assets/images/sub-hero-4.png";
import Hero1 from "../assets/images/sub-hero-3.png";
import { motion, useScroll, useSpring } from "framer-motion";
import Marquee from "react-fast-marquee";

import "../App.css";
import Cards from "../components/Cards";
import CardsAlternate from "../components/CardsAlternate";
import ExpandImages from "../components/ExpandImages";
import BlogCards from "../components/BlogCards";
import { Footer } from "../components/Footer";

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
        className="fixed inset-0 h-4 bg-gradient-to-r from-[#796612] to-red-600 bg-gray-600 origin-[0%] z-50"
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
        <section className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
          <Cards
            images={Hero2}
            heading={"Unlocking Creativity"}
            description={"Unlocking Creativity: Design Conference 2023"}
          />
          <div className="py-8"></div>
          <CardsAlternate
            images={Hero3}
            heading={"Productive Sessions"}
            description={
              "Join us for an immersive three-day design conference where creativity knows no bounds. Connect with industry leaders, explore cutting-edge design trends, and fuel your passion for design innovation."
            }
          />

          <div className="flex justify-center mt-12">
            <motion.a
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px rgba(255,255,255)",
              }}
              href=""
              className="lg:text-2xl py-3 px-6 border text-white border-gradient-to-r to-[#00D68E] from-[#6941C6] hover:bg-gray-900"
            >
              {" "}
              Join us today 😎
            </motion.a>
          </div>
        </section>

        <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-24 items-center">
            <div>
              <p className="text-5xl lg:text-8xl font-black uppercase leading-none text-center lg:text-left">
                Design<br></br> Create & <br></br>Connect
              </p>
              <p className="py-4 lg:py-8 text-xl text-center lg:text-left">
                Dive deep into the latest tools and techniques with interactive,
                practical{" "}
                <span className="uppercase font-semibold text-orange-500">
                  workshops
                </span>{" "}
                , connecting with fellow{" "}
                <span className="uppercase font-semibold text-yellow-500">
                  {" "}
                  designers
                </span>
                , potential collaborators, and{" "}
                <span className="uppercase font-semibold text-green-500">
                  {" "}
                  mentors
                </span>{" "}
                who can shape your career.
              </p>
              <div className="mt-4 flex justify-center lg:block">
                <motion.a
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgba(255,255,255)",
                  }}
                  href=""
                  className="lg:text-2xl py-3 px-6 border text-white bg-gradient-to-r from-[#796612] to-red-600"
                >
                  {" "}
                  Our Community 😃
                </motion.a>
              </div>
            </div>
            <div className="mt-4">
              <img
                src={Hero4}
                alt=""
                className="rounded-xl border-gray-100 border-2"
              />
            </div>
          </div>
        </section>
        <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-32">
          <div>
            <div>
              <h3 className="text-5xl lg:text-9xl uppercase text-center lg:text-left">
                Our <br></br>Past Events.
              </h3>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-32">
          <div className="grid lg:grid-cols-6 gap-4 grid-cols-2">
            <ExpandImages image={Hero3} />
            <ExpandImages image={Hero2} />
            <ExpandImages image={Hero4} />
            <ExpandImages image={HeroImage} />
            <ExpandImages image={Hero1} />
            <ExpandImages image={HeroImage} />
          </div>
        </section>

        <section className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-32">
          <div className="bg-[#131313] p-6 lg:p-12 rounded-xl shadow-lg">
            <div className="text-5xl lg:text-[5.2rem] leading-none font-bold lg:font-black text-center">
              🎨 Unlock Your Creative Potential at Design Conference 2023!
            </div>
          </div>
          <div className="text-center bg-orange-400 py-4 rounded-b-xl">
            <Marquee className="overflow-hidden">
              <p className="text-4xl">
                - Design Conference 2023 - Design Conference 2023 - Design
                Conference 2023
              </p>
            </Marquee>
          </div>
        </section>

        <section className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-32">
          <div>
            <div>
              <h3 className="text-9xl">Our Blogs</h3>
            </div>
            <div className="grid lg:grid-cols-3 mt-8 gap-10">
              <BlogCards
                images={Hero1}
                heading={"Principles of interractive design"}
                date={"19 July, 2023"}
              />
              <BlogCards
                images={Hero2}
                heading={"Introduction to UX/UI"}
                date={"23 December, 2020"}
              />
              <BlogCards
                images={Hero3}
                heading={"Design for developers"}
                date={"05 May, 2022"}
              />
            </div>
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Landing;
