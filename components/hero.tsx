import { Star } from "lucide-react";
import Link from "next/link";
import TrustedCompanies from "./trusted-companies";
import { AnimatedTooltipCard } from "./tool-tip";

function Hero() {
    return (
        <section className=" py-12 md:pt-32 w-full dark:bg-background bg-foreground  dark:bg-dot-white/[0.1] bg-dot-black/[0.1] relative">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-foreground [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="container relative z-10">
                <h1 className=" tracking-wide text-balance text-3xl sm:text-5xl md:text-7xl font-bold max-w-[30ch] ">
                    We develop{" "}
                    <span className=" text-accent inline-block ">
                        <Star className=" md:w-10 md:h-10 " />
                    </span>
                    <br />
                    <span className=" text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                        amazing
                    </span>{" "}
                    websites
                    <br />
                    for your business
                    <span className=" text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                        .
                    </span>
                </h1>
                <p className=" max-w-prose my-8 md:my-[3rem] ">
                    Discover our seamless workflow as we transform figma designs
                    into stunning websites. Explore the synergy between design
                    and development for a pixel-perfect online experience.
                </p>

                <div className=" flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 ">
                    <Link
                        href={`#projects`}
                        className="inline-flex animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 py-2 "
                    >
                        View work
                    </Link>
                    <div className=" flex items-center gap-12 ">
                        <AnimatedTooltipCard />
                        <div className="text-xs font-light">
                            <span className=" font-medium text-heading text-sm ">
                                100+
                            </span>{" "}
                            <br /> satisfied clients
                        </div>
                    </div>
                </div>
                <TrustedCompanies />
            </div>
        </section>
    );
}

export default Hero;
