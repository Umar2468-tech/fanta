import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track the currently open FAQ

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the open state
  };

  return (
    <div>
      <div className="bg-white h-auto py-12">
        <div className="flex justify-center items-center">
          <h2 className="text-[24px] sm:text-[30px] font-semibold mt-6 sm:mt-12">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="text-center mx-auto mt-10 sm:mt-16 list-none px-4 sm:px-0">
          <div className="space-y-8 sm:space-y-12">
            {[
              "What is Fanta?",
              "What flavors does Fanta offer?",
              "Is Fanta gluten-free?",
              "How many calories are in a can of Fanta?",
            ].map((question, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="flex justify-between items-center cursor-pointer w-full max-w-[300px] sm:max-w-[500px] md:max-w-[650px]"
                  onClick={() => toggle(index)}
                >
                  <li className="text-[18px] sm:text-[20px]">{question}</li>
                  <span className="text-[18px] sm:text-[20px]">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-700 ${
                    openIndex === index ? "max-h-[400px]" : "max-h-0"
                  } w-full max-w-[300px] sm:max-w-[500px] md:max-w-[650px]`}
                >
                  <div className="border-b border-gray-400 mt-4">
                    <p className="mt-2 text-gray-600 text-[14px] sm:text-[16px]">
                      Fanta is a popular fruit-flavored carbonated soft drink
                      created by The Coca-Cola Company.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
