"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 py-3 lg:flex-row lg:justify-between lg:gap-0">
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
              className="animate_top"
            >
              <div className="flex items-center gap-8">
                <a href="/" className="relative flex items-center gap-2">
                  <Image
                    width={36}
                    height={36}
                    src="/images/logo/logo.svg"
                    alt="Logo"
                  />
                  <span className="text-xl font-semibold text-foreground">soliscribe</span>
                </a>
                <a href="/terms" className="text-foreground hover:text-primary">
                  Terms
                </a>
                <a href="/privacy" className="text-foreground hover:text-primary">
                  Privacy
                </a>
                <a href="/contact" className="text-foreground hover:text-primary">
                  Contact
                </a>
              </div>
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p className="text-foreground">
                &copy; {new Date().getFullYear()} Soliscribe. All rights reserved
              </p>
            </motion.div>

            
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
