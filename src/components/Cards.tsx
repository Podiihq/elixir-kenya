interface CardProps {
  images: string;
  heading: string;
  description: string;
}

function Cards(props: CardProps) {
  return (
    <div className="grid lg:grid-cols-2 items-center bg-[#131313] rounded-xl text-gray-100">
      <div>
        <img src={props.images} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="px-12 py-20">
        <h3 className="text-5xl lg:text-7xl font-bold">{props.heading}</h3>
        <p className="mt-8">{props.description}</p>
      </div>
    </div>
  );
}

export default Cards;
