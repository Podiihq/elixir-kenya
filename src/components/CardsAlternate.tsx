interface CardProps {
  images: string;
  heading: string;
  description: string;
}

function CardsAlternate(props: CardProps) {
  return (
    <div className="flex flex-col-reverse lg:grid grid-cols-2 items-center bg-[#1E1E1E] rounded-xl text-gray-100">
      <div className="px-6 lg:px-12 py-8 lg:py-20">
        <h3 className="text-2xl lg:text-[36px] font-semibold">
          {props.heading}
        </h3>
        <p className="mt-4 lg:mt-8">{props.description}</p>
      </div>
      <div>
        <img src={props.images} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default CardsAlternate;
