import React from "react";

// Packages
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function MobileMenu() {
    return (
        <MainConatiner>
            <Nav to="/">Home</Nav>
            <Nav to="/amenities">Amenities</Nav>
            <Nav to="/events">Events</Nav>
            <Nav to="/revenue">Revenue Models</Nav>
            <Button>Go to dashboard</Button>
        </MainConatiner>
    );
}

const MainConatiner = styled.div`
    background: #fff;
    position: absolute;
    top: 102%;
    left: 0%;
    backdrop-filter: blur(100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    height: 50vh;
    width: 100%;
    margin: 0 auto;
`;
const Nav = styled(Link)`
    font-family: "Gordita Regular" !important;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.02em;
    color: #666666;
    cursor: pointer;
    &:hover {
        color: #0fa76f;
    }
`;
const Button = styled.button`
    font-family: "Gordita";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.02em;
    padding: 12px 30px;
    background: #0fa76f;
    border-radius: 6px;
    color: #fff;
`;
