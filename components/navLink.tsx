import Link from "next/link";

export default function NavLink({ url, name }: { url: string; name: string }) {
    return (
        <li className=" hover:text-accent transition-all duration-300 ">
            <Link href={url}>{name}</Link>
        </li>
    );
}
