import { Button, ShoeCard } from "../components";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from "../constants";
import { useState } from "react";

const Hero = () => {
  const [bigShowImg, setbigShowImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative flex flex-col justify-center items-start w-full xl:w-2/5 pt-28 max-xl:padding-x">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>
        <h1 className="mt-10 font-bold font-palanquin text-[72px] sm:text-8xl max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap z-10 pr-10 relative">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-8 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 ">
          {statistics.map((stat) => (
            <div key={stat.value + stat.label}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShowImg}
          alt="shoes collection"
          width={610}
          height={500}
          className="object-contain"
        />
        <div className="flex gap-4 sm:gap-6 absolute -bottom-[5%] max-sm:left-[10%]">
          {shoes.map((shoe) => (
            <ShoeCard
              key={shoe}
              imageUrl={shoe}
              changeBigShoeImg={(shoe) => setbigShowImg(shoe)}
              bigShoeImg={bigShowImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
