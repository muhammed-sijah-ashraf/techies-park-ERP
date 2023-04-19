import React from "react";

// Components
import Footer from "../../../includes/landing-page/Footer";
import Header from "../../../includes/landing-page/Header";
import Amenities from "./Amenities";
import Events from "./Events";
import Revenue from "./Revenue";
import Spotlight from "./Spotlight";

export default function LandingpageHome() {
    return (
        <>
            <Header />
            <Spotlight />
            <Amenities />
            <Events />
            <Revenue />
            <Footer />
        </>
    );
}
