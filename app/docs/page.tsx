import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs Page - Soliscribe SaaS Boilerplate",
  description: "This is Docs page for Soliscribe Pro",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-border bg-background p-4 shadow-sm transition-all">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="rounded-lg border border-border bg-background p-8 shadow-sm lg:mb-5 xl:p-14">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome to Startup Documentation</h1>

                <p className="mt-4 text-base text-muted-foreground">
                  This document serves as a simple template to showcase a sample
                  layout and format. It is solely created for demonstration
                  purposes and is not intended for any official use.
                </p>
                <p className="mt-4 text-base text-muted-foreground">
                  Please visit:{" "}
                  <b>
                    <a href="https://nextjstemplates.com/docs" className="text-primary hover:underline">
                      nextjstemplates.com/docs
                    </a>
                  </b>{" "}
                  to check out the real docs, setup guide and even video
                  instructions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
