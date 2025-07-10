"use client";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [
    { img: "/images/pms4.png" },
    { img: "/images/pms5.png" },
    { img: "/images/pms6.png" },
    { img: "/images/pms7.png" },
    {
      img: "https://framerusercontent.com/assets/FEgjZWnDiRGvHKSW6OhubLtE.mp4",
    },
    {
      img: "https://framerusercontent.com/images/jXqzS6q2pMg9EpWFLNsCa4T5CAk.gif",
    },
    {
      img: "https://framerusercontent.com/images/1WaiZZK73pdBAzlJQ5ecDrvVllY.gif",
    },
    {
      img: "https://framerusercontent.com/images/QnKiZNdT7cBOs2sxTgEPxQg0kC0.gif",
    },
    {
      img: "https://framerusercontent.com/images/Y9jF3IKi1mMFsa8BRJlPSLVOAFs.gif",
    },
    {
      img: "https://framerusercontent.com/images/ZgGYd1YJVeU0efijaBebqeOuF8g.gif",
    },
  ];
  return (
    <div className="box py-[60px]">
      <div className="mb-[80px]">
        <Image
          src={"/images/pms1.png"}
          alt="..."
          height={1000}
          width={1000}
          className="w-full"
        />
        <p className="font-medium text-[23px] py-[10px]">
          Project Management System
        </p>
        <p className="font-normal text-base pb-[10px]">
          A streamlined solution for remote teams, combining calendars,
          dashboards, and task tools to improve communication, prevent delays,
          and boost productivity.
        </p>
      </div>
      {/*  */}
      <div className="mb-[80px]">
        <Image
          src={"/images/pms2.png"}
          alt="..."
          height={1000}
          width={1000}
          className="w-full"
        />
        <p className="font-medium text-[23px] py-[10px]">Target User</p>
        <p className="font-normal text-base pb-[10px]">
          Remote teams, managers, and project coordinators who need to
          effectively manage tasks, deadlines, and team collaboration.
        </p>
      </div>
      {/*  */}
      <div className="mb-[80px]">
        <Image
          src={"/images/pms3.png"}
          alt="..."
          height={1000}
          width={1000}
          className="w-full"
        />
        <p className="font-medium text-[23px] py-[10px]">Research</p>
        <p className="font-normal text-base pb-[10px]">
          Problem Statement: Remote working poses significant challenges in task
          tracking and team collaboration. Existing management tools are
          insufficient for the current needs of remote workers.
        </p>
        <p className="font-normal text-base pt-[20px] pb-3">Pain Points:</p>
        <ul className="list-disc font-normal text-base">
          <li>
            Drop in efficiency due to ineffective communication with managers.
          </li>
          <li>Overlooked and overdue tasks.</li>
          <li>Difficulty in checking completed work.</li>
        </ul>
        {/*  */}
        <div className="mt-[80px]">
          {" "}
          <p className="font-medium text-[23px] py-[10px]">Solution</p>
          <p className="font-normal text-base pb-[10px]">
            The system includes features to streamline project management, such
            as calendar and timeline views, task assignment, team dashboards,
            and task reporting.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col gap-[80px]">
        {data.map((item, index) => (
          <div key={index}>
            {index === 4 ? (
              <video src={item.img} autoPlay muted className="w-full" />
            ) : (
              <img
                src={item.img}
                alt="..."
                height={1000}
                width={1000}
                className="w-full"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
