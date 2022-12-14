import React from "react";

import { FaTwitterSquare } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="rounded-b-lg flex gap-4 px-8 justify-center items-center py-5 bg-[#161619]">
      <a href="https://twitter.com/stealyear">
        <FaTwitterSquare className="w-11 h-11 text-[#918E9B]" />
      </a>
      <a href="https://web.facebook.com/profile.php?id=100010104995403">
        <GrFacebook className="w-10 h-10  text-[#918E9B]" />
      </a>
      <a href="https://instragram.com/double_kari">
        <BsInstagram className="w-10 h-10 text-[#918E9B]" />
      </a>
      <a href="https://github.com/doubleKari">
        <FaGithubSquare className="w-11 h-11 text-[#918E9B]" />
      </a>
    </footer>
  );
};

export default Footer;
