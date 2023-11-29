import { CircleArrow, Logo, LogoSm } from "../assets"

const NavBar = () => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-20">
                <div id="Logo">
                    <span className="hidden md:flex"><Logo /></span>
                    <span className=" md:hidden"> <LogoSm /></span>
                </div>
                <div className=" flex gap-10">
                    <p>Explore</p>
                    <p>Services</p>
                    <p>Individuals</p>
                    <p>Business</p>
                    <p>Blog</p>
                    <p>FAQs</p>
                </div>
            </div>
            <div className="flex">
                <button>Contact us</button>
                <CircleArrow />
            </div>
        </div>
    )
}

export default NavBar