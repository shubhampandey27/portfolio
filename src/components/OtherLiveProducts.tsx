"use client";

import React from "react";

const OtherLiveProducts = () => {
  const data = [
    { title: "Cendrol", image: "/images/userApp.png", href: "" },
    {
      title: "GREL",
      image: "/images/userApp.png",
      href: "https://play.google.com/store/apps/details?id=com.evonrides&pcampaignid=web_share",
    },
  ];
  return (
    <section className="border-b border-borderColor py-[100px] relative">
      <div className="box">
        <div className="mb-10 text-center">
          <p className="text-[36px] font-medium">Other live products</p>
          <p className="text-[15px] md:text-base font-normal leading-[28px]">
            Discover more live products I’ve designed.
          </p>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[26px]">
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                if (window && item.href) {
                  window.open(item.href, "_blank");
                }
              }}
              style={{ backgroundImage: `url(${item.image})` }}
              className="cursor-pointer relative group rounded-[10px] h-[340px] bg-contain  bg-center bg-no-repeat overflow-hidden text-white"
            >
              <div className="absolute inset-0  group-hover:bg-black/60 transition-all duration-300" />

              <div className="absolute inset-0 flex flex-col justify-end p-[20px] z-10">
                <p className="text-[22px] font-semibold transform transition-all duration-500 ">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherLiveProducts;
