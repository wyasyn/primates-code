import Link from "next/link";
import Logo from "./logo";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { navData } from "./data";

export const Footer = () => {
    return (
        <footer className=" border-t pt-10 mt-auto pb-12 ">
            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
                <Logo />
                <div>
                    <h3 className=" text-lg font-medium mb-2 ">
                        Let&apos;s connect
                    </h3>
                    <ul className=" text-sm font-light flex flex-col gap-1 ">
                        <li>
                            5417 Washington Ave. <br /> Manchester, Kentucky
                            39495
                        </li>
                        <li>michael.mitc@emaple.com</li>
                        <li>(603) 55-0123</li>
                    </ul>
                </div>
                <div>
                    <h3 className=" text-lg font-medium mb-2 ">Links</h3>
                    <ul className=" font-light flex flex-col gap-1 ">
                        {navData.map((item) => (
                            <li
                                key={item.name}
                                className=" hover:underline transition-all duration-300 "
                            >
                                <Link href={item.url}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className=" text-lg font-medium mb-2 ">Follow Us</h3>
                    <ul className=" text-sm font-light flex gap-1 ">
                        <li className=" hover:text-primary transition-all duration-300 ">
                            <Link href={`/`}>
                                <Facebook size={20} />
                            </Link>
                        </li>
                        <li className=" hover:text-primary transition-all duration-300 ">
                            <Link href={`/`}>
                                <Twitter size={20} />
                            </Link>
                        </li>
                        <li className=" hover:text-primary transition-all duration-300 ">
                            <Link href={`/`}>
                                <Instagram size={20} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
