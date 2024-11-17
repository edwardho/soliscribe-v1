"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-yellow-100 to-orange-200 py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">
          <Image
            width={275}
            height={275}
            src="/images/shape/shape-07.svg"
            alt="Man"
            className="absolute -left-15 -top-25 -z-1 lg:left-0 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[275px] h-auto"
          />
          <Image
            width={100}
            height={100}
            src="/images/shape/shape-10.svg"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-1 w-[60px] sm:w-[80px] md:w-[90px] lg:w-[100px] h-auto"
          />

          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
          />

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <h2 className="mb-4 text-3xl font-bold text-slate-800 dark:text-white xl:text-sectiontitle3">
              Empowering Productivity
            </h2>
            <p className="mx-auto text-slate-800 lg:w-11/12">
              Soliscribe helps professionals transform their documents and notes into actionable insights. 
              Our AI-powered platform streamlines content processing, editing, and knowledge management.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-slate-800 dark:text-white xl:text-sectiontitle3">
                1K+
              </h3>
              <p className="text-lg text-slate-800 lg:text-para2">Files Processed Daily</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-slate-800 dark:text-white xl:text-sectiontitle3">
                100K+
              </h3>
              <p className="text-lg text-slate-800 lg:text-para2">AI Powered Edits</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-slate-800 dark:text-white xl:text-sectiontitle3">
                10K+
              </h3>
              <p className="text-lg text-slate-800 lg:text-para2">AI Chat Interactions</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
