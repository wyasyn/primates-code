"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tool-tip";
import { TestimonialData } from "./data";

export function AnimatedTooltipCard() {
    return (
        <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={TestimonialData} />
        </div>
    );
}
