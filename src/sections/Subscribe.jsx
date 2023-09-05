import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>

      <div className="flex max-sm:flex-col items-center w-full lg:w-[40%] p-2.5 gap-5 sm:border sm:border-slate-gray rounded-full">
        <input placeholder="subscribe@nike.com" className="input" />
        <div className="flex items-center max-sm:justify-end max-sm:w-full">
          <Button label="Sign Up" fulWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
