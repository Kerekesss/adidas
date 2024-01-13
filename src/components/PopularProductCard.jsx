import { star } from "../assets/icons";
const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <a href="/" target="_blank">
      <div className="flex flex-1 flex-col w-full max-sm:w-full hover:scale-110 transition-all">
        <div className="rounded-2xl max-w-[270px] max-h-[270px] bg-card dark:bg-darkcard bg-center bg-cover shadow-2xl shadow-blue-300 dark:shadow-slate-gray dark:shadow-3xl flex justify-center ">
          <img src={imgURL} alt={name} className="w-[250px] h-[250px]  " />
        </div>
        <div className="mt-8 flex justify-start gap-2.5">
          <img src={star} alt="rating" width={24} className="scale-x-125 " />
          <p className="font-montserrat text-xl leading-normal text-slate-gray dark:text-white">
            (4.5)
          </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-blue-sea text-2xl leading-normal">
          {price}
        </p>
      </div>
    </a>
  );
};

export default PopularProductCard;
