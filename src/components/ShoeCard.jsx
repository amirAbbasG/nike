const ShoeCard = ({ imageUrl, changeBigShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    if (imageUrl !== bigShoeImg) {
      changeBigShoeImg(imageUrl.bigShoe);
    }
  };

  return (
    <div
      className={`max-sm:flex-1 rounded-xl cursor-pointer border-2 ${
        bigShoeImg === imageUrl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      }`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center rounded-xl bg-card bg-cover bg-center sm:w-40 sm:h-40 max-sm:p-4">
        <img
          src={imageUrl.thumbnail}
          alt="shoes collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
