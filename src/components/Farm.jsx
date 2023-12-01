import { CircleArrow } from "../assets";

const Farm = () => {
  return (
    <div className="flex flex-col lg:bg-transparent bg-[#F4F4F4] m-4 relative pb-5 lg:mx-10 rounded-2xl w-fit lg:w-full">
      <div className="lg:bg-[#F4F4F4] rounded-3xl lg:flex lg:pr-20  items-end lg:w-fit gap-10">
        <img
          className=" md:h-[28rem] md:rounded-3xl rounded-2xl"
          src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1701429173/harvest%20Grove/countryside-people-out-field-together_1_ivjf3l.png"
        />
        <div className="lg:flex justify-end mt-2 hidden lg:mb-5  items-center pr-2">
          <button className="px-8 py-3 border-[1px] border-black  text-sm rounded-full">
            Contact us
          </button>
          <CircleArrow />
        </div>
      </div>
      <div className="flex gap-5 p-4 w-fit lg:absolute lg:top-5 lg:right-[7%] lg:items-end  lg:mr-8 lg:ml-[38%]  flex-col font-light">
        <p className="text-lg leading-[1.5rem] lg:text-[30px] lg:leading-[1.433] ">
          Our diverse range of crops, from succulent fruits to crisp vegetables,
          showcases the fertile abundance of our land. Every product is
          carefully nurtured, handpicked, and delivered to you at its peak
          freshness.
        </p>
        <p className="text-[13px] pl-6 lg:pl-[170px] text-[#090909CC] lg:text-base  lg:absolute left-10 top-[100%]  ">
          We take pride in our eco-friendly farming practices that prioritize
          soil health and environmental sustainability. From organic fertilizers
          to water-saving techniques, we&apos;re dedicated to nurturing the land that
          feeds us.
        </p>
      </div>
      <div className="flex justify-end mt-2 lg:hidden  items-center pr-2">
        <button className="px-8 py-3 border-[1px] border-black  text-sm rounded-full">
          Contact us
        </button>
        <CircleArrow />
      </div>
    </div>
  );
};

export default Farm;
