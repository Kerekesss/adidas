const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-4 rounded-xl
${
  bigShoeImg === imgURL.bigShoe
    ? "border-blue-sea dark:border-white"
    : "border-transparent"
} cursor-pointers`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card dark:bg-darkcard bg-center bg-cover sm:w-40 sm:h-40 max-sm:h-36 rounded-xl max-sm:p-4 cursor-pointer">
        <img
          src={imgURL.thumbnail}
          alt="Shoe Collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
