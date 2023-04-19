import React from "react";

// Packages
import styled from "styled-components";

// Icons
import underline from "../../../../assets/icons/landing-page/underline.svg";
import money_green from "../../../../assets/icons/landing-page/revenue/money_green.svg";
import money_white from "../../../../assets/icons/landing-page/revenue/money_white.svg";
import rocket_green from "../../../../assets/icons/landing-page/revenue/rocket_green.svg";
import rocket_white from "../../../../assets/icons/landing-page/revenue/rocket_white.svg";
import desk_green from "../../../../assets/icons/landing-page/revenue/desk_green.svg";
import desk_white from "../../../../assets/icons/landing-page/revenue/desk_white.svg";
import graph_green from "../../../../assets/icons/landing-page/revenue/graph_green.svg";
import graph_white from "../../../../assets/icons/landing-page/revenue/graph_white.svg";

export default function Revenue() {
    return (
        <MainContainer className="wrapper">
            <Top>
                <Box>
                    <Title>
                        Revenue <Text>Models</Text>
                    </Title>
                    <UnderlineConatiner>
                        <Underline src={underline} alt="Icon" />
                    </UnderlineConatiner>
                </Box>
                <Description>
                    To build a strong startup ecosystem and accelerate startups,
                    Talrop is establishing Techies Parks in all 140 Assembly
                    constituencies of Kerala. 7 of them are already established
                    and remaining 133 will be done by the end of 2024.
                </Description>
            </Top>
            <Bottom>
                <RevenueModelContainer>
                    <IconContainer>
                        <GreenIcon src={money_green} alt="Icon" />
                        <WhiteIcon src={money_white} alt="Icon" />
                    </IconContainer>
                    <RevenueModelName>Course Fee</RevenueModelName>
                    <RevenueModelDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nec id lectus malesuada massa facilisi tempor. Dui est
                        et eget in lorem turpis eros dignissim.
                    </RevenueModelDescription>
                </RevenueModelContainer>
                <RevenueModelContainer>
                    <IconContainer>
                        <GreenIcon src={rocket_green} alt="Icon" />
                        <WhiteIcon src={rocket_white} alt="Icon" />
                    </IconContainer>
                    <RevenueModelName>Startup</RevenueModelName>
                    <RevenueModelDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nec id lectus malesuada massa facilisi tempor. Dui est
                        et eget in lorem turpis eros dignissim.
                    </RevenueModelDescription>
                </RevenueModelContainer>
                <RevenueModelContainer>
                    <IconContainer>
                        <GreenIcon src={desk_green} alt="Icon" />
                        <WhiteIcon src={desk_white} alt="Icon" />
                    </IconContainer>
                    <RevenueModelName>Co-Working Space</RevenueModelName>
                    <RevenueModelDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nec id lectus malesuada massa facilisi tempor. Dui est
                        et eget in lorem turpis eros dignissim.
                    </RevenueModelDescription>
                </RevenueModelContainer>
                <RevenueModelContainer>
                    <IconContainer>
                        <GreenIcon src={graph_green} alt="Icon" />
                        <WhiteIcon src={graph_white} alt="Icon" />
                    </IconContainer>
                    <RevenueModelName>Startup Revenue</RevenueModelName>
                    <RevenueModelDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nec id lectus malesuada massa facilisi tempor. Dui est
                        et eget in lorem turpis eros dignissim.
                    </RevenueModelDescription>
                </RevenueModelContainer>
            </Bottom>
        </MainContainer>
    );
}
const MainContainer = styled.div`
    padding-top: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Top = styled.div`
    text-align: center;
    margin-bottom: 20px;
`;
const Box = styled.div`
    position: relative;
    margin-bottom: 20px;
`;
const Title = styled.h2`
    font-family: "dm_sansbold";
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 0.02em;
`;
const Text = styled.span`
    color: #62af84;
`;
const UnderlineConatiner = styled.div`
    width: 100px;
    position: absolute;
    right: 39%;
    bottom: -5px;
    @media all and (max-width: 1280px) {
        right: 39%;
    }
    @media all and (max-width: 1180px) {
        right: 38%;
    }
    @media all and (max-width: 1080px) {
        right: 37%;
    }
    @media all and (max-width: 980px) {
        right: 35%;
    }
    @media all and (max-width: 880px) {
        right: 34%;
    }
    @media all and (max-width: 820px) {
        right: 33%;
    }
    @media all and (max-width: 780px) {
        right: 31%;
    }
    @media all and (max-width: 700px) {
        right: 30%;
    }
    @media all and (max-width: 650px) {
        right: 29%;
    }
    @media all and (max-width: 600px) {
        right: 28%;
    }
    @media all and (max-width: 550px) {
        right: 26%;
    }
    @media all and (max-width: 500px) {
        right: 20%;
    }
    @media all and (max-width: 450px) {
        right: 28%;
    }
    @media all and (max-width: 400px) {
        right: 10%;
    }
    @media all and (max-width: 350px) {
        right: 7%;
    }
    @media all and (max-width: 300px) {
        right: 4%;
    }
`;
const Underline = styled.img`
    display: block;
    width: 100%;
`;
const Description = styled.p`
    color: #747474;
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 0.02em;
    margin: 0 auto;
    width: 65%;
    @media all and (max-width: 980px) {
        width: 90%;
    }
`;
const Bottom = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 100px;
    @media all and (max-width: 1280px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media all and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media all and (max-width: 450px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
const IconContainer = styled.div`
    width: 25px;
    margin-bottom: 12px;
`;
const GreenIcon = styled.img`
    display: block;
    width: 100%;
`;
const WhiteIcon = styled.img`
    display: none;
    width: 100%;
`;
const RevenueModelName = styled.h5`
    font-family: "dm_sansbold";
    margin-bottom: 13px;
`;
const RevenueModelDescription = styled.p`
    color: #747474;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.02em;
`;
const RevenueModelContainer = styled.li`
    border: 1px solid #eeeeee;
    border-radius: 8px;
    padding: 20px;
    :hover {
        background: linear-gradient(90deg, #0fa76f 2%, #21c487 97.59%);
    }
    &:hover ${GreenIcon} {
        display: none;
    }
    &:hover ${WhiteIcon} {
        display: block;
    }
    &:hover ${RevenueModelName} {
        color: #fff;
    }
    &:hover ${RevenueModelDescription} {
        color: #fff;
    }
    @media all and (max-width: 980px) {

    }
    @media all and (max-width: 768px) {

    }
`;
