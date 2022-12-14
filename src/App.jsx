import React from "react";
import Button from "./components/Button";
import Info from "./components/Info";
import Interests from "./components/Interests";
import About from "./components/About";
import Footer from "./components/Footer";
import { BsLinkedin } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

export default function App() {
  return (
    <div className="w-full h-full md:flex flex-col  justify-center items-center md:p-12  font-inter  ">
      <main
        className="md:max-w-sm md:rounded-lg bg-[#1A1B21] md:shadow-lg m-auto
"
      >
        <Info>
          <Button
            link="mailto:kaykayyaw@gmail.com"
            value="Email"
            styling="bg-white py-2 px-8 text-[#374151] text-sm shadow-lg rounded-lg font-semibold flex items-center gap-2"
          >
            <FaEnvelope />
          </Button>
          <Button
            link="https://www.linkedin.com/in/yaw-karikari-wiafe-886022223"
            value="LinkedIn"
            styling="bg-[#5093E2] shadow-lg py-2 px-6 text-sm rounded-lg font-semibold text-white flex items-center gap-2"
          >
            <BsLinkedin />
          </Button>
        </Info>
        <About />
        <Interests />
        <Footer />
      </main>
    </div>
  );
}
