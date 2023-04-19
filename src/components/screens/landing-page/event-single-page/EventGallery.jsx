import React from 'react'

// Packages
import styled from "styled-components";

// Icons
import underline from "../../../../assets/icons/landing-page/underline.svg";

// Images
import one from "../../../../assets/images/landing-page/events/gallery/one.png"
import two from "../../../../assets/images/landing-page/events/gallery/two.png"
import three from "../../../../assets/images/landing-page/events/gallery/three.png"

export default function EventGallery() {
  return (
    <MainContainer>
            <Top>
                <Box>
                    <Title>
                        Moment <Text>Gallery</Text>
                    </Title>
                    <IconConatiner>
                        <Icon src={underline} alt="Icon" />
                    </IconConatiner>
                </Box>
            </Top>
            <Bottom>
                <ImageContainer>
                    <Image src={one} alt="Image" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={two} alt="Image" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={three} alt="Image" />
                </ImageContainer>
            </Bottom>
        </MainContainer>
  )
}
const MainContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    padding: 50px 0;
`
const Top = styled.div`
    
`
const Box = styled.div`
    position: relative;
    margin-bottom: 20px;
`;
const Title = styled.h2`
    font-family: "dm_sansbold";
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 0.02em;
`;
const Text = styled.span`
    color: #62af84;
`;
const IconConatiner = styled.div`
    width: 100px;
    position: absolute;
    right: 83%;
    bottom: -7px;
`;
const Icon = styled.img`
    display: block;
    width: 100%;
`;
const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-template: 20px;
`
const ImageContainer = styled.div`
    width: 350px;
    margin-right: 20px;

`
const Image = styled.img`
    display: block;
    width: 100%;
`