import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg dark:text-white">
          We Provide You
          <span className="text-blue-sea "> Super</span>
          <span className="text-blue-sea"> Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text dark:text-white">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text dark:text-white">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <a href="/" target="_blank">
            <Button label="View Details" />
          </a>
        </div>
      </div>

      <div className="flex bg-card dark:bg-darkcard bg-cover bg-center rounded-full">
        <img
          src={shoe8}
          alt="shoe pic"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
