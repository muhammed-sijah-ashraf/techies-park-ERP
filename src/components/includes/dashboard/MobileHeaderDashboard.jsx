import React, { useState } from "react";

// Packages
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

// icons
import logo from "../../../assets/images/logo.svg";
import menubar from "../../../assets/icons/dashboard/menu-bar.svg";
import search from "../../../assets/icons/dashboard/search.svg";
import MobileMenu from "../Modals/MobileMenu";
import DashboardMobileMenu from "../Modals/DashboardMobileMenu";

export default function MobileHeaderDashboard() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <HeaderContainer>
            <MenuIconContainer onClick={handleMenuClick}>
                <MenuIcon src={menubar} alt="Menu Icon" />
                {isOpen && <DashboardMobileMenu />}
            </MenuIconContainer>

            <LogoConatiner>
                <Logo src={logo} alt="Logo" />
            </LogoConatiner>

            <SearchIconContainer>
                <SearchIcon src={search} alt="Search Icon" />
            </SearchIconContainer>
        </HeaderContainer>
    );
}
const HeaderContainer = styled.div`
    display: none;
    justify-content: space-between;
    align-items: center;
    max-width: 480px;
    width: 100%;
    height: 60px;
    padding: 0 10px;
    border-bottom: 1px solid #eee;

    @media all and (max-width: 480px) {
        display: flex;
    }
`;
const MenuIconContainer = styled.div`
    width: 45px;
    height: 45px;
    transform: translateX(0);
    transition-delay: 0.5s;
`;
const MenuIcon = styled.img`
    display: block;
    width: 100%;
`;
const LogoConatiner = styled.div`
    width: 160px;
`;
const Logo = styled.img`
    display: block;
    width: 100%;
`;
const SearchIconContainer = styled.div`
    width: 25px;
    height: 25px;
`;
const SearchIcon = styled.img`
    display: block;
    width: 100%;
`;
