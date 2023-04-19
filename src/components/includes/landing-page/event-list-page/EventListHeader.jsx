import React from "react";

// Packages
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

// Images
import logo from "../../../../assets/images/logo.svg";

export default function EventListHeader() {
    return (
        <MainContainer>
            <LogoContainer>
                <Link to="/landing-page">
                    <Logo src={logo} alt="Logo" />
                </Link>
            </LogoContainer>
            <MenuItems>
                <MenuItem>
                    <Item to="/landing-page">Home</Item>
                </MenuItem>
                <MenuItem>
                    <Item to="/event-list-page">Our Events</Item>
                </MenuItem>
            </MenuItems>
        </MainContainer>
    );
}

const MainContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
const MenuItems = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const MenuItem = styled.li`
    margin-right: 40px;
    :last-child {
        margin-right: 0;
    }
    @media all and (max-width: 768px) {
        text-align: center;
        margin-right: 20px;
        :last-child {
            margin-right: 0;
        }
    }
    @media all and (max-width: 640px) {
        text-align: center;
        margin-right: 10px;
        :last-child {
            margin-right: 0;
        }
    }
`;
const Item = styled(NavLink)`
    font-family: "Gordita Regular" !important;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.02em;
    color: #666666;
    cursor: pointer;
    &.active {
        color: #0fa76f;
    }
    @media all and (max-width: 768px) {
        font-size: 15px;
    }
    @media all and (max-width: 640px) {
        font-size: 14px;
    }
`;