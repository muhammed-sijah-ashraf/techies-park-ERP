import React from "react";

// Packages
import styled from "styled-components";

// Icons
import locationIcon from "../../../../assets/icons/landing-page/map-pin.svg";
import playIcon from "../../../../assets/icons/landing-page/play.svg";
import player from "../../../../assets/icons/landing-page/player.svg";

// Images
import spotlight from "../../../../assets/images/landing-page/spotlight.svg";

export default function Spotlight() {
    return (
        <MainContainer>
            <SubContainer className="wrapper">
                <Left>
                    <Title>
                        Now we are at <Text>Kannur</Text>
                        <br /> Building a Strong Startup Ecosystem
                    </Title>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Malesuada pellentesque sit faucibus vel tellus pharetra
                        et molestie. Enim in vulputate in parturient diam in
                        vulputatem Lorem ipsum tellus pharetra et molestie.
                    </Description>
                    <LocationConatiner>
                        <IconContainer>
                            <Icon src={locationIcon} alt="Icon" />
                        </IconContainer>
                        <Location>
                            Kannur Techie's Park, Kanhirode, Mattanur
                        </Location>
                    </LocationConatiner>
                    <Button>
                        <Texts>Play Video</Texts>
                        <PlayIconContainer>
                            <PlayIcon src={playIcon} alt="Icon" />
                        </PlayIconContainer>
                    </Button>
                </Left>
                <Right>
                    <BackgroundContainer>
                        <Background src={spotlight} alt="Background" />
                    </BackgroundContainer>
                    <PlayerContainer>
                        <Player src={player} alt="Icon" />
                    </PlayerContainer>
                </Right>
            </SubContainer>
        </MainContainer>
    );
}

const MainContainer = styled.section`
    padding: 200px 0 100px 0;
    background: linear-gradient(284.92deg, #f4f1e9 0%, #ffffff 98.38%);
    @media all and (max-width: 1280px) {
        padding: 150px 0 50px 0;
    }
    @media all and (max-width: 980px) {
        padding: 130px 0 30px 0;
    }
`;
const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 640px) {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
    }
`;
const Left = styled.div`
    width: 68%;
    @media all and (max-width: 1080px) {
        width: 60%;
    }
    @media all and (max-width: 980px) {
        width: 55%;
    }
    @media all and (max-width: 768px) {
        width: 50%;
    }
    @media all and (max-width: 640px) {
        width: 100%;
    }
`;
const Title = styled.h2`
    font-family: "dm_sansbold";
    font-size: 55px;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 30px;
    @media all and (max-width: 1080px) {
        font-size: 45px;
        line-height: 55px;
        margin-bottom: 20px;
    }
    @media all and (max-width: 980px) {
        font-size: 34px;
        line-height: 42px;
        margin-bottom: 10px;
    }
    @media all and (max-width: 768px) {
        font-size: 25px;
        line-height: 30px;
        margin-bottom: 10px;
    }
    @media all and (max-width: 640px) {
        text-align: center;
        font-size: 28px;
        line-height: 32px;
        margin-bottom: 10px;
    }
    @media all and (max-width: 360px) {
        text-align: center;
        font-size: 25px;
        line-height: 32px;
        margin-bottom: 10px;
    }
`;
const Text = styled.span`
    font-family: "dm_sansbold";
    font-style: italic;
    color: #0fa76f;
`;
const Description = styled.p`
    width: 480px;
    font-size: 15px;
    line-height: 22px;
    color: #747474;
    margin-bottom: 30px;
    @media all and (max-width: 1080px) {
        width: 480px;
        font-size: 15px;
        line-height: 20px;
        margin-bottom: 20px;
    }
    @media all and (max-width: 980px) {
        width: 432px;
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 20px;
    }
    @media all and (max-width: 768px) {
        width: 350px;
        font-size: 11px;
        line-height: 18px;
    }
    @media all and (max-width: 640px) {
        text-align: center;
        width: 400px;
        font-size: 15px;
        line-height: 18px;
    }
    @media all and (max-width: 480px) {
        text-align: center;
        width: 100%;
        font-size: 15px;
        line-height: 18px;
    }
    @media all and (max-width: 360px) {
        text-align: center;
        width: 100%;
        font-size: 14px;
        line-height: 17px;
    }
