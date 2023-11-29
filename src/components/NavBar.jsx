import { CircleArrow, Logo, LogoSm } from "../assets"

const NavBar = () => {
    return (
        <div className="flex justify-between px-16 py-3 items-center">
            <div className="flex gap-16 items-center">
                <div id="Logo " className="flex items-center">
                    <span className="hidden md:flex"><Logo /></span>
                    <span className=" md:hidden"> <LogoSm /></span>
                </div>
                <div className=" flex font-normal items-center text-sm text-[#090909] gap-5">
                    <p>Explore</p>
                    <p>Services</p>
                    <p>Individuals</p>
                    <p>Business</p>
                    <p>Blog</p>
                    <p>FAQs</p>
                </div>
            </div>
            <div className="flex items-center">
                <button className="px-8 py-3 border border-black rounded-full">Contact us</button>
                <CircleArrow />
            </div>
        </div>
    )
}

export default NavBar