import { Star } from "lucide-react";
import Link from "next/link";
import TrustedCompanies from "./trusted-companies";
import { AnimatedTooltipCard } from "./tool-tip";

function Hero() {
    return (
        <section className=" py-12 md:py-32 relative ">
            <div className="container relative z-20">
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

                <div className=" flex items-center">
                    <Link
                        href={`#projects`}
                        className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                        View work
                    </Link>
                    <AnimatedTooltipCard />
                </div>
                <TrustedCompanies />
            </div>
        </section>
    );
}

export default Hero;
