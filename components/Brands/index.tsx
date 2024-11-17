"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-border py-11 overflow-hidden bg-gradient-to-r from-orange-200 to-yellow-200">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex animate-scroll">
            <div className="flex gap-7.5 lg:gap-12.5 xl:gap-29 min-w-full">
              {brandData.map((brand, key) => (
                <SingleBrand brand={brand} key={key} />
              ))}
            </div>
            <div className="flex gap-7.5 lg:gap-12.5 xl:gap-29 min-w-full">
              {brandData.map((brand, key) => (
                <SingleBrand brand={brand} key={`duplicate-${key}`} />
              ))}
            </div>
            <div className="flex gap-7.5 lg:gap-12.5 xl:gap-29 min-w-full">
              {brandData.map((brand, key) => (
                <SingleBrand brand={brand} key={`triplicate-${key}`} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
          will-change: transform;
          transition: all 0.3s ease;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
          opacity: 0.8;
        }
      `}</style>
    </>
  );
};

export default Brands;
