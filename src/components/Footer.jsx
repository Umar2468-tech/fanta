import React from "react";
import Logo from "../assets/logo.png";
import { IoMdCall } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import CreditCards from "../assets/credit-cards.webp";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#F97316] h-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-2 border-black">
          <div className="border-2 border-black text-white p-6 sm:p-8 lg:p-12">
            <img src={Logo} alt="" className="h-[80px] sm:h-[100px] mb-4" />
            <div className="flex items-center gap-2 mb-4">
              <IoMdCall size={30} />
              <span>+92322-4212134</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkedAlt size={30} />
              <span>Lahore, Punjab, Pakistan</span>
            </div>
          </div>
          <div className="border-2 border-black text-white p-6 sm:p-8 lg:p-12">
            <h2 className="text-center text-[24px] sm:text-[30px] font-handwriting font-semibold mb-4">
              Quick Links
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 lg:gap-12">
              <ul className="text-[16px] sm:text-[18px] space-y-2 sm:space-y-4">
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
              <ul className="text-[16px] sm:text-[18px] space-y-2 sm:space-y-4">
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-2 border-black text-white p-6 sm:p-8 lg:p-12">
            <h2 className="text-center text-[24px] sm:text-[30px] font-handwriting font-semibold mb-4">
              Follow Me
            </h2>
            <div className="flex justify-center sm:justify-start gap-4 sm:gap-6 lg:gap-8">
              <a
                href="https://github.com/Umar2468-tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-umar-630083257/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={30} />
              </a>
              <a
                href="https://www.youtube.com/@jigsawgaming8677"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={30} />
              </a>
              <a
                href="https://www.instagram.com/m._.umar._.3568/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoInstagram size={30} />
              </a>
            </div>
            <div className="font-normal mt-8 text-center">
              <h2 className="font-semibold mb-4">Payment Method</h2>
              <img src={CreditCards} alt="Credit Cards" className="mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
