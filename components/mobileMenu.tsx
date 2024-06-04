"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navData } from "./data";

export const MobileMenu = () => {
    const [active, setActive] = useState(false);

    const activeOn = () => setActive(true);
    const activeOff = () => setActive(false);
    return (
        <>
            <button className=" flex md:hidden " onClick={activeOn}>
                <Menu />
            </button>
            {active && (
                <>
                    {" "}
                    <div className=" md:hidden fixed inset-0 z-20 bg-white/5 backdrop-blur-sm " />
                    <div className=" md:hidden w-full max-w-[350px] fixed top-12 bg-black/75 backdrop-blur-sm p-8 rounded-lg border left-1/2 -translate-x-1/2 z-50 mx-2 ">
                        <div className=" flex items-center justify-end mb-8 ">
                            <button onClick={activeOff}>
                                <X />
                            </button>
                        </div>
                        <ul
                            className=" flex flex-col gap-3 w-full "
                            onClick={activeOff}
                        >
                            {navData.map((item) => {
                                return (
                                    <li key={item.name} className="w-full">
                                        <Link
                                            className={` w-full py-3 inline-block hover:border-r-2 hover:border-white transition-all duration-300 `}
                                            href={item.url}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>{" "}
                </>
            )}
        </>
    );
};
