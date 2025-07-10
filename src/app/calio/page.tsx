"use client";
import Image from "next/image";
import React from "react";

const page = () => {
  const data = [{ img: "/images/c5.png" }, { img: "/images/c6.png" }];
  const data1 = [{ img: "/images/c7.png" }, { img: "/images/c10.png" }];
  return (
    <div className="box py-[60px]">
      <div className="mb-[80px]">
        <Image
          src={"/images/c1.png"}
          alt="..."
          height={1000}
          width={1000}
          className="w-full"
        />
        <p className="font-medium text-[23px] py-[10px]">
          Calio - Calendar App for Students
        </p>
        <p className="font-normal text-base pb-[10px]">
          Calio is a calendar application designed to help students seamlessly
          manage their hybrid class schedules, ensuring they never miss a lesson
          or overlap events across multiple platforms.
        </p>
      </div>
      {/*  */}
      <div className="mb-[80px]">
        <Image
          src={"/images/c2.png"}
          alt="..."
          height={1000}
          width={1000}
          className="w-full"
        />
        <p className="font-medium text-[23px] py-[10px]">Target User</p>
        <p className="font-normal text-base pb-[10px]">
          Students juggling physical and virtual lessons, often from different
          departments, platforms, and time slots.
        </p>
        <div>
          <p className="font-medium text-[23px] py-[10px]">
            Problem Statement:
          </p>
          <p className="font-normal text-base pb-[10px]">
            Tracking lesson times in hybrid education has become increasingly
            difficult. Due to the pandemic, some classes are held virtually
            while others take place in person. This creates significant
            challenges for students as they struggle to keep track of when and
            where their lectures occur. If students cannot reliably organize
            their schedules and identify lesson times and locations, they risk
            missing important classes.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="mb-[80px]">
        <Image
          src={"/images/c3.png"}
          alt="..."
          height={1000}
          width={1000}
          className="w-full"
        />
        <p className="font-medium text-[23px] py-[10px]">Research</p>
        <ul className="list-disc font-normal text-base">
          <li>
            Conducted interviews with students facing issues due to hybrid
            schedules.
          </li>
          <li>
            Observed frustrations around tracking locations, meeting links, and
            avoiding overlapping sections.
          </li>
          <li>
            Identified a need for a simple and efficient tool to manage complex
            schedules.
          </li>
        </ul>
        {/*  */}
      </div>
      <div>
        <Image
          src={"/images/c4.png"}
          alt="..."
          height={1000}
          width={1000}
          className="w-full"
        />
        <div className="my-[80px]">
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
            <Image
              src={item.img}
              alt="..."
              height={1000}
              width={1000}
              className="w-full"
            />
          </div>
        ))}
      </div>
      {/*  */}
      <div className="mb-[80px]">
        <p className="font-medium text-[23px] py-[10px]">Validation</p>
        <p className="font-normal text-base pb-[10px]">
          User testing with students to ensure ease of use and efficiency:
        </p>
        <ul className="list-disc font-normal text-base">
          <li>
            Positive feedback highlighted reduced frustration in managing
            schedules and avoiding missed classes.
          </li>
        </ul>
      </div>
      {/*  */}
      <div className="mb-[80px]">
        <p className="font-medium text-[23px] py-[10px]">Final Product</p>
        <p className="font-normal text-base pb-[10px]">
          A user-friendly calendar app that centralizes hybrid lesson schedules,
          minimizes conflicts, and improves students’ daily organization.
        </p>
      </div>
      <div className="flex flex-col gap-[80px]">
        {data1.map((item, index) => (
          <div key={index}>
            <Image
              src={item.img}
              alt="..."
              height={1000}
              width={1000}
              className="w-full"
            />
          </div>
        ))}
      </div>
      <div className="mt-[80px]">
        <iframe
          width="100%"
          height="600"
          src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/60uAgz2jbJnL82yYhFguE2/Calio-Product-Design-Case-Study?node-id=1-2075&t=YE1RG74weKIO6MTR-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A1025"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
