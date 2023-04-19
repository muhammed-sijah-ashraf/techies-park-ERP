import React from "react";

// Componenets
import EventListHeader from "../../../includes/landing-page/event-list-page/EventListHeader";
import EventListSection from "./EventListSection";
import Footer from "../../../includes/landing-page/Footer.jsx"

export default function EventListHome() {
    return (
        <>
            <EventListHeader />
            <EventListSection />
            <Footer />
        </>
    );
}
