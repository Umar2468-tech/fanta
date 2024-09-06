import React from "react";
import Blog1 from "../assets/Blogs/1.jpg";
import Blog2 from "../assets/Blogs/2.jpg";
import Blog3 from "../assets/Blogs/3.jpg";
import Blog4 from "../assets/Blogs/4.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Reuse = () => {
  const { ref: cardRef1, inView: inView1 } = useInView({ triggerOnce: false });
  const { ref: cardRef2, inView: inView2 } = useInView({ triggerOnce: false });
  const { ref: cardRef3, inView: inView3 } = useInView({ triggerOnce: false });
  const { ref: cardRef4, inView: inView4 } = useInView({ triggerOnce: false });

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 h-auto mt-6">
        <motion.div
          ref={cardRef1}
          variants={cardVariants}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          className="flex justify-center items-center mx-auto rounded-lg"
        >
          <div className="bg-white w-full max-w-[350px] p-4 flex flex-col justify-center items-center rounded-xl">
            <img
              src={Blog1}
              alt="Orange Fanta"
              className="h-[180px] sm:h-[200px] md:h-[220px] hover:scale-110 duration-300 mt-4 rounded-lg"
            />
            <h2 className="font-handwriting mt-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold">
              Lorem, ipsum dolor sit
            </h2>
            <p className="text-center mt-2 text-sm sm:text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              unde repellat sequi, tempora vero cumque eaque placeat nihil
              itaque atque.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={cardRef2}
          variants={cardVariants}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          className="flex justify-center items-center mx-auto rounded-lg"
        >
          <div className="bg-white w-full max-w-[350px] p-4 flex flex-col justify-center items-center rounded-xl">
            <img
              src={Blog2}
              alt="Zero Cola"
              className="h-[180px] sm:h-[200px] md:h-[220px] hover:scale-110 duration-300 mt-4"
            />
            <h2 className="font-handwriting mt-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold">
              Zero Cola
            </h2>
            <p className="text-center mt-2 text-sm sm:text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              unde repellat sequi, tempora vero cumque eaque placeat nihil
              itaque atque.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={cardRef3}
          variants={cardVariants}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          className="flex justify-center items-center mx-auto rounded-lg"
        >
          <div className="bg-white w-full max-w-[350px] p-4 flex flex-col justify-center items-center rounded-xl">
            <img
              src={Blog3}
              alt="Coca Cola"
              className="h-[180px] sm:h-[200px] md:h-[220px] hover:scale-110 duration-300 mt-4"
            />
            <h2 className="font-handwriting mt-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold">
              Coca Cola
            </h2>
            <p className="text-center mt-2 text-sm sm:text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              unde repellat sequi, tempora vero cumque eaque placeat nihil
              itaque atque.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={cardRef4}
          variants={cardVariants}
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          className="flex justify-center items-center mx-auto rounded-lg"
        >
          <div className="bg-white w-full max-w-[350px] p-4 flex flex-col justify-center items-center rounded-xl">
            <img
              src={Blog4}
              alt="Orange Fanta"
              className="h-[180px] sm:h-[200px] md:h-[220px] hover:scale-110 duration-300 mt-4"
            />
            <h2 className="font-handwriting mt-4 text-[20px] sm:text-[22px] md:text-[24px] font-bold">
              Orange Fanta
            </h2>
            <p className="text-center mt-2 text-sm sm:text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              unde repellat sequi, tempora vero cumque eaque placeat nihil
              itaque atque.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reuse;
