"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Accordion from "./accordian";

const Design = () => {
  const [expanded, setExpanded] = useState<number | false>(0);

  const data = [
    {
      title: "Web design",
      sub: "Modern and responsive web interfaces tailored for users needs.",
      img: "https://framerusercontent.com/images/kxGKehTG3XUXhQ0CoKC1BmO04.png",
    },
    {
      title: "App Design",
      sub: "Creating seamless and user-friendly mobile experiences.",
      img: "https://framerusercontent.com/images/r82aqmCKLGCrYsgf7mBxugRE.png",
    },
    {
      title: "Design Systems",
      sub: "Building scalable design systems for consistency and speed.",
      img: "https://framerusercontent.com/images/hUw80NrYyOfmVEj6LRtq92PMFqE.png",
    },
    {
      title: "Prototyping",
      sub: "Rapid, interactive prototypes for effective and efficient validation.",
      img: "https://framerusercontent.com/images/zH0WaptSjWcVQz0nfZt5B7I0Edk.png",
    },
  ];

  return (
    <section
      id="Specialties"
      className="border-b border-borderColor py-[100px] overflow-hidden bg-[#FCFCFC]"
    >
      <div className="box">
        <div className="mb-10 box">
          <p className="text-center text-[36px] font-medium">
            My approach to design
          </p>
          <p className="text-center text-base font-normal leading-[28px]">
            There are key design philosophies that I hold dear, guiding my
            approach to every project. I believe in the power of working
          </p>
          <p className="text-center text-base font-normal leading-[28px]">
            both smart and hard to achieve excellence.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="w-full lg:w-[45%]">
            {data.map((item, i) => (
              <Accordion
                key={i}
                i={i}
                expanded={expanded}
                setExpanded={setExpanded}
                title={item.title}
                description={item.sub}
              />
            ))}
          </div>
          <div className="w-full lg:w-[55%]">
            {data.map((item, i) => (
              <motion.img
                key={i}
                src={item.img}
                alt={`Image for ${item.title}`}
                initial={false}
                animate={{
                  opacity: expanded === i ? 1 : 0,
                  y: expanded === i ? 0 : 40,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`object-contain ${
                  expanded === i ? "block" : "hidden"
                } w-full h-[374px] rounded-[10px]`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
