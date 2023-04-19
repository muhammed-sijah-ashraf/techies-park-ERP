import React, { useState } from "react";

// Packages
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// icons
import dashboard from "../../../assets/icons/dashboard/dashboard.svg";
import techies from "../../../assets/icons/dashboard/techies-park.svg";
import location from "../../../assets/icons/dashboard/map-pin.svg";

// Images
import kannur from "../../../assets/images/dashboard/Kannur.png";
import christ from "../../../assets/images/dashboard/Christ.svg";
import jamia from "../../../assets/images/dashboard/Jamia.svg";
import kasargod from "../../../assets/images/dashboard/Kasargod.svg";
import kvups from "../../../assets/images/dashboard/KVUPS.svg";
import lvhs from "../../../assets/images/dashboard/LVHS.svg";

export default function SpotlightDashboard() {
    const [activeLabel, setActiveLabel] = useState("");
    let navigate = useNavigate();

    return (
        <SpotlightContainer>
            <Left>
                <SideBarContainer>
                    <SidebarItem
                        onClick={() => setActiveLabel("dashboard")}
                        className={activeLabel === "dashboard" ? "active" : ""}
                    >
                        <SideBarIconContainer>
                            <SideBarIcon src={dashboard} alt="Icon" />
                        </SideBarIconContainer>
                        <SideBarTittle>Dashboard</SideBarTittle>
                    </SidebarItem>
                    <SidebarItem
                        onClick={() => setActiveLabel("techies")}
                        className={activeLabel === "techies" ? "active" : ""}
                    >
                        <SideBarIconContainer>
                            <SideBarIcon src={techies} alt="Icon" />
                        </SideBarIconContainer>
                        <SideBarTittle>Techies Park</SideBarTittle>
                    </SidebarItem>
                </SideBarContainer>
            </Left>
            <Right>
                <Text>
                    Techies Parks (<StyledText> 17 </StyledText>)
                </Text>
                <TechiesParkContainer>
                    <TechiesPark
                        onClick={() => {
                            navigate("/landing-page");
                        }}
                    >
                        <Top>
                            <TechiesParkImageContainer>
                                <TechiesParkImage
                                    src={kannur}
                                    alt="Techies Park"
                                />
                            </TechiesParkImageContainer>
                        </Top>
                        <Bottom>
                            <TechiesParkAddress>
                                Naher College, KMJ, Kannur Assembly Constituency
                            </TechiesParkAddress>
                            <TechiesParkLocationContainer>
                                <LocationIconContainer>
                                    <LocationIcon
                                        src={location}
                                        alt="Map Pin"
                                    />
                                </LocationIconContainer>
                                <LocationName>Kannur</LocationName>
                            </TechiesParkLocationContainer>
                        </Bottom>
                    </TechiesPark>
                    <TechiesPark
                        onClick={() => {
                            navigate("/landing-page");
                        }}
                    >
                        <Top>
                            <TechiesParkImageContainer>
                                <TechiesParkImage
                                    src={christ}
                                    alt="Techies Park"
                                />
                            </TechiesParkImageContainer>
                        </Top>
                        <Bottom>
                            <TechiesParkAddress>
                                Christ Collage of Engineering, Irinjalakuda
                                Constituency
                            </TechiesParkAddress>
                            <TechiesParkLocationContainer>
                                <LocationIconContainer>
                                    <LocationIcon
                                        src={location}
                                        alt="Map Pin"
                                    />
                                </LocationIconContainer>
                                <LocationName>Irinjalakuda</LocationName>
                            </TechiesParkLocationContainer>
                        </Bottom>
                    </TechiesPark>
                    <TechiesPark
                        onClick={() => {
                            navigate("/landing-page");
                        }}
                    >
                        <Top>
                            <TechiesParkImageContainer>
                                <TechiesParkImage
                                    src={jamia}
                                    alt="Techies Park"
                                />
                            </TechiesParkImageContainer>
                        </Top>
                        <Bottom>
                            <TechiesParkAddress>
                                Jamia Nadwiyya, Eranad Assembly Constituency
                            </TechiesParkAddress>
                            <TechiesParkLocationContainer>
                                <LocationIconContainer>
                                    <LocationIcon
                                        src={location}
                                        alt="Map Pin"
                                    />
                                </LocationIconContainer>
                                <LocationName>Malappuram</LocationName>
                            </TechiesParkLocationContainer>
                        </Bottom>
                    </TechiesPark>
                    <TechiesPark
                        onClick={() => {
                            navigate("/landing-page");
                        }}
                    >
                        <Top>
                            <TechiesParkImageContainer>
                                <TechiesParkImage
                                    src={kvups}
                                    alt="Techies Park"
                                />
                            </TechiesParkImageContainer>
                        </Top>
                        <Bottom>
                            <TechiesParkAddress>
                                KVUPS School, Vamanapuram Assembly Constituency
                            </TechiesParkAddress>
                            <TechiesParkLocationContainer>
                                <LocationIconContainer>
                                    <LocationIcon
                                        src={location}
                                        alt="Map Pin"
                                    />
                                </LocationIconContainer>
                                <LocationName>Thiruvanathapuram</LocationName>
                            </TechiesParkLocationContainer>
                        </Bottom>
                    </TechiesPark>
                    <TechiesPark
                        onClick={() => {
                            navigate("/landing-page");
                        }}
                    >
                        <Top>
                            <TechiesParkImageContainer>
                                <TechiesParkImage
                                    src={kasargod}
                                    alt="Techies Park"
                                />
                            </TechiesParkImageContainer>
                        </Top>
                        <Bottom>
                            <TechiesParkAddress>
                                NA Model School, Kasaragod Assembly Constituency
                            </TechiesParkAddress>
                            <TechiesParkLocationContainer>
                                <LocationIconContainer>
                                    <LocationIcon
                                        src={location}
                                        alt="Map Pin"
                                    />
                                </LocationIconContainer>
                                <LocationName>Kasaragod</LocationName>
                            </TechiesParkLocationContainer>
                        </Bottom>
                    </TechiesPark>
                    <TechiesPark
                        onClick={() => {
                            navigate("/landing-page");
                        }}
                    >
                        <Top>
                            <TechiesParkImageContainer>
                                <TechiesParkImage
                                    src={lvhs}
                                    alt="Techies Park"
                                />
                            </TechiesParkImageContainer>
                        </Top>
                        <Bottom>
                            <TechiesParkAddress>
                                Lekshmi Vilasam High School, Nedumangad Assembly
                                Constituency
                            </TechiesParkAddress>
                            <TechiesParkLocationContainer>
                                <LocationIconContainer>
                                    <LocationIcon
                                        src={location}
                                        alt="Map Pin"
                                    />
                                </LocationIconContainer>
                                <LocationName>Thiruvanathapuram</LocationName>
                            </TechiesParkLocationContainer>
                        </Bottom>
                    </TechiesPark>
                </TechiesParkContainer>
            </Right>
        </SpotlightContainer>
    );
}
const SpotlightContainer = styled.div`
    background: #f4f5fc;
    display: flex;
    flex-direction: row;
`;
const Left = styled.div`
    width: 18%;
    height: auto;
    background: #fff;
    @media all and (max-width: 768px) {
        width: 15%;
    }
    @media all and (max-width: 640px) {
        width: 6%;
    }
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const SideBarContainer = styled.ul``;
const SidebarItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 14px 0 14px 25px;
    &.active {
        background: #f4f5fc;
        color: #247d3d;
    }
    @media all and (max-width: 768px) {
        padding: 10px;
    }
    @media all and (max-width: 640px) {
        display: block;
    }
`;
const SideBarIconContainer = styled.div`
    width: 19px;
    height: 19px;
`;
const SideBarIcon = styled.img`
    display: block;
    width: 100%;
`;
const SideBarTittle = styled.h2`
    font-size: 14px;
    line-height: 20px;
    @media all and (max-width: 768px) {
        font-size: 11px;
    }
    @media all and (max-width: 640px) {
        display: none;
    }
`;
const Right = styled.div`
    background: #fff;
    width: 80%;
    margin: 1.5% 1.5% 0 1.5%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 2%;
    @media all and (max-width: 768px) {
        width: 83%;
    }
    @media all and (max-width: 640px) {
        width: 92%;
    }
    @media all and (max-width: 480px) {
        width: 100%;
        margin: 0;
        padding: 5%;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
`;
const Text = styled.h4`
    font-family: "dm_sansbold";
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 20px;
    @media all and (max-width: 768px) {
        font-size: 15px;
        line-height: 16px;
        margin-bottom: 10px;
    }
`;
const StyledText = styled.span`
    color: #0fa76f;
`;
const TechiesParkContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media all and (max-width: 768px) {
        gap: 10px;
    }
    @media all and (max-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }
    @media all and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
