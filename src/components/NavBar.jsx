import { useState } from "react"
import { CircleArrow, Hamburger, Logo, LogoSm } from "../assets"

const NavBar = () => {

    const [show, setShow] = useState(false)


    return (
        <div className="z-30 bg-white md:border-b fixed top-0 w-screen px-4 flex justify-between xl:px-14 py-3 items-center">
            <div className="flex gap-16 items-center">
                <div id="Logo " className="flex items-center">
                    <span className="hidden md:flex px-1"><Logo /></span>
                    <span className=" md:hidden z-40"> <LogoSm /></span>
                </div>
                <div className=" hidden lg:flex font-light items-center text-sm text-[#090909CC] gap-5">
                    <p>Explore</p>
                    <p>Services</p>
                    <p>Individuals</p>
                    <p>Business</p>
                    <p>Blog</p>
                    <p>FAQs</p>
                </div>
            </div>
            <div className="flex items-center relative">
                <div className="flex  items-center pr-2">
                    <button className="px-8 py-3 border-[1px] border-black  text-sm rounded-full">Contact us</button>
                    <CircleArrow />
                </div>
                <span className="z-40 lg:hidden " onClick={() => { setShow(prev => !prev) }}>
                    {
                        show ? <Hamburger /> : <Hamburger />
                    }

                </span>
                {
                    show && <div className="bg-white text-2xl flex flex-col absolute top-0 h-screen gap-5 px-20 py-20 w-[100vw] right-0  lg:hidden">  <p>Explore</p>
                        <p>Services</p>
                        <p>Individuals</p>
                        <p>Business</p>
                        <p>Blog</p>
                        <p>FAQs</p>
                    </div>
                }

            </div>
        </div>
    )
}

export default NavBar