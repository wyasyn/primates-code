import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className=" flex flex-col min-h-dvh ">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
