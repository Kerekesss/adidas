import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold dark:text-white">
        Sign Up for
        <span className="text-blue-sea"> Updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%]  w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full dark:border-white">
        <input
          type="text"
          placeholder="subscribe@adidas.com"
          className="input"
          name="email"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <a href="/" target="_blank" className="w-full">
            <Button label="Sign Up" fullWidth />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
