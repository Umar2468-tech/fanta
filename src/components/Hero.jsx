import React, { useState } from "react";
import Fanta1 from "../assets/fanta1.png";
import Fanta2 from "../assets/fanta2.png";
import Fanta3 from "../assets/fanta3.png";
import Navbar from "./Navbar";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const Hero = () => {
  const SlideRight = (delay) => {
    return {
      hidden: {
        x: 100,
        opacity: 0,
      },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
          ease: easeInOut,
        },
      },
      exit: {
        x: -50,
        opacity: 0,
        transition: {
          delay: delay,
          duration: 0.2,
          ease: easeInOut,
        },
      },
    };
  };

  const Data = [
    {
      id: 1,
      img: Fanta1,
      title: "Orange Fanta",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. voluptates aliquid totam recusandae ullam est mollitia ex obcaecati alias molestiae ipsum?  ",
      price: "200$",
      modal: "orange",
      bgcolor: "#cf4f00",
    },
    {
      id: 2,
      img: Fanta2,
      title: "Cola Zero",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. voluptates aliquid totam recusandae ullam est mollitia ex obcaecati alias molestiae ipsum? ",
      price: "200$",
      modal: "Zero",
      bgcolor: "#727272",
    },
    {
      id: 3,
      img: Fanta3,
      title: "Coca Cola",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. voluptates aliquid totam recusandae ullam est mollitia ex obcaecati alias molestiae ipsum? ",
      price: "200$",
      modal: "Cock",
      bgcolor: "#ac1a00",
    },
  ];

  const [activedata, setActiveData] = useState(Data[0]);

  const HandleData = (data) => {
    setActiveData(data);
  };

  return (
    <motion.div
      initial={{ backgroundColor: activedata.bgcolor }}
      animate={{ backgroundColor: activedata.bgcolor }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />

      <div className="container xl:h-[700px] md:flex md:flex-row flex-col-reverse">
        {/* Hero Image */}
        <div className="relative md:order-2 md:flex-shrink-0 md:flex-grow md:flex md:justify-end flex justify-center mt-14">
          <img
            src={activedata.img}
            alt=""
            className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center items-center py-6 xl:py-14 md:py-0 xl:max-w-[640px] order-1">
          <div>
            <AnimatePresence mode="wait">
              <motion.h1
                key={activedata.id}
                variants={SlideRight(0.2)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-3xl lg:text-6xl xl:text-[72px] font-handwriting text-shadow font-bold text-white"
              >
                {activedata.title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={activedata.id}
                variants={SlideRight(0.2)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-sm mt-4 leading-loose text-white/80"
              >
                {activedata.des}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.button
                key={activedata.id}
                variants={SlideRight(0.2)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="px-4 py-2 mt-4 bg-white text-black rounded-lg"
              >
                Order Now
              </motion.button>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
              className="flex items-center mt-7"
            >
              <hr className="border-t  w-[15%]" />
              <span className="mx-4">
                <h3 className="text-center text-white uppercase">
                  Top Recommendation
                </h3>
              </span>
              <hr className="border-t  w-[30%]" />
            </motion.div>

            {/* Smaller Images Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
              className="grid grid-cols-3 gap-10 p-5"
            >
              {Data.map((items) => (
                <div
                  key={items.id}
                  onClick={() => HandleData(items)}
                  className="space-y-5 cursor-pointer hover:scale-110 transition-all duration-500"
                >
                  <div className="flex justify-center">
                    <img
                      src={items.img}
                      alt=""
                      className={`w-[80px] img-shadow ${
                        activedata.img === items.img
                          ? "opacity-100 scale-110"
                          : "opacity-50"
                      }`}
                    />
                  </div>
                  <div className="text-center text-white">
                    <p className="text-base line-through opacity-50">
                      {items.price}
                    </p>
                    <p className="text-lg">{items.price}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Modal Background Text */}
        <div
          className="text-white/5 font-poppins font-extrabold absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/3
    sm:-translate-y-1/3 md:-translate-y-1/3 lg:-translate-y-1/3 xl:-translate-y-1/3
    text-[100px] sm:text-[140px] md:text-[180px] lg:text-[220px] xl:text-[260px] 2xl:text-[300px]
    max-w-full overflow-hidden mt-10 sm:mt-7 md:mt-6 lg:mt-5 xl:mt-4"
        >
          {activedata.modal}
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
