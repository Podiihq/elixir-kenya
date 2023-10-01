import NavigationBar from "../components/NavigationBar";
import HeroImage from "../assets/images/hero-final.png";
import Hero2 from "../assets/images/sub-hero-1.png";
import Hero3 from "../assets/images/sub-hero-2.png";
import Hero4 from "../assets/images/sub-hero-4.png";
import Hero1 from "../assets/images/sub-hero-3.png";
import UlrichPic from "../assets/images/speakers/peter-ullrich.jpeg";
import RajPic from "../assets/images/speakers/raj-rajhans.png";
import Session1 from "../assets/images/sessions/ulrich.png";
import Session2 from "../assets/images/sessions/beam.png";
import TraceyPic from "../assets/images/speakers/tracey.jpeg";
import { motion, useScroll, useSpring } from "framer-motion";
import Marquee from "react-fast-marquee";

import "../App.css";
import Cards from "../components/Cards";
import CardsAlternate from "../components/CardsAlternate";
import ExpandImages from "../components/ExpandImages";
import BlogCards from "../components/BlogCards";
import { Footer } from "../components/Footer";
import Testimonials from "../components/Testimonials";

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
        className="fixed inset-0 h-4 bg-gradient-to-r from-[#2a242e] to-purple-600 bg-gray-600 origin-[0%] z-50"
        style={{ scaleX }}
      />
      <NavigationBar />
      <div className="bg-black text-gray-100" style={{ fontFamily: "Roboto" }}>
        <div className="relative">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt=""
            className="object-cover w-full relative h-96"
          />
        </div>
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0, type: "spring" }}
            transition={{ duration: 0.5 }}
            className="leading-none text-[5rem] lg:text-[11.8rem] font-black py-8 text-gray-100 text-center"
          >
            Elixir Kenya
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-lg lg:text-3xl text-gray-300 text-center"
          >
            Embark on a journey to amplify Elixir's <br></br>impact in Kenya
            through our thriving community.
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
            heading={"Our Monthly Webinars"}
            description={
              "Our webinars feature a rich tapestry of speakers from various backgrounds, each sharing their invaluable insights and expertise. Catering to a diverse audience, ranging from novices to seasoned developers, these talks are thoughtfully designed to resonate with attendees of all levels. "
            }
          />
          <div className="py-8"></div>
          <CardsAlternate
            images={Hero3}
            heading={"Monday Meetups"}
            description={
              "Get ready to put your coding hats on because the Monday meetups are back and better than ever! Starting from April 17th, we'll be diving deep into the world of Phoenix liveview and building a real-life chat app project together!"
            }
          />
          <div className="text-center py-8">
            <p className="text-3xl">
              Join our community to get updates about our meetups.
            </p>
          </div>
          <div className="flex justify-center">
            <motion.a
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px rgba(255,255,255)",
              }}
              href=""
              className="lg:text-2xl py-3 px-6 border text-white border-gradient-to-r to-[#00D68E] from-[#6941C6] hover:bg-gray-900"
            >
              {" "}
              Join us today
            </motion.a>
          </div>
        </section>
        <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-24 items-center">
            <div>
              <p className="text-5xl lg:text-8xl font-black uppercase leading-none text-center lg:text-left">
                Explore,<br></br> Create & <br></br>Connect
              </p>
              <p className="py-4 lg:py-8 text-xl text-center lg:text-left">
                Dive deep into the latest tools and techniques with interactive,
                practical
                <span className="uppercase font-semibold text-orange-500">
                  {" "}
                  workshops
                </span>
                , connecting with fellow
                <span className="uppercase font-semibold text-yellow-500">
                  {" "}
                  elixir developers
                </span>
                , potential collaborators, and
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
                  Our Community 😃
                </motion.a>
              </div>
            </div>
            <div className="mt-4">
              <img
                src="https://images.unsplash.com/photo-1574786199573-a22c93a95aaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2077&q=80"
                alt=""
                className="rounded-xl border-gray-100 border-2"
              />
            </div>
          </div>
        </section>

        <section className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-32">
          <div className="grid lg:grid-cols-6 lg:gap-4 grid-cols-2">
            <ExpandImages image={Hero3} />
            <ExpandImages image={Hero2} />
            <ExpandImages image={Hero4} />
            <ExpandImages image={HeroImage} />
            <ExpandImages image={Hero1} />
            <ExpandImages image={HeroImage} />
          </div>
        </section>

        <section>
          <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-32">
            <div>
              <div>
                <p className="text-5xl lg:text-8xl font-bold">
                  What our speakers have to say,
                </p>
              </div>
              <div className="grid lg:grid-cols-2 mt-16 gap-10">
                <Testimonials
                  image={UlrichPic}
                  description={
                    "“Going to Elixir Kenya is always the most wonderful experience. This is where Africa's smartest and kindest people come together. It is the most welcoming community I've ever encountered.”"
                  }
                  name={"Peter Ulrich"}
                />
                <Testimonials
                  image={TraceyPic}
                  description={
                    "“I loved that I could schedule time with the organizer a day before the event to plan and prepare for the event together. This helped me to calm down and know how the itinerary would be.”"
                  }
                  name={"Tracey Onim"}
                />
                <Testimonials
                  image={RajPic}
                  description={
                    "“The thoughtful questions and lively discussions that followed my presentation were a testament to the vibrant and passionate community you have cultivated”"
                  }
                  name={"Raj Rajhans"}
                />
                <Testimonials
                  image={TraceyPic}
                  description={
                    "“I had a great experience presenting the topic - Building Your MVP with Elixir -  to the Elixir Kenya community. The engagement and enthusiasm from the audience of Elixir enthusiasts were truly inspiring.”"
                  }
                  name={"Njoki Kiarie"}
                />
              </div>
              <div className="pt-16 flex justify-center">
                <motion.a
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgba(255,255,255)",
                  }}
                  href=""
                  className="lg:text-2xl py-3 px-6 border text-white bg-gradient-to-r from-[#3d2a44] to-[#610781]"
                >
                  Become Speaker
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-32">
          <div className="bg-[#131313] p-6 lg:p-12 rounded-xl shadow-lg">
            <p className="text-center pb-8 uppercase">Upcoming Events</p>
            <div className="text-5xl lg:text-[5.2rem] leading-none font-bold lg:font-black text-center">
              🤯Get ready to put your coding hats at{" "}
              <span className="text-purple-500">ElixirConf Africa 2024 !</span>
            </div>
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
                Buy Tickets 🎫
              </motion.a>
            </div>
          </div>

          <div className="text-center bg-purple-500 py-4 rounded-b-xl">
            <Marquee className="overflow-hidden">
              <p className="text-4xl">
                {" - "}
                ElixirConf Africa 2024 - ElixirConf Africa 2024 - ElixirConf
                Africa 2024
              </p>
            </Marquee>
          </div>
        </section>

        <section className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-32">
          <div>
            <div>
              <h3 className="text-5xl lg:text-8xl font-bold">
                Watch our <br></br>Webinars
              </h3>
            </div>
            <div className="grid lg:grid-cols-3 mt-8 gap-10">
              <BlogCards
                images={Session2}
                heading={"Beam: The perfect fit for Networks"}
                date={"06 October, 2023"}
              />
              <BlogCards
                images={Session1}
                heading={"Monolith vs Microservices"}
                date={"24 February, 2023"}
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
