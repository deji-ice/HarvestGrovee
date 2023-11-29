
const HeroSection = () => {
    return (
        <div className="mt-[135px] px-4 relative">
            <div className="z-[-10]"><img src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1701270029/harvest%20Grove/Subtract_2_hvy9sk.png" /></div>
            <h2 className="text-[70px] bg- leading-[1.2]    absolute right-[21.5%] pr-0.5 pb-5 top-0">Nurturing Nature,<br />
                Harvesting Excellence</h2>
            <p className="w-[45%] absolute right-[12%] font-light top-[194px] text-[#090909CC] pr-1 text-base ">
                At HarvestGrove, we are passionate about agriculture and committed to providing the highest quality produce and services to our customers. With a legacy of farming excellence spanning 10 years,
            </p>
            <div className=" z-10 absolute right-[22.5%] top-[355px] flex  pr-4 justify-center items-center py-1 px-2 gap-4 bg-[#09090905] rounded-full border border-[#c4c3c3cc] w-fit">
                <img className=" h-14" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1701272160/harvest%20Grove/Group_6095_cmmfnc.png" />
                <div className="flex flex-col pr-1 py-1">
                    <p className="text-3xl font-normal">200k</p>
                    <p className="text-[#090909CC] text-[13px] font-light">Happy Customers</p>
                </div>
            </div>

            <img className="absolute w-[295px] bottom-[158px] left-16" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1701273578/harvest%20Grove/Frame_3_hyi3yn.png" />
            <img className="absolute bottom-[125px] h-16 left-[38%] " src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1701273576/harvest%20Grove/Group_6089_i15nhr.png" />
            <img className="absolute bottom-[165px] h-16 right-[17%]" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1701273574/harvest%20Grove/Group_6090_m5umhp.png" />
        </div>
    )
}

export default HeroSection