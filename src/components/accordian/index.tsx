import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import ArrowIon from "../icons/ArrowIon";

interface AccordionProps {
  i: number;
  expanded: number | false;
  setExpanded: (index: number | false) => void;
  title: string;
  description: string;
  svg: any;
}

const Accordion: React.FC<AccordionProps> = ({
  i,
  expanded,
  setExpanded,
  title,
  description,
  svg,
}) => {
  const isOpen = i === expanded;

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 30;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      onClick={() => setExpanded(i)}
      className={`w-full p-4 rounded-xl border-borderColor border mb-2 cursor-pointer ${
        isOpen ? "bg-primaryColor" : "bg-[#F5F5F5] "
      } `}
    >
      <motion.div
        initial={false}
        className={`w-full   flex flex-col text-sm ${
          isOpen ? "text-white" : "text-PrimaryText"
        } `}
      >
        <div className="flex justify-between items-center  md:gap-8 text-[18px] md:text-sm lg:text-base font-medium">
          <div className="flex items-center gap-4 justify-center md:text-lg font-medium pointer-events-none text-start">
            <p
              className={`h-[15px] w-[15px] ${
                isOpen ? "stroke-white" : "stroke-PrimaryText"
              }`}
            >
              {svg}
            </p>{" "}
            {title}
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-4 rounded-3xl text-start text-sm md:text-sm lg:text-sm text-secondaryTextColor max-w-xs md:max-w-full font-normal">
                {description}
              </div>
              <button
                onClick={() => {
                  handleScroll("Contact");
                }}
                className="mt-4 cursor-pointer gap-2 border border-borderColor rounded-[8px] px-4 py-2 flex items-center justify-center text-xs font-normal"
              >
                <span className=""> Get in touch</span> <ArrowIon />
              </button>
            </motion.section>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Accordion;
