import React from "react";
import EventSingleHeader from "../../../includes/landing-page/event-single-page/EventSingleHeader";
import Footer from "../../../includes/landing-page/Footer";
import EventGallery from "./EventGallery";
import EventMoments from "./EventMoments";
import EventSingleSpotlight from "./EventSingleSpotlight";

export default function EventSingleHome() {
    return (
        <>
            <EventSingleHeader />
            <EventSingleSpotlight />
            <EventGallery />
            <EventMoments />
            <Footer />
        </>
    );
}
