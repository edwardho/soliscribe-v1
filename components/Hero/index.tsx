"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {

  return (
    <>
      <section className="overflow-hidden pb-20 pt-20 md:pt-28 xl:pb-25 xl:pt-32">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="flex-1 relative">
              {/* Shape SVGs */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
                viewport={{ once: true }}
                style={{ position: 'absolute', left: '-2rem', top: '6rem' }}
              >
                <Image
                  src="/images/shape/shape-01.svg"
                  alt="shape"
                  width={38}
                  height={38}
                  className="hidden lg:block"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                viewport={{ once: true }}
                style={{ position: 'absolute', right: '-4rem', top: '10rem' }}
              >
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={35}
                  height={35}
                  className="hidden lg:block"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                viewport={{ once: true }}
                style={{ position: 'absolute', left: '-5rem', bottom: '4rem' }}
              >
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={28}
                  height={28}
                  className="hidden lg:block"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
                viewport={{ once: true }}
                style={{ position: 'absolute', left: '8rem', top: '12rem' }}
              >
                <Image
                  src="/images/shape/shape-05.svg"
                  alt="shape"
                  width={32}
                  height={32}
                  className="hidden lg:block"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3.2, repeat: Infinity, delay: 2 }}
                viewport={{ once: true }}
                style={{ position: 'absolute', right: '7rem', bottom: '6rem' }}
              >
                <Image
                  src="/images/shape/shape-06.svg"
                  alt="shape"
                  width={26}
                  height={26}
                  className="hidden lg:block"
                />
              </motion.div>


              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 4.2, repeat: Infinity, delay: 0.7 }}
                viewport={{ once: true }}
                style={{ position: 'absolute', right: '-2rem', bottom: '20rem' }}
              >
                <Image
                  src="/images/shape/shape-08.svg"
                  alt="shape"
                  width={40}
                  height={40}
                  className="hidden lg:block"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3.8, repeat: Infinity, delay: 1.2 }}
                viewport={{ once: true }}
                style={{ position: 'absolute', right: '5rem', top: '14rem' }}
              >
                <Image
                  src="/images/shape/shape-09.svg"
                  alt="shape"
                  width={35}
                  height={35}
                  className="hidden lg:block"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 4.8, repeat: Infinity, delay: 0.3 }}
                viewport={{ once: true }}
                style={{ position: 'absolute', left: '6rem', bottom: '15rem' }}
              >
                <Image
                  src="/images/shape/shape-10.svg"
                  alt="shape"
                  width={35}
                  height={35}
                  className="hidden lg:block"
                />
              </motion.div>

              
              <div className="flex justify-center">
              </div>
              <h1 className="text-center text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl/none">
                Upload your files and accelerate <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">note-taking</span> with your <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">files</span>.
              </h1>
              <p className="mx-auto mt-5 max-w-prose text-lg text-muted-foreground sm:text-xl text-center">
                Soliscribe is a note-taking interface powered by the latest AI. Upload files and empower your notes with your personal AI agent and inline AI editing.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/api/auth/register"
                  target="_blank"
                  className={buttonVariants({
                    size: 'lg',
                    className: 'mt-5'
                  })}
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-16 mx-auto max-w-4xl rounded-xl border border-border bg-background/50 backdrop-blur-sm shadow-lg overflow-hidden"
              >
                <div className="aspect-video relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    {/* Replace this with actual video component when ready */}
                    <p className="text-lg">Product Demo Video Placeholder</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
