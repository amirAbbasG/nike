const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex flex-1 flex-col w-full sm:w-[350px] rounded-[20px] shadow-3xl px-10 py-16">
      <div className="flex justify-center items-center w-11 h-11 rounded-full bg-coral-red">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <p className="mt-5 text-3xl font-palanquin font-bold  leading-normal ">
        {label}
      </p>
      <p className="mt-3 text-lg leading-normal font-montserrat text-slate-gray break-words">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