`;
const LocationConatiner = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
    border: 1px solid;
    padding: 8px 15px;
    gap: 10px;
    background: #ffffff;
    border: 1px solid #eeeeee;
    border-radius: 12px;
    margin-bottom: 30px;
    @media all and (max-width: 980px) {
        margin-bottom: 20px;
    }
    @media all and (max-width: 768px) {
        gap: 5px;
        padding: 5px 10px;
        border-radius: 5px;
    }
    @media all and (max-width: 640px) {
        margin: 0 auto 20px;
        gap: 10px;
        padding: 10px 15px;
        border-radius: 5px;
    }
`;
const IconContainer = styled.div`
    width: 24px;
    @media all and (max-width: 980px) {
        width: 19px;
    }
    @media all and (max-width: 768px) {
        width: 15px;
    }
    @media all and (max-width: 640px) {
        width: 20px;
    }
`;
const Icon = styled.img`
    display: block;
    width: 100%;
`;
const Location = styled.p`
    font-family: "dm_sansmedium";
    font-size: 16px;
    @media all and (max-width: 980px) {
        font-size: 14px;
    }
    @media all and (max-width: 768px) {
        font-size: 10px;
    }
    @media all and (max-width: 640px) {
        font-size: 14px;
    }
`;
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 36px;
    gap: 10px;
    background: #0fa76f;
    border-radius: 6px;
    margin-bottom: 30px;
    @media all and (max-width: 980px) {
        padding: 10px 30px;
        margin-bottom: 20px;
    }
    @media all and (max-width: 768px) {
        padding: 8px 20px;
        margin-bottom: 20px;
    }
    @media all and (max-width: 640px) {
        margin: 0 auto 20px;
        padding: 10px 25px;
        margin-bottom: 20px;
    }
`;
const Texts = styled.p`
    color: #fff;
`;
const Right = styled.div`
    position: relative;
`;
const PlayIconContainer = styled.div`
    width: 20px;
`;
const PlayIcon = styled.img`
    display: block;
    width: 100%;
`;
const BackgroundContainer = styled.div`
    position: absolute;
    width: 840px;
    right: -110px;
    bottom: -100px;
    @media all and (max-width: 1280px) {
        width: 650px;
        right: -85px;
        bottom: -48px;
    }
    @media all and (max-width: 1080px) {
        width: 585px;
        right: -78px;
        bottom: -51px;
    }
    @media all and (max-width: 980px) {
        width: 480px;
        right: -32px;
        bottom: -30px;
    }
    @media all and (max-width: 850px) {
        width: 400px;
        right: -61px;
        bottom: -30px;
    }
    @media all and (max-width: 768px) {
        width: 455px;
        right: -60px;
        bottom: -29px;
    }
    @media all and (max-width: 640px) {
        position: static;
        width: 425px;
        margin-bottom: 20px;
    }
    @media all and (max-width: 480px) {
        position: static;
        width: 330px;
        margin-bottom: 20px;
    }
    @media all and (max-width: 360px) {
        position: static;
        width: 290px;
        margin-bottom: 20px;
    }
`;
const Background = styled.img`
    display: block;
    width: 100%;
`;
const PlayerContainer = styled.div`
    background-color: rgb(15, 167, 111, 0.5);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    position: absolute;
    right: 225px;
    bottom: 110px;
    @media all and (max-width: 1280px) {
        width: 130px;
        height: 130px;
        right: 180px;
        bottom: 40px;
    }
    @media all and (max-width: 1080px) {
        width: 120px;
        height: 120px;
        right: 150px;
        bottom: 80px;
    }
    @media all and (max-width: 980px) {
        width: 90px;
        height: 90px;
        right: 160px;
        bottom: 95px;
    }
    @media all and (max-width: 850px) {
        width: 90px;
        height: 90px;
        right: 93px;
        bottom: 50px;
    }
    @media all and (max-width: 768px) {
        width: 80px;
        height: 80px;
        right: 95px;
        bottom: 50px;
    }
    @media all and (max-width: 640px) {
        width: 100px;
        height: 100px;
        right: 160px;
        bottom: 125px;
    }
    @media all and (max-width: 480px) {
        width: 70px;
        height: 70px;
        right: 125px;
        bottom: 110px;
    }
    @media all and (max-width: 360px) {
        width: 60px;
        height: 60px;
        right: 110px;
        bottom: 100px;
    }
`;
const Player = styled.img`
    display: block;
    width: 60%;
    height: 60%;
    opacity: 1 !important;
`;
