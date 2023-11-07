interface CardProps {
  images: string;
  heading: string;
  description: string;
}

function Cards(props: CardProps) {
  return (
    <div className="grid lg:grid-cols-2 items-center border border-[#3d3d3d] rounded-xl text-gray-100">
      <div>
        <img
          src={props.images}
          alt=""
          className="w-full h-full object-cover p-4 rounded-xl"
        />
      </div>
      <div className="px-6 lg:px-12 pb-8 lg:py-20">
        <h3 className="text-2xl lg:text-[36px] font-semibold">
          {props.heading}
        </h3>
        <p className="mt-4 lg:mt-8 text-[#D9D9D9]">{props.description}</p>
      </div>
    </div>
  );
}

export default Cards;
