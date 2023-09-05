import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col w-full flex-1 cursor-pointer">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="flex justify-start gap-2.5 mt-8">
        <img src={star} width={24} height={24} alt="rating" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          4.5
        </p>
      </div>
      <h3 className="mt-2 font-palanquin font-semibold text-2xl leading-normal">
        {name}
      </h3>
      <p className="mt-2 text-2xl font-montserrat font-semibold text-coral-red leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
