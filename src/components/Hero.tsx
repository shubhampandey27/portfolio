"use client";

import Image from "next/image";
import React from "react";
import ArrowIon from "./icons/ArrowIon";

const Hero = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 60;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };
  return (
    <section id="About" className=" border-b border-borderColor">
      <div className="box">
        <div className="py-[60px] flex flex-col lg:flex-row gap-10 lg:gap-0 items-start justify-between w-full ">
          <div className="max-w-[480px] flex flex-col gap-[10px]">
            <p className="text-PrimaryText font-medium text-sm">
              Hello there! 👋
            </p>
            <p className="text-SecondaryText font-medium text-[32px] lg:text-[29px]">
              This is <span className="text-PrimaryText">Shubham</span>, a
              passionate{" "}
              <span className="text-PrimaryText">Product Designer</span>{" "}
            </p>
            <p className="font-normal text-[15px] lg:text-base leading-[32px] ">
              I’m a passionate product designer with over 3 years of experience
              crafting clean, user-friendly designs across platforms. I focus on
              delivering high-quality solutions that meet unique user and
              business needs.
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="transition-all hover:opacity-[0.8] duration-300 ease-in cursor-pointer flex items-center gap-2 bg-primaryColor h-[42px] px-[20px] text-white text-sm font-medium rounded-lg"
              >
                <span className="pb-[3px]"> About me</span> <ArrowIon />
              </button>
              <button
                type="button"
                onClick={() => {
                  handleScroll("Work");
                }}
                className="transition-all hover:border-SecondaryText duration-300 ease-in cursor-pointer  flex items-center gap-2 border border-[#e6e6e6] h-[42px] px-[20px]  text-sm font-medium rounded-lg"
              >
                <span className="pb-[3px]">See my work</span>{" "}
                <ArrowIon color="black" />
              </button>
            </div>
          </div>
          {/*  */}
          <div className="flex md:items-center items-start justify-center">
            <Image
              src={"/images/shub-img.png"}
              alt="hero-img"
              height={1000}
              width={1000}
              className="w-[392px] h-[416px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