const Top = styled.div`
    width: auto;
    height: auto;
`;
const TechiesParkImageContainer = styled.div`
    overflow: hidden;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;
const TechiesParkImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
`;
const TechiesPark = styled.li`
    display: flex;
    flex-direction: column;

    border: 1px solid #eeeeee;
    border-radius: 8px;
    :hover {
        border-color: #0fa76f;
    }
    &:hover ${TechiesParkImage} {
        transform: scale(1.1);
        transition: transform 0.5s ease-in-out;
    }
`;
const Bottom = styled.div`
    padding: 20px;
    @media all and (max-width: 1180px) {
        padding: 15px;
    }
    @media all and (max-width: 768px) {
        padding: 10px;
    }
`;
const TechiesParkAddress = styled.p`
    font-family: "dm_sansmedium";
    font-size: 15px;
    line-height: 21px;
    text-align: left;
    @media all and (max-width: 1180px) {
        font-size: 14px;
    }
    @media all and (max-width: 1080px) {
        font-size: 12px;
    }
    @media all and (max-width: 980px) {
        font-size: 11px;
    }
    @media all and (max-width: 768px) {
        font-size: 10px;
        line-height: 15px;
    }
    @media all and (max-width: 640px) {
        font-size: 12px;
    }
`;
const TechiesParkLocationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 3px;
    margin-top: 10px;
    @media all and (max-width: 980px) {
        margin-top: 5px;
    }
`;
const LocationIconContainer = styled.div`
    width: 15px;
`;
const LocationIcon = styled.img`
    display: block;
    width: 100%;
`;
const LocationName = styled.h5`
    font-family: "dm_sansmedium";
    font-size: 15px;
    line-height: 21px;
    color: #0fa76f;
    @media all and (max-width: 1180px) {
        font-size: 14px;
    }
    @media all and (max-width: 1080px) {
        font-size: 12px;
    }
    @media all and (max-width: 980px) {
        font-size: 11px;
    }
    @media all and (max-width: 768px) {
        font-size: 10px;
        line-height: 15px;
    }
    @media all and (max-width: 640px) {
        font-size: 12px;
    }
`;
