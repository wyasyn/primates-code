import React from "react";
import { trustedCompanies } from "./data";

function TrustedCompanies() {
    return (
        <div className=" mt-10 md:mt-16 text-center ">
            <small>Trusted by 30+ businesses</small>
            <div className=" mt-5 md:mt-8 flex items-center gap-2 justify-center flex-wrap ">
                {trustedCompanies.map((item) => (
                    <div
                        className=" px-8 border py-2 rounded-lg hover:bg-foreground capitalize transition-all duration-300 group flex items-center gap-2  "
                        key={item.name}
                    >
                        <span className=" transition-all duration-300 group-hover:text-primary ">
                            {item.icon}
                        </span>
                        <h2 className="font-semibold transition-all duration-300 group-hover:text-primary ">
                            {item.name}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TrustedCompanies;
