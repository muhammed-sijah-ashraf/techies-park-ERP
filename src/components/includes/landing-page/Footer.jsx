import React from "react";

// Packages
import styled from "styled-components";

// Icons
import instagram from "../../../assets/icons/landing-page/footer/instagram.svg";
import facebook from "../../../assets/icons/landing-page/footer/facebook.svg";
import twitter from "../../../assets/icons/landing-page/footer/twitter.svg";
import linkedin from "../../../assets/icons/landing-page/footer/linkedin.svg";
import youtube from "../../../assets/icons/landing-page/footer/youtube.svg";

// Images
import footer_logo from "../../../assets/images/landing-page/footer_logo.svg";
import logo_white from "../../../assets/images/landing-page/logo_white.svg";

export default function Footer() {
    return (
        <FooterContainer>
            <LogoWhiteContainer>
                <LogoWhite src={logo_white} alt="Logo" />
            </LogoWhiteContainer>
            <Text>A Project From</Text>
            <LogoContainer>
                <Logo src={footer_logo} alt="Logo" />
            </LogoContainer>
            <Line />
            <IconsContainer>
                <IconContainer>
                    <Icon src={instagram} alt="Instagram" />
                </IconContainer>
                <IconContainer>
                    <Icon src={facebook} alt="Facebook" />
                </IconContainer>
                <IconContainer>
                    <Icon src={twitter} alt="Twitter" />
                </IconContainer>
                <IconContainer>
                    <Icon src={linkedin} alt="Linkedin" />
                </IconContainer>
                <IconContainer>
                    <Icon src={youtube} alt="Youtube" />
                </IconContainer>
            </IconsContainer>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    background: #1E1E1E;
    padding: 50px 0 25px 0;
`;
const LogoWhiteContainer = styled.div`
    width: 250px;
`;
const LogoWhite = styled.img`
    display: block;
    width: 100%;
`;
const Text = styled.p`
    color: #fff;
`;
const LogoContainer = styled.div`
    width: 50px;
    margin-bottom: 10px;
`;
const Logo = styled.img`
    display: block;
    width: 100%;
`;
const Line = styled.div`
    border: 1px solid #303030;
    width: 100%;
`;
const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;
const IconContainer = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    margin-top: 10px;
`;
const Icon = styled.img`
    display: block;
    width: 100%;
`;
