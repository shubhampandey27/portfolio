"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// icons
import LinkedInIcon from "./icons/LinkedInIcon";
import PeerListIcon from "./icons/PeerListIcon";
import FigmaIcon from "./icons/FigmaIcon";
import MailIcon from "./icons/MailIcon";
import Bar from "./icons/Bar";
import DownloadIcon from "./icons/DownloadIcon";
import MenuIcon from "./icons/MenuIcon";
import CloseIcon from "./icons/CloseIcon";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const data = [
    { title: "About", href: "About" },
    { title: "Specialties", href: "Specialties" },
    { title: "Work", href: "Work" },
    { title: "References", href: "References" },
    { title: "Contact", href: "Contact" },
  ];

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
    <nav className="p-4  z-50 sticky top-0 left-0 right-0 bg-white">
      <div className="box ">
        <div className="px-0 flex items-center justify-between">
          <div className="flex items-center gap-[25px] justify-between w-full lg:justify-start lg:w-auto">
            {/* icons */}
            {pathname !== "/" ? (
              <div
                className="text-sm text-PrimaryText font-medium cursor-pointer flex items-center gap-3"
                onClick={() => {
                  router.push("/");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="11"
                  fill="none"
                  viewBox="0 0 13 11"
                >
                  <path
                    fill="#000"
                    d="M12.125 5.495a.47.47 0 0 1-.468.469H2.476l3.419 3.418a.47.47 0 0 1-.664.663L1.012 5.827a.47.47 0 0 1 0-.664L5.232.945a.469.469 0 1 1 .663.663l-3.42 3.418h9.182a.47.47 0 0 1 .468.469"
                  ></path>
                </svg>{" "}
                Back Home
              </div>
            ) : (
              <div className="flex items-center gap-[13px]">
                <LinkedInIcon
                  href={" https://www.linkedin.com/in/shubhfolio/"}
                />
                <PeerListIcon href={"https://www.behance.net/shubhfolio"} />
                <FigmaIcon href={"https://www.figma.com/@shubhampandey"} />
                <MailIcon href={"shubhfolio@gmail.com"} />
              </div>
            )}

            <div className="lg:block hidden">
              <Bar />
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-[20px]">
              {data.map((item) => (
                <p
                  onClick={() => handleScroll(item.title)}
                  key={item.title}
                  className="text-SecondaryText font-medium text-sm hover:text-PrimaryText transition-all cursor-pointer duration-300 ease-in"
                >
                  {item.title}
                </p>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="block md:hidden relative">
              <div onClick={() => setMenu(!menu)}>
                {menu ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
              </div>

              <AnimatePresence>
                {menu && (
                  <motion.div
                    key="dropdown"
                    initial={{
                      opacity: 0,
                      y: -20,
                      rotate: 20,
                      transformOrigin: "top right",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      rotate: [20, -7],
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                        rotate: {
                          duration: 0.3,
                          ease: "easeOut",
                        },
                      },
                    }}
                    exit={{
                      opacity: 0,
                      y: -20,
                      rotate: 20,
                      transition: {
                        duration: 0.3,
                        ease: "easeIn",
                      },
                    }}
                    className="absolute top-[25px] right-0 border rounded-lg border-borderColor p-4 flex flex-col gap-4 bg-white shadow-xl z-40"
                  >
                    {data.map((item, index) => (
                      <p
                        key={index}
                        onClick={() => {
                          setMenu(false);
                          handleScroll(item.title);
                        }}
                        className="text-SecondaryText font-medium text-sm hover:text-black transition-colors"
                      >
                        {item.title}
                      </p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Resume button */}
          <a
            href="https://drive.google.com/file/d/1hK_gvXK-u9Ql4bzib3zBdKuoEkJG3uoU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:opacity-[0.8] duration-300 ease-in cursor-pointer hidden lg:flex items-center gap-2 bg-primaryColor h-[36px] px-[15px] text-white text-sm font-medium rounded-lg"
          >
            <span className="pb-[1px]"> View my resume</span> <DownloadIcon />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
