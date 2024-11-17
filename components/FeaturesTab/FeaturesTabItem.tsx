import React from "react";
import { FeatureTab } from "@/types/featureTab";
// import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2} = featureTab;

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight text-foreground mb-7">
            {title}
          </h2>
          <p className="leading-7 text-muted-foreground mb-5">
            {desc1}
          </p>
          <p className="leading-7 text-muted-foreground w-11/12">
            {desc2}
          </p>
        </div>
        <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
          {/* <Image 
            src={image}
            alt={title}
            fill
            className="rounded-lg object-cover dark:hidden"
          />
          <Image
            src={imageDark}
            alt={title}
            fill
            className="rounded-lg object-cover hidden dark:block"
          /> */}

          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground w-full h-full border">
            {/* Replace this with actual image when ready */}
            <p className="text-lg">Demo Image Placeholder 3</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
