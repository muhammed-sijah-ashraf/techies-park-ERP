import React from "react";

// Packages
import styled from "styled-components";

// Images
import border from "../../../../assets/images/landing-page/events/border.svg";
import businessMeet from "../../../../assets/images/landing-page/events/business meet.png";

export default function EventSingleSpotlight() {
    return (
        <MainContainer>
            <FlexContainer>
                <Left>
                    <Title>
                        Ex-Minister and current MLA of the Kannur Assembly
                        Constituency, Mr Kadannappalli Ramachandran visited
                        Talrop's Techies Park
                    </Title>
                    <Container>
                        <Number>01</Number>
                        <Description>
                            As part of Talrop's Invest in Kerala campaign, a
                            business meeting was organised on 28th August at
                            Kannur.The event was held at Talrop's Techies Park,
                            NAHER Arts and Science College, Kanhirode, Kannur
                            and many potential Angel Investors took part in the
                            meeting. Talked about the needs and opportunities of
                            Angel Investors in a startup and the risks &
                            benefits of Angel Investing were also discussed. A
                            detailed overview of Talrop's mission and investment
                            opportunities in Talrop's startups were discussed.
                        </Description>
                        <Text>
                            “Business meeting organised on the 28th August at
                            Kannur”
                        </Text>
                    </Container>
                </Left>
                <Right>
                    <BorderContainer>
                        <Border src={border} alt="Border" />
                    </BorderContainer>
                    <ImageContainer>
                        <Image src={businessMeet} alt="Business Meet" />
                    </ImageContainer>
                </Right>
            </FlexContainer>
        </MainContainer>
    );
}
const MainContainer = styled.div`
    background: #fcfbf8;
    padding-top: 150px;
    padding-bottom: 50px;
`;
const FlexContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    width: 50%;
`;
const Title = styled.h3`
    font-family: "dm_sansmedium";
    font-size: 29px;
    line-height: 40px;
    letter-spacing: 0.02em;
    margin-bottom: 20px;
`;
const Container = styled.div`
    width: 86%;
    padding: 0 30px;
`;
const Number = styled.h5`
    color: #0fa76f;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 0.02em;
    margin-bottom: 15px;
`;
const Description = styled.p`
    font-size: 15px;
    line-height: 20px;
    color: #5a5a5a;
    margin-bottom: 20px;
`;
const Text = styled.p`
    font-size: 16px;
    line-height: 31px;
    font-weight: bold;
`;
const Right = styled.div`
    width: 50%;
`;
const BorderContainer = styled.div`
    position: relative;
    width: 500px;
    margin-left: 100px;
`;
const Border = styled.img`
    display: block;
    width: 100%;
`;
const ImageContainer = styled.div`
    position: absolute;
    top: 185px;
    right: 125px;
    width: 500px;
`;
const Image = styled.img`
    display: block;
    width: 100%;
`;
