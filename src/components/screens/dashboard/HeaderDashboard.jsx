import React, { useState } from "react";

// Packages
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

// icons
import logo from "../../../assets/images/logo.svg";
import arrow from "../../../assets/icons/dashboard/arrow.svg";
import menubar from "../../../assets/icons/dashboard/menu-bar.svg";
import profile from "../../../assets/icons/dashboard/profile.svg";
import search from "../../../assets/icons/dashboard/search.svg";

// Conponents
import ProfileMenu from "../../includes/Modals/ProfileMenu";
import MobileHeaderDashboard from "../../includes/dashboard/MobileHeaderDashboard";

export default function HeaderDashboard() {
    const [isOpen, setIsOpen] = useState(false);

    const handleArrowClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <HeaderContainer>
                <HeaderLeft>
                    <LogoConatiner>
                        <Logo src={logo} alt="Logo" />
                    </LogoConatiner>
                </HeaderLeft>
                <HeaderRight>
                    <Middle>
                        <MenuIconContainer>
                            <MenuIcon src={menubar} alt="Menu Icon" />
                        </MenuIconContainer>
                        <SearchContainer>
                            <SearchIconContainer>
                                <SearchIcon src={search} alt="Search Icon" />
                            </SearchIconContainer>
                            <SearchInput placeholder="Seacrh Here" />
                        </SearchContainer>
                    </Middle>
                    <Right>
                        <PofileIconContainer>
                            <ProfileIcon src={profile} alt="Profile Icon" />
                        </PofileIconContainer>
                        <ProfileName>Antonia Simran</ProfileName>
                        <ProfileMenuIconContainer onClick={handleArrowClick}>
                            <ProfileMenuIcon src={arrow} alt="Arrow" />
                        </ProfileMenuIconContainer>
                    </Right>
                    {isOpen && <ProfileMenu />}
                </HeaderRight>
            </HeaderContainer>
            <MobileHeaderDashboard />
        </>
    );
}
const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 88px;
    background: #fff;
    height: 60px;
    width: 100%;
    padding: 0px 25px 0px 25px;
    @media all and (max-width: 768px) {
        justify-content: space-between;
    }
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const HeaderLeft = styled.div`
    width: 160px;
    @media all and (max-width: 640px) {
        width: 250px;
    }
`;
const LogoConatiner = styled.h1``;
const Logo = styled.img`
    display: block;
    width: 100%;
`;
const HeaderRight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media all and (max-width: 768px) {
        justify-content: flex-end;
    }
`;
const Middle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media all and (max-width: 768px) {
        display: none;
    }
`;
const MenuIconContainer = styled.div`
    width: 48px;
    height: 48px;
`;
const MenuIcon = styled.img`
    display: block;
    width: 100%;
`;
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #eeeeee;
    padding: 5px 10px;
    border-radius: 8px;

    @media all and (max-width: 640px) {
        display: none;
    }
`;
const SearchIconContainer = styled.div`
    width: 16px;
    height: 16px;
`;
const SearchIcon = styled.img`
    display: block;
    width: 100%;
`;
const SearchInput = styled.input`
    width: 350px;
    font-size: 15px;
    line-height: 22px;
    @media all and (max-width: 920px) {
        width: 200px;
    }
`;
const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const PofileIconContainer = styled.div`
    width: 40px;
    height: 40px;
`;
const ProfileIcon = styled.img`
    display: block;
    width: 100%;
`;
const ProfileName = styled.h2`
    font-family: "THICCOBOI-Regular";
    font-weight: bold;
    font-size: 15px;
    line-height: 28px;
`;
const ProfileMenuIconContainer = styled.div`
    width: 12px;
    height: 6px;
`;
const ProfileMenuIcon = styled.img`
    display: block;
    width: 100%;
`;
