import { useState } from "react";
import { CircleArrow, Hamburger, Logo, LogoSm } from "../assets";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const menuVariants = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="z-30 bg-white md:border-b fixed top-0 w-full px-4 flex justify-between xl:px-14 py-3 items-center">
      <div className="flex gap-16 items-center">
        <div id="Logo " className="flex items-center">
          <span className="hidden md:flex px-1">
            <Logo />
          </span>
          <span className=" md:hidden z-40">
            {" "}
            <LogoSm />
          </span>
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
          <button className="px-8 py-3 border-[1px] border-black  text-sm rounded-full">
            Contact us
          </button>
          <CircleArrow />
        </div>
        <motion.span
          className="z-40 lg:hidden "
          onClick={() => {
            setShow((prev) => !prev);
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Hamburger isOpen={show} />
        </motion.span>
        <AnimatePresence>
          {show && (
            <motion.div
              className="bg-white text-2xl flex flex-col absolute top-0 h-screen gap-5 px-20 py-20 w-[100vw] right-0  lg:hidden"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.p variants={listItemVariants}>Explore</motion.p>
              <motion.p variants={listItemVariants}>Services</motion.p>
              <motion.p variants={listItemVariants}>Individuals</motion.p>
              <motion.p variants={listItemVariants}>Business</motion.p>
              <motion.p variants={listItemVariants}>Blog</motion.p>
              <motion.p variants={listItemVariants}>FAQs</motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavBar;
