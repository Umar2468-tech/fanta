import React from "react";
import Juice from "../assets/Banner/juice.png";
import Splash from "../assets/Banner/splash.png";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const Fanta = () => {
  return (
    <div>
      <div className="bg-white h-[980px] sm:h-[900px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 h-[600px]">
          {/* Image Section */}
          <div className="h-[600px] flex flex-col justify-center items-center sm:items-start relative">
            <motion.img
              src={Splash}
              alt="Splash"
              className="z-0 
                h-[100px] sm:h-[150px] md:h-[250px] lg:h-[350px] xl:h-[400px] 
                top-[57%] sm:top-[15%] md:top-[11%] lg:top-[12%] xl:top-[15%] absolute sm:relative"
              initial={{ opacity: 0, scale: 2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: easeInOut }}
              viewport={{ once: false }}
            />
            <motion.img
              src={Juice}
              alt="Juice"
              className="z-10 
                h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 
                sm:absolute  sm:left-[0%] md:left-[8%] lg:left-[10%] xl:left-[15%] mt-4 sm:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeInOut }}
            />
          </div>

          {/* Text Section */}
          <div className="h-auto flex flex-col justify-center items-center sm:items-start sm:h-[600px]">
            <div className="p-8 md:p-16 lg:p-24 mt-4 sm:mt-6 md:mt-10 lg:mt-12 text-center sm:text-left">
              <motion.h1
                className="text-[24px] md:text-[28px] lg:text-[36px] font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeInOut }}
              >
                Refresh Your World with Fanta
              </motion.h1>
              <motion.p
                className="mt-2 md:mt-4 lg:mt-5 text-sm md:text-base lg:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeInOut }}
              >
                Fanta brings a burst of vibrant flavors and effervescent fun to
                your day! Whether you're looking to quench your thirst with a
                zesty orange, tangy lemon, or one of our many other
                fruit-inspired flavors, Fanta is your go-to drink for a
                refreshing and exciting experience. Dive into the world of Fanta
                and let every sip spark your senses with its bold, bubbly, and
                refreshing taste!
              </motion.p>
              <AnimatePresence mode="wait">
                <motion.button
                  className="px-5 py-2 mt-4 md:px-7 md:py-2 bg-white text-[#CF4F00] rounded-lg border-2 border-[#CF4F00] hover:bg-[#CF4F00] duration-300 hover:text-white"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: easeInOut }}
                >
                  Buy Now
                </motion.button>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Promotional Text */}
        <div className="hidden sm:flex justify-center items-center text-center mx-auto text-white px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="bg-gradient-to-b from-[#FB9955] to-[#F9761B] h-[120px] w-full max-w-4xl rounded-xl md:mt-10 lg:mt-10 xl:mt-10 sm:mt-32">
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl py-4 sm:py-5 md:py-6 lg:py-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ once: false, duration: 0.8, ease: easeInOut }}
            >
              Every sip of Fanta turns up the fun—refresh your day <br />
              with bold flavors and bubbly excitement!
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fanta;
