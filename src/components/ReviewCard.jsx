import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <article className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        alt="customer review"
        className="object-cover rounded-full w-[128px] h-[128px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="flex justify-center items-center mt-3 gap-2.5">
        <img src={star} width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-center font-bold text-3xl">
        {customerName}
      </h3>
    </article>
  );
};

export default ReviewCard;
