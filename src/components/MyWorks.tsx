"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const MyWorks = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isHoveringItem, setIsHoveringItem] = useState<boolean>(false);
  const router = useRouter();

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const data = [
    {
      title: "Structuring the Premium Upgrade Path for GREL's Driver Partners ",
      description: "Redesigning the premium onboarding experience.",
      image: "/images/work-1.png",
    },
    {
      title: "Narra - Content Management for Video Streaming Platform",
      description: "A CMS to manage video series and user content.",
      image: "/images/work-2.png",
      route: "narra",
    },
    {
      title: "Calio - Calendar App for Students",
      description: "A productivity focused calendar tailored to students.",
      image: "/images/work-3.png",
      route: "calio",
    },
    {
      title: "Project Management System",
      description: "A tool to manage large scale cross functional projects.",
      image: "/images/work-4.png",
      route: "project-managment-system",
    },
  ];
  useEffect(() => {
    console.log("sdfds");
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      console.log("sdfds", e.clientX, e.clientY);
    };
    if (sectionRef.current) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // IntersectionObserver logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Update visibility every time intersection changes
          setShow(entry.isIntersecting);
          console.log(entry.isIntersecting, "dfsdsf");
        });
      },
      {
        root: null, // viewport
        threshold: 0.3, // lower = more sensitive
      }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [setShow]);

  return (
    <section
      id="Work"
      ref={sectionRef}
      className="border-b border-borderColor py-[100px] relative cursor-none"
    >
      <div className="box">
        <div className="mb-10 text-center">
          <p className="text-[36px] font-medium">My work</p>
          <p className="text-[15px] md:text-base font-normal leading-[28px]">
            A showcase of my design projects, highlighting creative
          </p>
          <p className="text-[15px] md:text-base font-normal leading-[28px]">
            solutions and user-centered results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[26px]">
          {data.map((item, index) => (
            <div
              onClick={() => {
                router.push(item.route || "");
              }}
              key={index}
              onMouseEnter={() => setIsHoveringItem(true)}
              onMouseLeave={() => setIsHoveringItem(false)}
              className="relative group rounded-[10px] h-[340px] bg-cover bg-center bg-no-repeat overflow-hidden text-white"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-300" />

              <div className="absolute inset-0 flex flex-col justify-end p-[20px] z-10">
                <p className="text-[22px] font-semibold transform transition-all duration-500 group-hover:-translate-y-[10px]">
                  {item.title}
                </p>
                <p className="text-sm font-normal opacity-0 invisible translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {show && (
        <motion.div
          animate={{
            x: cursorPos.x + 20,
            y: cursorPos.y + 20,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 0.5,
          }}
          className="fixed top-0 left-0 z-[9999] pointer-events-none"
        >
          <div className="relative hidden lg:block">
            <AnimatePresence mode="wait">
              {isHoveringItem ? (
                <motion.div
                  key="hover"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white px-4 py-2 rounded-[10px] text-sm font-medium"
                >
                  View Project
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0.5, scale: 0.9 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="w-3 h-3 bg-SecondaryText rounded-full"
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default MyWorks;
