import Link from "next/link";
import Logo from "./logo";
import NavLink from "./navLink";
import { MobileMenu } from "./mobileMenu";
import { navData } from "./data";

export default function Navbar() {
    return (
        <header className=" border-t border-b py-4 ">
            <nav className=" container flex items-center justify-between gap-4 ">
                <Logo />
                <ul className=" hidden md:flex items-center justify-center gap-8 text-sm ">
                    {navData.map((item) => (
                        <NavLink key={item.name} {...item} />
                    ))}
                </ul>
                <Link
                    href={`/contact`}
                    className=" bg-primary px-3 py-1 capitalize hover:bg-accent transition-all duration-300 rounded-md hidden md:flex text-white "
                >
                    <button>Let&apos;s Talk</button>
                </Link>
                <MobileMenu />
            </nav>
        </header>
    );
}
