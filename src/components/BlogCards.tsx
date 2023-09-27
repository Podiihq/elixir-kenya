import { motion } from "framer-motion";

interface BlogCardProps {
  images: string;
  heading: string;
  date: string;
}

function BlogCards(props: BlogCardProps) {
  return (
    <div>
      <img src={props.images} alt="" className="rounded-xl" />
      <p className="text-xs text-gray-500 mt-4">Uncategorized</p>
      <h4 className="py-4 font-bold text-4xl">{props.heading}</h4>
      <p className="text-xs text-gray-500">{props.date}</p>
      <div className="mt-12">
        <motion.a
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgba(255,255,255)",
          }}
          href=""
          className="lg:text-2xl py-3 px-6 border text-white border-gradient-to-r to-[#00D68E] from-[#6941C6] hover:bg-gray-900"
        >
          {" "}
          Read More
        </motion.a>
      </div>
    </div>
  );
}

export default BlogCards;
