import { CircleArrow } from "../assets";

const Cultivate = () => {
  return (
    <div className=" px-5 lg:px-14 flex flex-col  gap-10 xl:gap-16 overflow-x-hidden">
      <div className="flex flex-col  md:flex-row items-start md:items-center md:justify-between  ">
        <h2 className="text-[32px] xl:text-4xl leading-[54px] md:leading-10 lg:leading-[54px] text-start">
          Cultivating a Future
          <br />{" "}
          <span className="">
            <img
              className="inline-block h-16 md:h-12 xl:h-16"
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1701961192/Frame_289413_vjirmv.png"
              alt=""
            />
          </span>{" "}
          of Agriculture
          <br /> Sustainability
        </h2>
        <p className="text-[13px] md:text-base md:w-[21rem] xl:w-[35%] md:text-end text-[#090909CC]">
          Our diverse range of crops, from succulent fruits to crisp vegetables,
          showcases the fertile abundance of our land. Every product is
          carefully nurtured, handpicked, and delivered to you at its peak
          freshness.
        </p>
      </div>
      <div className="flex flex-col xl:justify-between gap-10 md:flex-row md:gap-4 xl:gap-8">
        <div className="relative flex flex-col">
          <div className="relative">
            <img
              className="z--10 h-[13rem] xl:h-[17rem] "
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1702992158/harvest%20Grove/Subtract_4_ct1ces.png"
            />
            <h2 className="text-2xl xl:text-4xl xl:font-medium xl:leading-normal text-right font-medium text-[#090909CC] absolute bottom-4 left-4 xl:bottom-6 xl:left-9 opacity-80">
              Healthy
              <br />
              <span className="">
                <img
                  className="inline-block xl:h-14 mr-3"
                  src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1702993207/harvest%20Grove/Group_6089_va5340.svg"
                  alt=""
                />
              </span>
              Agro
              <br /> Products
            </h2>
            <div className="absolute flex flex-col gap-2 top-5 right-3 xl:right-5 items-end">
              <button className="border xl:text-sm xl:px-5 xl:py-3 text-xs w-fit border-gray-300 px-3 py-2 rounded-full">
                Swift Delivery
              </button>
              <button className="border xl:text-sm xl:px-14 xl:py-3 text-xs w-fit border-gray-300 px-6 py-2 rounded-full">
                Swift Delivery
              </button>
              <button className="border xl:text-sm xl:px-14 xl:py-3 text-xs w-fit border-gray-300 px-7 py-2 rounded-full">
                24/7 Customer Service
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="flex gap-3 xl:gap-5 mt-3 xl:mt-5 flex-col">
              <span className="border text-xs w-fit xl:text-sm xl:px-10 xl:py-3 border-gray-300 px-3 py-2 rounded-full">
                24/7 Customer Service
              </span>
              <span className="border text-xs w-fit xl:text-sm xl:px-10 xl:py-3 border-gray-300 px-3 py-2 rounded-full">
                24/7 Customer Service
              </span>
            </div>
          </div>
          <img
            className="h-[120px] xl:hidden absolute right-0 bottom-2"
            src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1702994889/harvest%20Grove/Frame_289413_1_nsivtq.png"
            alt=""
          />
                  <img
            className="hidden xl:flex xl:h-[170px] absolute right-[-16px] bottom-0"
            src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1705670190/Frame_289413_2_p8wxqq.png"
            alt=""
          />
        </div>
        <div className="relative">
          <div className="flex items-center absolute top-[-5px] right-0">
            <button className="px-6 py-2 border-[1px] border-black  text-sm rounded-full">
              Shop Now
            </button>
            <CircleArrow className={"w-10"} />
          </div>
          <img
          className="md:h-80 md:w-[29rem] xl:hidden"
            src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1703244281/harvest%20Grove/Subtract_5_oajvng.png"
            alt=""
          />
          <img src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1705667102/Subtract_6_tmyeil.png" alt=""
          className="hidden xl:flex xl:h-[25rem]" />
        </div>
      </div>
    </div>
  );
};

export default Cultivate;
