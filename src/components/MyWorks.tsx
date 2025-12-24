"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const MyWorks = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isHoveringItem, setIsHoveringItem] = useState<boolean>(false);
  const router = useRouter();

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  const [show, setShow] = useState(false);

  const data = [
    {
      title: "Structuring the Premium Upgrade Path for GREL’s Driver Partners",
      description:
        "Improving transparency & scaling operations efficiently. Automated the process of premium vehicle allocation and boost driver partners' earnings.",
      image: "/images/work-3.png",
      route: "",
      date: "01 Dec 2025",
      tag: "App Design - B2C",
      href: "https://medium.com/@shubhfolio/structuring-the-premium-upgrade-path-for-grels-driver-partners-product-design-case-study-060769f08d19",
    },
    {
      title: "EDGE: Making daily commutes at your fingertips — A UX case study",
      description:
        "Designed to find faster routes with live updates and quick rebooking.",
      image: "/images/work-4.png",
      route: "",
      date: "05 Dec 2025",
      tag: "Personal Project",
      href: "https://medium.com/@shubhfolio/edge-making-daily-commutes-at-your-fingertips-a-ux-case-study-2cfa541efc95",
    },
    {
      title: "StaashUp — Affiliate marketing app for Gen Zs",
      description:
        "Curated for Gen-Zs to stash favorites and earn through affiliate links.",
      image: "/images/casetwo.png",
      route: "",
      date: "15 Dec 2025",
      tag: "Personal Project",
      href: "https://medium.com/@shubhfolio/affiliate-marketing-app-for-gen-zs-09216ab94496",
    },
    {
      title: "Regain: Study Timer for Focus — UX Audit ",
      description: "UX Evaluation & Recommendations (Onboarding)",
      image: "/images/case2.png",
      date: "21 Dec 2025",
      tag: "Regain App Audit",
      route: "",
      href: "https://medium.com/@shubhfolio/regain-study-timer-for-focus-ux-audit-bb39c5e6685c",
    },
  ];
  // Mouse tracking is handled on the section element (see handlers on <section>)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShow(entry.isIntersecting);
        });
      },
      {
        root: null,
        threshold: 0.3,
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
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
      onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
      className="border-b border-borderColor py-[60px] lg:py-[100px] relative cursor-none"
    >
      <div className="box">
        <div className="mb-10 text-center">
          <p className="text-[30px] lg:text-[40px] font-medium">My work</p>
          <div className="flex items-center justify-center">
            <p className="text-[15px] md:text-base font-normal leading-[28px] w-full lg:max-w-[450px]">
              A showcase of my design projects, highlighting creative solutions
              and user-centered results.
            </p>
          </div>
          {/* <p className="text-[15px] md:text-base font-normal leading-[28px]">
            solutions and user-centered results.
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[26px]">
          {data.map((item, index) => (
            <div
              onClick={() => {
                if (item.href) {
                  window.open(item.href, "_blank");
                } else {
                  router.push(item.route || "");
                }
              }}
              key={index}
              onMouseEnter={() => setIsHoveringItem(true)}
              onMouseLeave={() => setIsHoveringItem(false)}
              className="relative group rounded-[10px] h-[256px] lg:h-[340px] bg-contain bg-center bg-no-repeat overflow-hidden text-white"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70 group-hover:from-black/20 group-hover:via-black/50 group-hover:to-black/90 transition-all duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end p-[20px] lg:p-[28px] z-10">
                <p className="text-[21px] lg:text-[25px] font-semibold transition-all duration-500">
                  {item.title}
                </p>
                <p className="text-[15px] font-normal max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  {item.description}
                </p>
                <div className="flex mt-2 gap-3 text-[13px] font-normal max-h-40 opacity-100 lg:max-h-0 overflow-hidden lg:opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  <p className="flex items-center justify-center gap-1">
                    <p className="h-[15px] w-[15px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FFF"
                        color="#FFF"
                        display="inline-block"
                        style={{
                          userSelect: "none",
                          width: "100%",
                          height: "100%",
                          flexShrink: "0",
                        }}
                        viewBox="0 0 256 256"
                      >
                        <path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-96-88v64a8 8 0 0 1-16 0v-51.06l-4.42 2.22a8 8 0 0 1-7.16-14.32l16-8A8 8 0 0 1 112 120m59.16 30.45L152 176h16a8 8 0 0 1 0 16h-32a8 8 0 0 1-6.4-12.8l28.78-38.37a8 8 0 1 0-13.31-8.83 8 8 0 1 1-13.85-8A24 24 0 0 1 176 136a23.76 23.76 0 0 1-4.84 14.45"></path>
                      </svg>
                    </p>{" "}
                    <p className="pb-[2px]"> {item.date || ""}</p>
                  </p>
                  <p className="flex items-center justify-center gap-1">
                    <p className="h-[12px] w-[12px] mb-[2.5px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FFF"
                        color="#FFF"
                        display="inline-block"
                        viewBox="0 0 256 256"
                      >
                        <path d="M243.31 136 144 36.69A15.86 15.86 0 0 0 132.69 32H40a8 8 0 0 0-8 8v92.69A15.86 15.86 0 0 0 36.69 144L136 243.31a16 16 0 0 0 22.63 0l84.68-84.68a16 16 0 0 0 0-22.63m-96 96L48 132.69V48h84.69L232 147.31ZM96 84a12 12 0 1 1-12-12 12 12 0 0 1 12 12"></path>
                      </svg>
                    </p>
                    <p className="pb-[2px]"> {item.tag || ""}</p>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {show && isInside && (
        <motion.div
          animate={{
            x: cursorPos.x,
            y: cursorPos.y,
          }}
          transition={{ type: "tween", ease: "linear", duration: 0 }}
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
                  className="bg-[#F9F9FA] px-4 py-2 rounded-[10px] text-sm font-medium"
                >
                  View Project
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0.5, scale: 0.9 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="w-4 h-4 bg-SecondaryText rounded-full"
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
