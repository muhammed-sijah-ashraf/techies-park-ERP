import React from "react";

// Packages
import styled from "styled-components";
import { Link } from "react-router-dom";

// icons
import profile from "../../../assets/icons/dashboard/profile-icon.svg";
import logout from "../../../assets/icons/dashboard/logout.svg";

export default function ProfileMenu() {
    return (
        <ProfileItems>
            <ProfileItem>
                <ProfileIconContainer>
                    <ProfileIcon src={profile} alt="Profile Icon" />
                </ProfileIconContainer>
                <ProfileTittle>Profile</ProfileTittle>
            </ProfileItem>
            <ProfileItem>
                <ProfileIconContainer>
                    <Link to="/">
                        <ProfileIcon src={logout} alt="Logout Icon" />
                    </Link>
                </ProfileIconContainer>
                <ProfileTittle>
                    <Link to="/">Logout</Link>
                </ProfileTittle>
            </ProfileItem>
        </ProfileItems>
    );
}
const ProfileItems = styled.div`
    width: 200px;
    height: 100px;
    background: #ffffff;
    box-shadow: 0px 5px 9px rgba(136, 136, 136, 0.25);
    border-radius: 6px;
    position: absolute;
    top: 75px;
    right: 25px;
`;
const ProfileItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 80%;
    margin: 0 auto;
    height: 50px;
    border-bottom: 1px solid #eeeeee;
`;
const ProfileIconContainer = styled.div``;
const ProfileIcon = styled.img`
    display: block;
    width: 100%;
`;
const ProfileTittle = styled.h5``;
