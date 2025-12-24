"use client";

import React from "react";

const OtherLiveProducts = () => {
  const data = [
    {
      title: "Cendrol Marketing",
      image: "/images/cen.png",
      href: "https://cendrol.com/",
    },
    {
      title: "GREL User App",
      image: "/images/userApp.png",
      href: "https://play.google.com/store/apps/details?id=com.evonrides",
    },
  ];
  return (
    <section className="border-b border-borderColor py-[60px] lg:py-[100px] relative">
      <div className="box">
        <div className="mb-10 text-center">
          <p className="text-[30px] lg:text-[40px] font-medium">
            Other live products
          </p>
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
              className="cursor-pointer object-top relative group rounded-[10px]  h-[256px] bg-cover bg-left lg:bg-center bg-no-repeat overflow-hidden text-white"
            >
              <div
                className="absolute inset-0 bg-gradient-to-b   [mask-image:linear-gradient(rgba(0,0,0,0)_0%,_rgb(0,0,0)_100%)]
    [mask-size:100%_100%]
    [mask-repeat:no-repeat] from-[rgba(0,0,0,0.12)] to-[rgba(55,55,55,0.85)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <div className="absolute inset-0 flex flex-col justify-end p-[20px] lg:p-[28px] z-10">
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
