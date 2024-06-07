import { BentoGridSecondComponent } from "@/components/bento-grid-component";
import { DirectionAwareHoverDemo } from "@/components/direction-aware-demo";

import Hero from "@/components/hero";

export default function page() {
    return (
        <>
            <Hero />
            <BentoGridSecondComponent />
            <DirectionAwareHoverDemo />
        </>
    );
}
