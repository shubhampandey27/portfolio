"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import LinkedInIcon from "./icons/LinkedInIcon";
import PeerListIcon from "./icons/PeerListIcon";
import FigmaIcon from "./icons/FigmaIcon";
import MailIcon from "./icons/MailIcon";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const GetInTouch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      email: Yup.string()
        .trim()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .min(3, "Message must be at least 3 characters")
        .required("Message is required")
        .trim(),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const response = await fetch("/api/mailer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await response.json();
        if (response.ok) {
          resetForm({});
          setSubmitted(true);
        } else {
          console.error("failed to add the email", data);
        }
      } catch (err) {
        console.error("failed to add the emails", err);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <section id="Contact" className="py-[70px] relative">
      <div className="box">
        <div className="flex flex-col md:flex-row items-center gap-[39px] relative">
          <Image
            src={"/images/newone.png"}
            alt="hero-img"
            height={1000}
            width={1000}
            className="w-[400px] h-[535px] md:w-[233px] md:h-[421px] object-cover lg:w-[400px] lg:h-[535px] rounded-[10px]"
          />

          {/* Form Area */}
          <div className="w-full relative min-h-[300px]">
            <p className="text-[30px] lg:text-[36px] font-medium">
              Get in touch!
            </p>
            <p className="text-[15px] md:text-base font-normal leading-[28px]">
              Let’s connect to discuss about design!
            </p>

            <div className="flex items-center gap-[13px] mt-[20px] mb-[29px]">
              <LinkedInIcon href={"https://www.linkedin.com/in/shubhfolio/"} />
              <PeerListIcon href={"https://www.behance.net/shubhfolio"} />
              <FigmaIcon href={"https://www.figma.com/@shubhampandey"} />
              <MailIcon href={"mailto:shubhfolio@gmail.com"} />
            </div>

            {/* Form */}
            <AnimatePresence>
              {!submitted && (
                <motion.form
                  onSubmit={formik.handleSubmit}
                  className="relative h-full"
                  initial={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    transition: { duration: 0.4 },
                  }}
                >
                  <div className="flex justify-between gap-4">
                    <div className="w-full">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className={`inputStyle ${
                          formik.touched.name && formik.errors.name
                            ? "border-red-500"
                            : formik.touched.name && !formik.errors.name
                            ? "border-green-500"
                            : "border-[#F5F5F5]"
                        }`}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {/* {formik.touched.name && formik.errors.name && (
                        <p className="text-red-600 text-xs mt-1 font-normal">
                          {formik.errors.name}
                        </p>
                      )} */}
                    </div>

                    <div className="w-full">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={`inputStyle ${
                          formik.touched.email && formik.errors.email
                            ? "border-red-500"
                            : formik.touched.email && !formik.errors.email
                            ? "border-green-500"
                            : "border-[#F5F5F5]"
                        }`}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {/* {formik.touched.email && formik.errors.email && (
                        <p className="text-red-600 text-xs mt-1 font-normal">
                          {formik.errors.email}
                        </p>
                      )} */}
                    </div>
                  </div>

                  <div className="w-full my-[15px]">
                    <textarea
                      name="message"
                      placeholder="Message"
                      className={`inputStyle min-h-[250px] lg:min-h-[150px] ${
                        formik.touched.message && formik.errors.message
                          ? "border-red-500"
                          : formik.touched.message && !formik.errors.message
                          ? "border-green-500"
                          : "border-[#F5F5F5]"
                      }`}
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {/* {formik.touched.message && formik.errors.message && (
                      <p className="text-red-600 text-xs mt-1 font-normal">
                        {formik.errors.message}
                      </p>
                    )} */}
                  </div>

                  <button
                    disabled={loading}
                    type="submit"
                    className="transition-all w-full flex items-center justify-center hover:opacity-[0.8] duration-300 ease-in cursor-pointer gap-2 bg-primaryColor h-[51px] px-[15px] text-white text-sm font-semibold rounded-[10px]"
                  >
                    {loading ? (
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                    ) : (
                      "Send message"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            {/* ✅ Tick after submit */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  className="absolute left-1/2 top-[100%] -translate-x-1/2 -translate-y-1/2 z-10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.6,
                  }}
                >
                  <div className="bg-primaryColor h-16 w-16 flex items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                    >
                      <path
                        fill="transparent"
                        stroke="white"
                        strokeLinecap="round"
                        strokeWidth="4"
                        d="m2 14 8 8L26 6"
                      ></path>
                    </svg>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
