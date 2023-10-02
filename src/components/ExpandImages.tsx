import { motion } from "framer-motion";

interface ExpandImageProps {
  image: string;
}

function ExpandImages(props: ExpandImageProps) {
  return (
    <div>
      <motion.img
        initial={{ width: 200, height: 400, flexGrow: 0 }}
        whileHover={{
          scale: 1.5,
          width: 400,
          height: 200,
        }}
        src={props.image}
        alt=""
        className="object-cover lg:rounded-xl"
      />
    </div>
  );
}

export default ExpandImages;
