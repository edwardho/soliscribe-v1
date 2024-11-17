"use client";
import SectionHeader from "../Common/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) {
      return;
    }

    // Start autoplay when component mounts
    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 20000); // Change slide every 20 seconds

    // Cleanup interval on unmount
    return () => clearInterval(autoplayInterval);
  }, [api]);

  return (
    <>
      <section className="py-16">
        <div className="container">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top text-center">
            <SectionHeader
              headerInfo={{
                title: `TESTIMONIALS`,
                subtitle: `What Our Users Say`,
                description: `See how Soliscribe helps students, researchers, content creators, and professionals streamline their workflow with powerful document analysis, audio transcription, AI-assisted editing features, and notebook focused AI agents.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

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
          className="container mt-10"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonialData.map((review) => (
                <CarouselItem key={review.id} className="pl-2 md:pl-4 md:basis-1/2">
                  <Card>
                    <CardContent className="p-6">
                      <SingleTestimonial review={review} />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </motion.div>
      </section>
    </>
  );
};

export default Testimonial;
