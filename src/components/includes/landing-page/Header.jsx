import React, { useState } from "react";

// Packages
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

// Images
import logo from "../../../assets/images/logo.svg";

// Components
import MobileMenu from "../Modals/MobileMenu";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

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
                    <Item to="/amenities">Our Amenities</Item>
                </MenuItem>
                <MenuItem>
                    <Item to="/events">Our Events</Item>
                </MenuItem>
                <MenuItem>
                    <Item to="/revenue">Revenue Models</Item>
                </MenuItem>
            </MenuItems>
            <MenuIcon>
                <Button onClick={handleMenuClick}>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                </Button>
            </MenuIcon>
            {isOpen && <MobileMenu />}
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
    padding: 40px 8%;
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

const MenuIcon = styled.div`
    position: relative;
    display: none;
    @media all and (max-width: 480px) {
        display: block;
    }
`;
const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 1.5rem;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
`;
const Line = styled.span`
    display: block;
    width: 2rem;
    height: 4px;
    background-color: #247d3d;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
    :first-child {
        transform: translateY(-6px);
    }
    :last-child {
        transform: translateY(6px);
    }
`;
const Menu = styled.nav``;
