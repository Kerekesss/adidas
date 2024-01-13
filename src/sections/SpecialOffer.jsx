import { arrowRight } from "../assets/icons";
import { offer, sale } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex  justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className=" flex-1 relative">
        <img
          src={sale}
          width={200}
          className="absolute left-[300px]  bottom-0"
        />
        <img
          src={offer}
          width={450}
          height={450}
          className="object-contain rounded-full bg-blue-100 dark:bg-gray-900 shadow-2xl dark:shadow-white shadow-blue-sea  "
        />
      </div>
      <div className=" flex-1  flex-col ">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg dark:text-white">
          <span className="text-blue-sea"> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text dark:text-white">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text dark:text-white">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <a href="/" target="_blank">
            <Button label="Shop now" iconURL={arrowRight} />
          </a>
          <a href="/" target="_blank">
            <Button
              label="Learn more"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
