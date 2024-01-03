import { CircleArrow } from "../assets";

const Cultivate = () => {
  return (
    <div className=" px-5 lg:px-14 flex flex-col gap-10 overflow-x-hidden">
      <div className="flex flex-col items-start ">
        <h2 className="text-[32px] leading-[54px] text-start">
          Cultivating a Future
          <br />{" "}
          <span className="">
            <img
              className="inline-block h-16"
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1701961192/Frame_289413_vjirmv.png"
              alt=""
            />
          </span>{" "}
          of Agriculture
          <br /> Sustainability
        </h2>
        <p className="text-[13px] text-[#090909CC]">
          Our diverse range of crops, from succulent fruits to crisp vegetables,
          showcases the fertile abundance of our land. Every product is
          carefully nurtured, handpicked, and delivered to you at its peak
          freshness.
        </p>
      </div>

      <div className="relative flex flex-col">
        <div className="relative">
          <img
            className="z--10 h-[13rem]"
            src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1702992158/harvest%20Grove/Subtract_4_ct1ces.png"
          />
          <h2 className="text-2xl text-right font-medium text-[#090909CC] absolute bottom-4 left-4 opacity-80">
            Healthy
            <br />
            <span className="">
              <img
                className="inline-block"
                src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1702993207/harvest%20Grove/Group_6089_va5340.svg"
                alt=""
              />
            </span>
            Agro
            <br /> Products
          </h2>
          <div className="absolute flex flex-col gap-2 top-5 right-3 items-end">
            <button className="border text-xs w-fit border-gray-300 px-3 py-2 rounded-full">
              Swift Delivery
            </button>
            <button className="border text-xs w-fit border-gray-300 px-6 py-2 rounded-full">
              Swift Delivery
            </button>
            <button className="border text-xs w-fit border-gray-300 px-7 py-2 rounded-full">
              24/7 Customer Service
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="flex gap-3 mt-3 flex-col">
            <span className="border text-xs w-fit border-gray-300 px-3 py-2 rounded-full">
              24/7 Customer Service
            </span>
            <span className="border text-xs w-fit border-gray-300 px-3 py-2 rounded-full">
              24/7 Customer Service
            </span>
          </div>
        </div>
        <img
          className="h-[120px]  absolute right-0 bottom-2"
          src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1702994889/harvest%20Grove/Frame_289413_1_nsivtq.png"
          alt=""
        />
      </div>
      <div className="relative">
      <div className="flex items-center absolute top-[-5px] right-0">
          <button className="px-6 py-2 border-[1px] border-black  text-sm rounded-full">
            Shop Now
          </button>
          <CircleArrow  className={"w-10"}/>
        </div>
        <img
          src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1703244281/harvest%20Grove/Subtract_5_oajvng.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Cultivate;
