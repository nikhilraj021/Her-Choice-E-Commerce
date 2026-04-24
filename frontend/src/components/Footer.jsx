import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {

    const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img src={assets.logo_2} alt="footer logo" className="mb-5 w-32" />
          <p className="text-gray-500">
            Her Choice brings you trend-forward styles, quality pieces, and
            everyday elegance designed for confidence and comfort.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>VR COMPLEX, Beside RK Complex</li>
              <li>Opposite City Men Fashion</li>
              <li>Armoor, Telangana, 503224</li>
              <li>Email: info@herchoice.com</li>
              <li>Phone:+91 7097892271</li>
            </ul>
          </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">© {currentYear} Her Choice. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
