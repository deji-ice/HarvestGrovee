import { CircleArrow } from "../assets"

const CultivateSustain = () => {
    return (
        <div className="relative px-5 mt-14">
            <p className="text-[27px]">Cultivating Sustainability <br /> Agriculture</p>
            <img className=" absolute px-5 top-3 left-0 right-0"
             src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1705671111/Subtract_7_ibhkq1.png" alt="" />
            <div className="flex absolute z-20 bottom-[-10rem] justify-end mt-2 lg:hidden  items-center pr-2">
                <button className="px-8 py-3 border-[1px] border-black  text-sm rounded-full">
                    Contact us
                </button>
                <CircleArrow />
            </div>
        </div>
    )
}

export default CultivateSustain