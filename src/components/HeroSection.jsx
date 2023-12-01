const HeroSection = () => {
  return (
    <div className="mt-[135px] lg:px-4 relative">
      <div className="z-[-10]">
        <img
          className="hidden md:flex"
          src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1701270029/harvest%20Grove/Subtract_2_hvy9sk.png"
        />
        <img
          className="md:hidden"
          src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1701333624/harvest%20Grove/Subtract_3_j9njmb.png"
        />
      </div>
      <h2 className="lg:text-[70px] text-[2.1em] w-fit leading-[1.2] absolute right-[8.5%] lg:right-[21.5%] pr-0.5 pb-5  top-1 lg:top-0">
        Nurturing Nature,
        <br />
        Harvesting Excellence
      </h2>
      <p className=" lg:w-[45%] w-[90%]  leading-[1.5] absolute top-[98px] right-[3%] md:right-[12%] font-light md:top-[194px] text-[#090909CC] pr-1 text-[13px] lg:text-base ">
        At HarvestGrove, we are passionate about agriculture and committed to
        providing the highest quality produce and services to our customers.
        With a legacy of farming excellence spanning 10 years,
      </p>
      <div className=" z-10 absolute right-[13.5%] md:right-[22.5%] top-[26.6%] md:top-[355px] flex  pr-1 md:pr-4 justify-center items-center py-1 px-1 md:px-2 gap-2 md:gap-4 bg-[#09090905] rounded-full border border-[#e8e8e8cc] w-fit">
        <img
          className="h-9 md:h-14"
          src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1701272160/harvest%20Grove/Group_6095_cmmfnc.png"
        />
        <div className="flex flex-col pr-1 md:py-1">
          <p className="text-base md:text-3xl font-normal">200k</p>
          <p className="text-[#090909CC]  text-xs md:text-[13px] font-light">
            Happy Customers
          </p>
        </div>
      </div>

      <img
        className=" absolute w-48 md:w-[295px] bottom-48 md:bottom-[158px] left-5 md:left-16"
        src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1701273578/harvest%20Grove/Frame_3_hyi3yn.png"
      />
      <img
        className="absolute  bottom-20 md:bottom-[125px] h-14 md:h-16 left-[4%] md:left-[38%] "
        src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1701273576/harvest%20Grove/Group_6089_i15nhr.png"
      />
      <img
        className="absolute bottom-16 md:bottom-[165px] h-14 md:h-16 right-[6%] md:right-[17%]"
        src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1701273574/harvest%20Grove/Group_6090_m5umhp.png"
      />
    </div>
  );
};

export default HeroSection;
