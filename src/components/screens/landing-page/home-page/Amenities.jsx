import React from "react";

// Packages
import styled from "styled-components";

// Icons
import underline from "../../../../assets/icons/landing-page/underline.svg";
import image from "../../../../assets/icons/landing-page/image_icon.svg";

// Images
import conference from "../../../../assets/images/landing-page/amenities/1.svg";
import admin from "../../../../assets/images/landing-page/amenities/2.svg";
import presentation from "../../../../assets/images/landing-page/amenities/3.svg";
import work from "../../../../assets/images/landing-page/amenities/4.svg";
import dinig from "../../../../assets/images/landing-page/amenities/6.svg";
import wash from "../../../../assets/images/landing-page/amenities/7.svg";
import toilet from "../../../../assets/images/landing-page/amenities/8.svg";
import other from "../../../../assets/images/landing-page/amenities/9.svg";

export default function Amenities() {
    return (
        <MainContainer className="wrapper">
            <Top>
                <Box>
                    <Title>
                        Our <Text>Amenities</Text>
                    </Title>
                    <IconConatiner>
                        <Icon src={underline} alt="Icon" />
                    </IconConatiner>
                </Box>
                <Description>
                    Techies Park is a world-class infrastructure with premium
                    amenities to promote education and entrepreneurship and
                    thereby aid overall development of the constituency.
                </Description>
            </Top>
            <Bottom>
                <GalleryContainer>
                    <ImagesContainer>
                        <ImageContainer>
                            <Image src={conference} alt="Conference Room" />
                        </ImageContainer>
                        <Count>1/7</Count>
                        <Name>Conference Room</Name>
                        <Hovering>
                            <IconBox>
                                <ImageIcon src={image} alt="Image Icon" />
                            </IconBox>
                            <HoveringText>+7 More Images</HoveringText>
                        </Hovering>
                    </ImagesContainer>
                    <ImagesContainer>
                        <ImageContainer>
                            <Image src={admin} alt="Administrative Cabin" />
                        </ImageContainer>
                        <Count>1/7</Count>
                        <Name>Administrative Cabin</Name>
                        <Hovering>
                            <IconBox>
                                <ImageIcon src={image} alt="Image Icon" />
                            </IconBox>
                            <HoveringText>+7 More Images</HoveringText>
                        </Hovering>
                    </ImagesContainer>
                    <ImagesContainer>
                        <ImageContainer>
                            <Image src={presentation} alt="Presentation Hall" />
                        </ImageContainer>
                        <Count>1/7</Count>
                        <Name>Presentation Hall</Name>
                        <Hovering>
                            <IconBox>
                                <ImageIcon src={image} alt="Image Icon" />
                            </IconBox>
                            <HoveringText>+7 More Images</HoveringText>
                        </Hovering>
                    </ImagesContainer>
                    <ImagesContainer>
                        <ImageContainer>
                            <Image src={work} alt="Work Station" />
                        </ImageContainer>
                        <Count>1/7</Count>
                        <Name>Work Station</Name>
                        <Hovering>
                            <IconBox>
                                <ImageIcon src={image} alt="Image Icon" />
                            </IconBox>
                            <HoveringText>+7 More Images</HoveringText>
                        </Hovering>
                    </ImagesContainer>
                    <ImagesContainer>
                        <ImageContainer>
                            <Image src={conference} alt="Conference Room" />
                        </ImageContainer>
                        <Count>1/7</Count>
                        <Name>Conference Room</Name>
                        <Hovering>
                            <IconBox>
                                <ImageIcon src={image} alt="Image Icon" />
                            </IconBox>
                            <HoveringText>+7 More Images</HoveringText>
                        </Hovering>
                    </ImagesContainer>
                    <ImagesContainer>
                        <ImageContainer>
                            <Image src={dinig} alt="Dining Space" />
                        </ImageContainer>
                        <Count>1/7</Count>
                        <Name>Dining Space</Name>
                        <Hovering>
                            <IconBox>
                                <ImageIcon src={image} alt="Image Icon" />
                            </IconBox>
                            <HoveringText>+7 More Images</HoveringText>
                        </Hovering>
                    </ImagesContainer>
                    <ImagesContainer>
                        <ImageContainer>
                            <Image src={wash} alt="Wash Room" />
                        </ImageContainer>
                        <Count>1/7</Count>
                        <Name>Wash Room</Name>
                        <Hovering>
                            <IconBox>
                                <ImageIcon src={image} alt="Image Icon" />
                            </IconBox>
                            <HoveringText>+7 More Images</HoveringText>
                        </Hovering>
                    </ImagesContainer>
                    <ImagesContainer>
                        <ImageContainer>
                            <Image src={toilet} alt="Toilet" />
                        </ImageContainer>
                        <Count>1/7</Count>
                        <Name>Toilet</Name>
                        <Hovering>
                            <IconBox>
                                <ImageIcon src={image} alt="Image Icon" />
                            </IconBox>
                            <HoveringText>+7 More Images</HoveringText>
                        </Hovering>
                    </ImagesContainer>
                    <ImagesContainer>
                        <ImageContainer>
                            <Image src={other} alt="Amenities Image" />
                        </ImageContainer>
                        <Count>1/7</Count>
                        <Name>Others</Name>
                        <Hovering>
                            <IconBox>
                                <ImageIcon src={image} alt="Image Icon" />
                            </IconBox>
                            <HoveringText>+7 More Images</HoveringText>
                        </Hovering>
                    </ImagesContainer>
                </GalleryContainer>
            </Bottom>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Top = styled.div`
    text-align: center;
    margin-bottom: 40px;
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
const IconConatiner = styled.div`
    width: 100px;
    position: absolute;
    right: 40%;
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
        right: 36%;
    }
    @media all and (max-width: 880px) {
        right: 35%;
    }
    @media all and (max-width: 820px) {
        right: 34%;
    }
    @media all and (max-width: 780px) {
        right: 32%;
    }
    @media all and (max-width: 700px) {
        right: 31%;
    }
    @media all and (max-width: 650px) {
        right: 30%;
    }
    @media all and (max-width: 600px) {
        right: 28%;
    }
    @media all and (max-width: 550px) {
        right: 26%;
    }
    @media all and (max-width: 500px) {
        right: 24%;
    }
    @media all and (max-width: 450px) {
        right: 22%;
    }
    @media all and (max-width: 400px) {
        right: 17%;
    }
    @media all and (max-width: 350px) {
        right: 12%;
    }
    @media all and (max-width: 300px) {
        right: 8%;
    }
`;
const Icon = styled.img`
    display: block;
    width: 100%;
`;
const Description = styled.p`
    color: #747474;
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 0.02em;
    width: 70%;
    margin: 0 auto;
    @media all and (max-width: 1080px) {
        width: 90%;
    }
    @media all and (max-width: 980px) {
        width: 90%;
    }
    @media all and (max-width: 768px) {
        width: 90%;
    }
    @media all and (max-width: 640px) {
        width: 90%;
    }
`;
const Bottom = styled.div`
    margin-bottom: 100px;
`;
const GalleryContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    @media all and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media all and (max-width: 640px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
const Name = styled.h3`
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
    position: absolute;
    margin-bottom: 22px;
`;
const Hovering = styled.div`
    position: absolute;
    display: none;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-bottom: 22px;
`;
const HoveringText = styled.p`
    color: #fff;
    font-size: 14px;
    line-height: 18px;
    text-decoration: underline;
`;
const ImagesContainer = styled.li`
    position: relative;
    padding: 10px;
    background: #f9f9f9;
    border-radius: 8px;
    width: 300px;
    height: 209px;
    display: flex;
    justify-content: center;
    align-items: end;
    &:hover ${Name} {
        display: none;
    }
    &:hover ${Hovering} {
        display: flex;
    }
`;
const ImageContainer = styled.div``;
const Image = styled.img`
    display: block;
    width: 100%;
`;
const Count = styled.div`
    color: #fff;
    font-size: 13px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3px 16px;
    gap: 10px;
    position: absolute;
    right: 0px;
    top: 0px;
    margin: 20px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 50px;
`;

const IconBox = styled.div`
    width: 17px;
`;
const ImageIcon = styled.img`
    display: block;
    width: 100%;
`;
