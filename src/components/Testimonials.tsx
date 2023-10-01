import { motion } from "framer-motion";

interface TestimonialProps {
  image: string;
  description: string;
  name: string;
}

function Testimonials(props: TestimonialProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 8px rgba(255,255,255)",
      }}
      className="relative rounded"
    >
      <div className="flex gap-10 border border-[#333333] rounded p-8 items-center bg-[#131313]">
        <div>
          <p className="text-lg">{props.description}</p>
          <p className="pt-10 text-gray-500">{props.name}</p>
        </div>
        <img
          src={props.image}
          alt=""
          className="object-cover w-52 h-72 rounded"
        />
      </div>
      <div className="p-4 absolute -top-10 left-5 rounded-full text-6xl">
        💬
      </div>
    </motion.div>
  );
}

export default Testimonials;
