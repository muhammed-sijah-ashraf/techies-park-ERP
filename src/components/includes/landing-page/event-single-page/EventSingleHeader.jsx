import React from "react";

// Packages
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

// icons
import arrow from "../../../../assets/icons/landing-page/left-arrow.svg";

// Images
import logo from "../../../../assets/images/logo.svg";

export default function EventSingleHeader() {
    let navigate = useNavigate();
    return (
        <MainContainer>
            <ArrowContainer
                onClick={() => {
                    navigate("/event-list-page");
                }}
            >
                <Arrow src={arrow} alt="Arrow Icon" />
            </ArrowContainer>
            <LogoContainer>
                <Link to="/landing-page">
                    <Logo src={logo} alt="Logo" />
                </Link>
            </LogoContainer>
        </MainContainer>
    );
}

const MainContainer = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    width: 100%;
    background: #fff;
    position: fixed;
    top: 0;
    padding: 30px 6%;
    z-index: 10;
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 768px) {
        padding: 30px 2% 30px 8%;
        gap: 50px;
    }
    @media all and (max-width: 640px) {
        padding: 30px 0% 30px 8%;
        gap: 50px;
    }
    @media all and (max-width: 480px) {
        padding: 20px 8%;
    }
`;
const ArrowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 15px;
    border-radius: 5px;
    width: 52px;
    border: 1px solid #0fa76f;
    cursor: pointer;
`;
const Arrow = styled.img`
    display: block;
    width: 100%;
`;
const LogoContainer = styled.h1`
    width: 200px;
    @media all and (max-width: 640px) {
        width: 170px;
    }
    @media all and (max-width: 480px) {
        width: 160px;
    }
`;
const Logo = styled.img`
    display: block;
    width: 100%;
`;
