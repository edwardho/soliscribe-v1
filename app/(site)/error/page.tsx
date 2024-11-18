import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Lost in Space - Soliscribe SaaS Boilerplate",
  description: "Lost in the digital cosmos - Soliscribe error page",
  // other metadata
};

const ErrorPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center space-y-8">
        <div className="relative w-60 h-60 sm:w-80 sm:h-80 animate-pulse">
          <Image
            src="/images/shape/shape-02.svg"
            alt="Lost in Space"
            fill
            className="object-contain text-orange-500"
            priority
          />
        </div>

        <div className="space-y-4 text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            404
          </h1>
          <p className="leading-7 text-muted-foreground max-w-[500px]">
            Houston, we have a problem! The cosmic web coordinates you were looking for seem to have drifted into a black hole or entered another dimension.
          </p>
        </div>

        <Button asChild variant="default" size="lg">
          <Link href="/" className={cn(
            "inline-flex items-center gap-2",
            "transition-all duration-200 ease-in-out"
          )}>
            Return to Mission Control
            <svg
              width="16"
              height="16"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
