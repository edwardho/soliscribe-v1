"use client";

import { motion } from "framer-motion";
// import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30 mt-20">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              {/* <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              /> */}

              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground w-full h-full border">
                {/* Replace this with actual image when ready */}
                <p className="text-lg">Demo Image Placeholder 1</p>
              </div>
              
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium text-foreground">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 px-4.5 py-1 text-primary-foreground uppercase">
                  AI Powered
                </span>{" "}
                Note-Taking Platform
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-foreground xl:text-hero">
                Transform Your Research with <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">AI Intelligence</span>
              </h2>
              <p className="text-muted-foreground">
                Soliscribe combines powerful AI capabilities with intuitive note-taking features to help you process, understand, and organize information more effectively than ever before.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-full border bg-card">
                  <p className="text-metatitle2 font-semibold text-foreground">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-foreground">
                    Smart File Processing
                  </h3>
                  <p className="text-muted-foreground">Upload and process multiple file formats with AI assistance.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-full border bg-card">
                  <p className="text-metatitle2 font-semibold text-foreground">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-foreground">
                    AI Chat Integration
                  </h3>
                  <p className="text-muted-foreground">Engage with your personal AI agent to explore and organize knowledge.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium text-foreground uppercase">
                Enhanced Learning Experience
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-foreground xl:text-hero">
                Seamless Integration with {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-accent">
                  Your Workflow
                </span>
              </h2>
              <p className="text-muted-foreground">
                Experience a new way of learning and researching with our intelligent note-taking platform. Soliscribe adapts to your needs, making information processing and knowledge organization effortless.
              </p>
              <div>
                <a
                  href="#features"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-foreground hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Explore Features
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              {/* <Image
                src="./images/about/about-light-02.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              /> */}

              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground w-full h-full border">
                {/* Replace this with actual image when ready */}
                <p className="text-lg">Demo Image Placeholder 2</p>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
