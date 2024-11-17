import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        whileHover={{
          scale: [1, 1.02, 1.05],
          transition: {
            duration: 0.3,
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }
        }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-border bg-card p-7.5 shadow-sm transition-all hover:shadow-md xl:p-12.5"
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
          {typeof icon === 'string' ? (
            <Image src={icon} width={36} height={36} alt={title} />
          ) : (
            icon
          )}
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-foreground xl:text-itemtitle">
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
