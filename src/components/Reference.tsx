"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";

const Reference = () => {
  const carouselRef = useRef<Slider | null>(null);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const data = [
    {
      title: "Sarthak Bansal",
      currentTitle: "Co-Founder & CEO @GREL",
      message: (
        <div className="flex flex-col gap-5">
          <p>
            He led the design of our core ride booking app, ensuring a user
            friendly and trustworthy interface. He was also instrumental in
            building our internal Admin Portal which continues to power our
            daily ride operations and played a key role in launching our Rentals
            platform.
          </p>
          <p>
            What stood out was his approach to design beyond just visuals he
            consistently focused on the overall user experience, keeping both
            functionality and end user needs in mind. His work also extended to
            shaping GREL’s external identity, contributing meaningfully to how
            we presented ourselves to partners and government stakeholders,
            including during the grant evaluation by the Gov of Madhya Pradesh.
            As our Product Designer, Shubham introduced much needed structure
            and clarity in a fast paced startup environment.
          </p>
        </div>
      ),
      image: "/four.png",
    },
    {
      title: "Tejas Mirge",
      currentTitle: "Product Manager @Kazam",
      message: (
        <div className="flex flex-col gap-5">
          <p>
            I had the pleasure of working closely with Shubham and was
            consistently impressed by his out of the box thinking and creative
            problem solving. He always brings a unique perspective to design,
            often challenging conventional approaches to deliver fresh, user
            centric solutions.
          </p>
          <p>
            What truly sets Shubham apart is his dedication not just to the
            design process, but to deeply understanding user needs and iterating
            until the most effective solution emerges. Whether he's navigating
            complex design challenges or collaborating across teams, he remains
            both resourceful and dependable.
          </p>
          <p>
            I highly recommend Shubham for any role that values innovation,
            collaboration, and design excellence.
          </p>
        </div>
      ),
      image: "/two.png",
    },
    {
      title: "KRISHNA AIR",
      currentTitle: "Product Designer @Riva",
      message: (
        <div className="flex flex-col gap-5">
          <p>
            I had the pleasure of mentoring Shubham as he began his journey in
            product design. He stood out for his dedication, quick learning, and
            consistently positive attitude. Among the designers I’ve mentored,
            Shubham was especially proactive in building new skills and
            delivering thoughtful, user focused solutions.
          </p>
          <p>
            One of his key strengths is his curiosity—he regularly asks
            insightful questions and seeks context to ensure his work is aligned
            with project goals. Shubham is always open to feedback and adapts
            quickly, which is essential in the design field.
          </p>
          <p>
            I highly recommend Shubham to any team looking for a motivated
            designer who’s eager to learn, experiment, and add great value. I
            wish him a bright and successful career ahead.
          </p>
        </div>
      ),
      image: "/three.png",
    },
    {
      title: "Aditya Bokade",
      currentTitle: "Customer Experience Head @MentorMind",
      message: `I had the pleasure of working with Shubham at Cendrol, where he stood out as a talented and reliable UI/UX designer. His ability to turn user needs into clean, intuitive designs made a real impact on our product. Any team would be lucky to have him, and I’m confident he’ll be a valuable asset wherever he goes.`,
      image: "/one.png",
    },
    {
      title: "Dhruv Kamath",
      currentTitle: "Associate Product Manager @Durupert",
      message: (
        <div className="flex flex-col gap-5">
          <p>
            I worked with Shubham during my time at Cendrol. His design insights
            and focus on user experience consistently elevated our product. His
            thoughtful approach helped us achieve great results and made him an
            invaluable part of the team.
          </p>
          <p>
            I’d gladly recommend him to any team looking for someone dependable
            and driven.
          </p>
        </div>
      ),
      image: "/five.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: isMobile ? 1 : 2,
    variableWidth: false,
    adaptiveHeight: false,
    autoplay: false,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    arrows: false,
  };
  return (
    <section
      id="References"
      className="py-[100px] bg-[#FCFCFC] border-b border-borderColor"
    >
      <div className="box1">
        <div className="mb-10 text-center">
          <p className="text-[36px] font-medium">References</p>
        </div>
        {/*  */}
        <div className="relative ">
          <div className="hidden lg:flex items-center justify-between w-full">
            <motion.div
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                if (carouselRef.current) {
                  carouselRef.current.slickPrev();
                }
              }}
              className="absolute top-[50%] z-20 left-[-50px] border-2 border-PrimaryText bg-PrimaryText flex items-center justify-center h-[32px] w-[32px] rounded-full cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="14"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6.875 1.375 1.25 7l5.625 5.625"
                ></path>
              </svg>
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                if (carouselRef.current) {
                  carouselRef.current.slickNext();
                }
              }}
              className="absolute top-[50%] z-20 right-[-50px] border-2 border-PrimaryText bg-PrimaryText flex items-center justify-center h-[32px] w-[32px] rounded-full cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="14"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M1.125 1.575 6.75 7.2l-5.625 5.625"
                ></path>
              </svg>
            </motion.div>
          </div>

          <Slider {...settings} ref={carouselRef}>
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-4 border border-borderColor rounded-[10px] bg-white"
                >
                  <div className="flex gap-4 items-start">
                    <div>
                      <Image
                        src={item.image}
                        alt={`img-${index}`}
                        height={1000}
                        width={1000}
                        className="h-12 w-12 rounded-full bg-amber-200"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-[20px]">{item.title}</p>
                      <p className="text-SecondaryText text-xs font-normal">
                        {item.currentTitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-justify text-[15px] lg:text-base font-normal mt-4 leading-[30px]">
                    {item.message}
                  </p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Reference;
