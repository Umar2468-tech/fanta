import React from "react";
import Fanta1 from "../assets/fanta1.png";
import Fanta2 from "../assets/fanta2.png";
import Fanta3 from "../assets/fanta3.png";
import { motion, AnimatePresence } from "framer-motion";

const Cards = () => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="bg-[#F3F4F6] xl:h-[660px] p-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <h1 className="text-center items-center text-[30px] font-bold">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-auto mt-6">
        {[Fanta1, Fanta2, Fanta3].map((imgSrc, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center mx-auto rounded-lg"
            variants={cardVariants}
          >
            <div className="bg-white w-full max-w-[350px] p-4 flex flex-col justify-center items-center rounded-xl">
              <img
                src={imgSrc}
                alt={`Fanta ${index + 1}`}
                className={`h-[180px] sm:h-[200px] md:h-[220px] hover:scale-110 duration-300 ${
                  index === 1 ? "hover:rotate-[-15deg]" : "hover:rotate-[15deg]"
                } mt-4`}
              />
              <h2 className="font-handwriting mt-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold">
                {index === 0
                  ? "Orange Fanta"
                  : index === 1
                  ? "Zero Cola"
                  : "Coca Cola"}
              </h2>
              <p className="text-center mt-2 text-sm sm:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
                unde repellat sequi, tempora vero cumque eaque placeat nihil
                itaque atque.
              </p>
              <AnimatePresence mode="wait">
                <motion.button className="px-5 py-2 mt-4 sm:px-6 md:px-7 bg-white text-[#CF4F00] rounded-lg border-2 border-[#CF4F00] hover:bg-[#CF4F00] duration-300 hover:text-white">
                  Buy Now
                </motion.button>
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Cards;
