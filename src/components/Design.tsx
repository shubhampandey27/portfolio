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
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <path d="M3 9h18M9 21V9"></path>
        </svg>
      ),
    },
    {
      title: "App Design",
      sub: "Creating seamless and user-friendly mobile experiences.",
      img: "https://framerusercontent.com/images/r82aqmCKLGCrYsgf7mBxugRE.png",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
          <path d="M12 18h.01"></path>
        </svg>
      ),
    },
    {
      title: "Design Systems",
      sub: "Building scalable design systems for consistency and speed.",
      img: "https://framerusercontent.com/images/hUw80NrYyOfmVEj6LRtq92PMFqE.png",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
    },
    {
      title: "Prototyping",
      sub: "Rapid, interactive prototypes for effective and efficient validation.",
      img: "https://framerusercontent.com/images/zH0WaptSjWcVQz0nfZt5B7I0Edk.png",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5M12 2h3.5a3.5 3.5 0 1 1 0 7H12z"></path>
          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5"></path>
        </svg>
      ),
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
            My design specialties
          </p>
          <p className="text-center text-base font-normal leading-[28px]">
            Check out my design specialties below, and feel free to get in
          </p>
          <p className="text-center text-base font-normal leading-[28px]">
            touch if you're interested in collaborating.
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
                svg={item.svg}
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
