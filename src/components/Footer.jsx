
import { CircleArrow } from "../assets";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 mb-3 h-full px-5 lg:px-14 mt-[20rem] xl:mt-16  md:mt-14">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="text-white lg:flex-[2] xl:flex-[2]  flex flex-col justify-start gap-3 bg-[#090909] rounded-2xl p-6">
          <h2 className="text-[25px] md:text-3xl lg:text-[27px] leading-8 font-medium ">Crafting Agriculture, For Farmers, By Innovators.</h2>
          <p className="text-sm md:text-base  font-light text-[rgba(255,255,255,0.8)]">
            Join our community of 2000+ passionate cultivators, innovators,
            stewards of excellence, where dedication to innovation, creativity
            and sustainable farming practies flourishes.
          </p>
          <div className="flex z-20 mt-4 items-center pr-2">
            <button className="px-6  bg-white text-black  py-3 border-[1px]  text-sm rounded-full">
              Shop now
            </button>
            <CircleArrow stroke={" "} className={"bg-white rounded-full"} />
          </div>
        </div>

        <div className="bg-[rgba(244,244,244,1)] lg:flex-[3]  xl:flex-[5] xl:flex-row-reverse xl:justify-between xl:items-start rounded-2xl flex flex-col gap-5 p-6">
          <img
            src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1706003885/harvest%20Grove/Frame_18556_nhmutz.svg"
            alt=""
            className="w-40 md:w-48 xl:w-52"
          />
          <div className="flex text-sm items-start xl:gap-20 justify-between md:justify-around ">
            <div className="flex flex-col font-medium gap-4 text-[rgba(9,9,9,0.8)]">
              <h5 className="text-[rgba(9,9,9,0.4)]">Links</h5>
              <p>Explore</p>
              <p>Services</p>
              <p>Individuals</p>
              <p>Business</p>
              <p>Blog</p>
            </div>
            <div className="flex flex-col font-medium  gap-4 text-[rgba(9,9,9,0.8)]">
              <h5 className="text-[rgba(9,9,9,0.4)] ">Community</h5>
              <p>Twitter</p>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>WhatsApp</p>
            </div>
            <div className="flex flex-col font-medium gap-4 text-[rgba(9,9,9,0.8)]">
              <h5 className="text-[rgba(9,9,9,0.4)]">Support</h5>
              <p>FAQs</p>
              <p>Contact</p>
              <p>Help Center</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex justify-between text-xs ">
        <p className="font-normal text-[rgba(9,9,9,1)]">&copy; 2023 HarvestGrove</p>
        <div className="flex items-center gap-1 xl:text-sm xl:gap-2 text-[rgba(9,9,9,0.6)]">
          Privacy Policy
          <span>
            <img
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1706003863/harvest%20Grove/Ellipse_1_1_cvxl7k.svg"
              alt=""
            />
          </span>
          Terms of Use
        </div>
      </footer>
    </div>
  );
};

export default Footer;
