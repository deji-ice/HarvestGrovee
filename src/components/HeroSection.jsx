const HeroSection = () => {
  return (
    <section className="mt-[135px] lg:max-w-[1150px] xl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto lg:px-4 relative">
      {/* Container with max-width to prevent content from spreading too wide on large screens */}
      <figure className="z-[-10]" aria-hidden="true">
        <img
          loading="eager"
          className="hidden md:flex w-full "
          src="https://res.cloudinary.com/dhvwthnzq/image/upload/f_auto,q_auto,w_1200/v1701270029/harvest%20Grove/Subtract_2_hvy9sk.png"
          alt="background image"
        />
        <img
          loading="eager"
          className="md:hidden"
          src="https://res.cloudinary.com/dhvwthnzq/image/upload/f_auto,q_auto/v1701333624/harvest%20Grove/Subtract_3_j9njmb.png"
          alt="background image"
        />
      </figure>
      <h1 className="lg:text-[56px] text-[2.1rem] min-w-[10rem]  md:text-4xl w-full max-w-[30rem] left-2 md:left-auto leading-[1.2]  absolute md:right-[11%] lg:right-[23%] xl:right-[8%] lg:min-w-[30px] xl:max-w-4xl xl:leading-[1.2] 2xl:right-[12%] md:top-[2%] xl:top-3 2xl:top-6 xl:text-[70px] 2xl:text-7xl pb-5 top-1 lg:top-0">
        Nurturing Nature,
        <br />
        Harvesting Excellence
      </h1>
      <p className="lg:w-[40%] w-[90%] md:w-[46%] leading-[1.5] absolute top-[14%] right-[3%] md:right-[11.8%] xl:right-[13%] 2xl:right-[16%]  md:top-[22%] lg:top-[24%] xl:top-[13.5rem] 2xl:top-56 2xl:text-xl xl:w-full xl:max-w-[38rem]  2xl:max-w-[38rem] font-light text-[#090909d7] pr-1 text-[13px] lg:text-base">
        At HarvestGrove, we are passionate about agriculture and committed to
        providing the highest quality produce and services to our customers.
        With a legacy of farming excellence spanning 10 years,
      </p>
      {/* happy customers */}
      <aside className="z-10 absolute right-16 top-[27%] md:right-[12%] lg:right-[21%] xl:right-[25%] lg:top-[43%] xl:top-[45%] md:top-[43%] flex pr-1 md:pr-4 justify-center items-center py-1 md:py-0 lg:py-1 px-1 md:px-2  gap-2 md:gap-4 bg-[#09090905] rounded-full border border-[#e8e8e8cc] w-fit">
        <img
          className="h-9 md:h-10 lg:h-10"
          src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1701272160/harvest%20Grove/Group_6095_cmmfnc.png"
          alt="happy customers"
        />
        <div className="flex flex-col pr-1 md:py-1">
          <p className="text-base md:text-xl lg:text-2xl xl:text-3xl font-normal">
            200k
          </p>
          <p className="text-[#090909CC] text-xs md:text-[13px] font-light">
            Happy Customers
          </p>
        </div>
      </aside>
      <figure aria-hidden="true">
        <img
          className="absolute w-48 md:w-full md:max-w-[195px] xl:max-w-[20rem] bottom-48 md:bottom-[15%]  left-5 md:left-12"
          src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1701273578/harvest%20Grove/Frame_3_hyi3yn.png"
          alt="decorative image"
        />
      </figure>
      <figure aria-hidden="true">
        <img
          className="absolute bottom-20 md:bottom-[10%] 2xl:bottom-[12%] h-14 md:h-16 left-[4%] md:left-[38%]"
          src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1701273576/harvest%20Grove/Group_6089_i15nhr.png"
          alt="decorative image"
        />
      </figure>
      <figure aria-hidden="true">
        <img
          className="absolute bottom-[41%] md:bottom-[20%] xl:bottom-[28%] 2xl:bottom-[27%] h-14 md:h-16 right-[6%] md:right-[17%]"
          src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1701273574/harvest%20Grove/Group_6090_m5umhp.png"
          alt="decorative image"
        />
      </figure>{" "}
    </section>
  );
};

export default HeroSection;
