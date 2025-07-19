"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowIon from "./icons/ArrowIon";
import LinkedInIcon from "./icons/LinkedInIcon";
import PeerListIcon from "./icons/PeerListIcon";
import FigmaIcon from "./icons/FigmaIcon";
import MailIcon from "./icons/MailIcon";
import CloseIcon from "./icons/CloseIcon";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

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
    <section id="About" className="relative border-b border-borderColor">
      <div className="box">
        <div className="py-[40px] flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between w-full ">
          <div className="max-w-[480px] flex flex-col gap-[10px]">
            <p className="text-PrimaryText font-medium text-sm">
              Hello there! 👋
            </p>
            <p className="text-SecondaryText font-medium text-[32px] lg:text-[29px]">
              This is <span className="text-PrimaryText">Shubham</span>, a
              passionate{" "}
              <span className="text-PrimaryText">Product Designer</span>
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
                onClick={() => setShowModal(true)}
                className="transition-all hover:opacity-[0.8] duration-300 ease-in cursor-pointer flex items-center gap-2 bg-primaryColor h-[42px] px-[20px] text-white text-sm font-medium rounded-lg"
              >
                <span className="pb-[3px]"> About me</span> <ArrowIon />
              </button>
              <button
                type="button"
                onClick={() => handleScroll("Work")}
                className="transition-all hover:border-SecondaryText duration-300 ease-in cursor-pointer flex items-center gap-2 border border-[#e6e6e6] h-[42px] px-[20px] text-sm font-medium rounded-lg"
              >
                <span className="pb-[3px]">See my work</span>{" "}
                <ArrowIon color="black" />
              </button>
            </div>
          </div>

          <div className="flex md:items-center items-start justify-center">
            <Image
              src={"/images/shub-img.png"}
              alt="hero-img"
              height={1000}
              width={1000}
              className="object-contain w-[400px] h-[400px]"
            />
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center "
            style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[10px] shadow-lg w-[390px] lg:w-[700px] p-6 relative"
            >
              <div
                className="absolute top-[20px] right-[20px]"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <CloseIcon size={20} />
              </div>
              <div className="flex items-start flex-col md:flex-row gap-[24px] w-full">
                <div className="flex items-start flex-row md:flex-col gap-[20px]">
                  <img
                    src="/images/modal-img.png"
                    alt="..."
                    className="max-h-[1024px] max-w-[1024px] object-cover rounded-[10px] size-[130px] lg:size-[172px]"
                  />
                  <div className="flex items-start flex-col gap-[20px]">
                    <div className="flex items-center gap-[13px] ">
                      <LinkedInIcon
                        href={" https://www.linkedin.com/in/shubhfolio/"}
                      />
                      <PeerListIcon
                        href={"https://www.behance.net/shubhfolio"}
                      />
                      <FigmaIcon
                        href={"https://www.figma.com/@shubhampandey"}
                      />
                      <MailIcon href={"shubhfolio@gmail.com"} />
                    </div>
                    <div>
                      <p className="text-xs flex items-start gap-2 cursor-pointer">
                        shubhfolio@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex items-start gap-[20px] flex-col">
                  <p className="text-[20px] md:text-[25px] font-medium">
                    About Shubham
                  </p>
                  <div className="flex items-start gap-[20px] flex-col max-h-[350px] overflow-auto leading-[32px]">
                    <p className="text-[15px]">
                      With over 3 years of experience as a Product Designer,
                      I’ve shaped digital products for both startups and
                      established companies.{" "}
                    </p>
                    <p className="text-[15px]">
                      I’ve worked across industries like E-mobility tech,
                      PropTech, and SaaS, gaining a deep understanding of
                      designing for different user needs while ensuring business
                      goals are met. From MVPs to fully operational platforms, I
                      take a data-driven and user-centered approach to every
                      project.
                    </p>
                    <p>
                      In recent years, I’ve helped startups achieve milestones,
                      from building MVPs to launching products that generated
                      millions in revenue and attracted thousands of users.
                      Outside of design, I enjoy exploring new creative tools,
                      discovering inspiration through travel, and sharing my
                      insights with fellow designers through collaborative
                      projects and conversations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
