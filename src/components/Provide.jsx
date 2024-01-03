import { CircleArrow } from "../assets";
import { arrayOfObjects } from "../assets/data";

const Provide = () => {
  return (
    <div className="my-20 flex flex-col gap-10 px-5 lg:px-10 lg:overflow-x-hidden">
      <div className="flex gap-4  md:px-4 flex-col md:flex-row md:justify-between lg:items-center">
        <h2 className="text-3xl md:flex-[2]  lg:text-[38px] leading-[1.30]">
          We Provide <br />
          Fresh Agro Product
        </h2>
        <div className="md:flex-[2] lg:flex-[1]  flex flex-col gap-5 md:items-end lg:items-start">
          <p className="text-[13px] lg:text-base text-[#090909CC] font-light">
            Over the years, our commitment to sustainable farming methods and
            innovation has allowed us to grow into the trusted agricultural hub
            we are today.
          </p>
          <div className="flex  items-center pr-2">
            <button className="px-7 py-3 border-[1px] border-black  text-sm rounded-full">
              Shop now
            </button>
            <CircleArrow />
          </div>
        </div>
      </div>
      <div className=" flex gap-5  overflow-x-scroll no-scrollbar lg:overflow-x-hidden">
        <div className="flex gap-4 lg:px-4 lg:py-5 lg:gap-5 ">
        {arrayOfObjects?.map((items) => (
          
          <div className="bg-[#F4F4F4] gap-4 rounded-2xl lg:rounded-3xl w-[80vw] md:w-[60vw] lg:w-fit flex flex-col p-4" key={items.title}>
            <img className="w-fit rounded-lg lg:rounded-2xl" src={items.image} alt={items.title} />
            <div className="flex flex-col gap-1">
              <h3 className="text-xl md:font-normal">{items.title}</h3>
              <p className="text-[13px] md:text-base text-[#090909CC] lg:font-light ">{items.description}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Provide;
