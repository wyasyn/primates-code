import { Terminal } from "lucide-react";
import Link from "next/link";

function Logo() {
    return (
        <Link
            href={`/`}
            className=" text-lg text-heading flex gap-2 hover:gap-3 transition-all duration-300 "
        >
            <span>
                <Terminal className=" text-primary inline-block " />
            </span>
            <span>Code</span>
        </Link>
    );
}

export default Logo;
