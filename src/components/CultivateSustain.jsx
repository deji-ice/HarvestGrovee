import { CircleArrow } from "../assets";

const CultivateSustain = () => {
  return (
    <div className="relative px-5 lg:px-14 mt-14  h-full   xl:mt-28">
      <p className="text-[27px] lg:text-[29px] xl:text-[37px] xl:top-0 xl:leading-normal  xl:left-[64px] md:absolute md:text-2xl lg:top-1 lg:left-14 ">
        Cultivating Sustainability <br /> Agriculture
      </p>
      <img
        className=" md:hidden absolute px-5 top-2 left-0 right-0"
        src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1705671111/Subtract_7_ibhkq1.png"
        alt=""
      />
      <img
        className="hidden md:flex xl:w-screen "
        src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1705758215/Subtract_8_wjyib0.png"
        alt=""
      />
      <div className="flex absolute z-20 right-5 bottom-[-15.5rem] justify-end mt-2 lg:bottom-5 xl:bottom-6 lg:right-20 md:bottom-3 md:right-8  items-center pr-2 md:pr-0 h-fit">
        <button className="px-8  bg-white   py-3 border-[1px]  text-sm rounded-full">
          Contact us
        </button>
        <CircleArrow stroke={" "} className={"bg-white rounded-full"} />
      </div>
    </div>
  );
};

export default CultivateSustain;
