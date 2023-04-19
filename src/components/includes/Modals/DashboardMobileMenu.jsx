import React from "react";

// Packages
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

// icons
import dashboard from "../../../assets/icons/dashboard/dashboard.svg";
import techies from "../../../assets/icons/dashboard/techies-park.svg";
import logout from "../../../assets/icons/dashboard/logout.svg";
import profile from "../../../assets/icons/dashboard/profile-icon.svg";

export default function DashboardMobileMenu() {
    return (
        <MenuContainer>
            <Top>
                <Link to="/dashboard">
                    <MenuItem>
                        <MenuIconContainer>
                            <MenuIcon src={dashboard} alt="Menu Icon" />
                        </MenuIconContainer>
                        <MenuTittle>Dashboard</MenuTittle>
                    </MenuItem>
                </Link>
                <Link to="/dashboard">
                    <MenuItem>
                        <MenuIconContainer>
                            <MenuIcon src={techies} alt="Menu Icon" />
                        </MenuIconContainer>
                        <MenuTittle>Techies Park</MenuTittle>
                    </MenuItem>
                </Link>

                <MenuItem>
                    <MenuIconContainer>
                        <MenuIcon src={profile} alt="Menu Icon" />
                    </MenuIconContainer>
                    <MenuTittle>Profile</MenuTittle>
                </MenuItem>
            </Top>
            <Bottom>
                <Link to="/">
                    <MenuItem>
                        <MenuIconContainer>
                            <MenuIcon src={logout} alt="Menu Icon" />
                        </MenuIconContainer>
                        <MenuTittle>Log Out</MenuTittle>
                    </MenuItem>
                </Link>
            </Bottom>
        </MenuContainer>
    );
}
const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 225px;
    height: 90vh;
    padding: 0 10px;
    background: #ffffff;
    position: absolute;
    top: 60px;
    left: 0;
    backdrop-filter: blur(10px) grayscale(50%);
    transition: 10s;
`;
const Top = styled.div``;
const Bottom = styled.div``;
const MenuItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 auto;
    margin: 20px 0 20px 5px;
    :hover{
        color: #0fa76f;
    }
`;
const MenuIconContainer = styled.div`
    width: 20px;
`;
const MenuIcon = styled.img`
    display: block;
    width: 100%;
`;
const MenuTittle = styled.h5`
    font-size: 15px;
    line-height: 20px;
`;
