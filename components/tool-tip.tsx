"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tool-tip";
import { TestimonialData } from "./data";

export function AnimatedTooltipCard() {
    return (
        <div className="flex flex-row items-center justify-center">
            <AnimatedTooltip items={TestimonialData} />
        </div>
    );
}
