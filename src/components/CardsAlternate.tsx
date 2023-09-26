interface CardProps {
  images: string;
  heading: string;
  description: string;
}

function CardsAlternate(props: CardProps) {
  return (
    <div className="flex flex-col-reverse lg:grid grid-cols-2 items-center bg-[#131313] rounded-xl text-gray-100">
      <div className="text-center py-20">
        <h3 className="text-5xl lg:text-7xl font-bold">{props.heading}</h3>
        <p className="mt-8 px-12">{props.description}</p>
      </div>
      <div>
        <img src={props.images} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default CardsAlternate;
