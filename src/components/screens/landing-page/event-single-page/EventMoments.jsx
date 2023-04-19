import React from "react";

// Packages
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Icons
import underline from "../../../../assets/icons/landing-page/underline.svg";
import arrow from "../../../../assets/icons/landing-page/arrow.svg";

// Images
import eventOne from "../../../../assets/images/landing-page/events/event-one.svg";
import eventTwo from "../../../../assets/images/landing-page/events/event-two.svg";
import eventThree from "../../../../assets/images/landing-page/events/event-three.svg";

export default function EventMoments() {
    let navigate = useNavigate();

    return (
        <Container>
            <MainContainer>
                <Top>
                    <Box>
                        <Title>
                            Similar <Text>Moments</Text>
                        </Title>
                        <IconConatiner>
                            <Icon src={underline} alt="Icon" />
                        </IconConatiner>
                    </Box>
                </Top>
                <Bottom>
                <EventsContainer>
                    <EventContainer>
                        <EventImageContainer>
                            <EventImage src={eventOne} alt="Meeting Image" />
                        </EventImageContainer>
                        <EventDate>Aug. 25, 2022</EventDate>
                        <EventTitle>
                            Ex-Minister and current MLA of the Kannur Assembly
                            Constituency, Mr Kadannappalli Ramachandran visited
                            Talrop's Techies Park
                        </EventTitle>
                        <EventDescription>
                            As part of Talrop's Invest in Kerala campaign, a
                            business meeting was organised on 28th August at
                            Kannur.The event was held at Talrop's Techies Park,
                            NAHER Arts and Science College, Kanhirode, Kannur
                            and many potential Angel Investors took part in the
                            meeting. Talked about the needs and opportunities of
                            Angel Investors in a startup and the risks &
                            benefits of Angel Investing were also discussed. A
                            detailed overview of Talrop's mission...
                        </EventDescription>
                        <Button
                            onClick={() => {
                                navigate("/event-list-page");
                            }}
                        >
                            <Texts>View More</Texts>
                            <ArrowIconContainer>
                                <ArrowIcon src={arrow} alt="Icon" />
                            </ArrowIconContainer>
                        </Button>
                    </EventContainer>
                    <EventContainer>
                        <EventImageContainer>
                            <EventImage src={eventTwo} alt="Meeting Image" />
                        </EventImageContainer>
                        <EventDate>Aug. 25, 2022</EventDate>
                        <EventTitle>
                            Ex-Minister and current MLA of the Kannur Assembly
                            Constituency, Mr Kadannappalli Ramachandran visited
                            Talrop's Techies Park
                        </EventTitle>
                        <EventDescription>
                            As part of Talrop's Invest in Kerala campaign, a
                            business meeting was organised on 28th August at
                            Kannur.The event was held at Talrop's Techies Park,
                            NAHER Arts and Science College, Kanhirode, Kannur
                            and many potential Angel Investors took part in the
                            meeting. Talked about the needs and opportunities of
                            Angel Investors in a startup and the risks &
                            benefits of Angel Investing were also discussed. A
                            detailed overview of Talrop's mission...
                        </EventDescription>
                        <Button
                            onClick={() => {
                                navigate("/event-list-page");
                            }}
                        >
                            <Texts>View More</Texts>
                            <ArrowIconContainer>
                                <ArrowIcon src={arrow} alt="Icon" />
                            </ArrowIconContainer>
                        </Button>
                    </EventContainer>
                    <EventContainer>
                        <EventImageContainer>
                            <EventImage src={eventThree} alt="Meeting Image" />
                        </EventImageContainer>
                        <EventDate>Aug. 25, 2022</EventDate>
                        <EventTitle>
                            Ex-Minister and current MLA of the Kannur Assembly
                            Constituency, Mr Kadannappalli Ramachandran visited
                            Talrop's Techies Park
                        </EventTitle>
                        <EventDescription>
                            As part of Talrop's Invest in Kerala campaign, a
                            business meeting was organised on 28th August at
                            Kannur.The event was held at Talrop's Techies Park,
                            NAHER Arts and Science College, Kanhirode, Kannur
                            and many potential Angel Investors took part in the
                            meeting. Talked about the needs and opportunities of
                            Angel Investors in a startup and the risks &
                            benefits of Angel Investing were also discussed. A
                            detailed overview of Talrop's mission...
                        </EventDescription>
                        <Button
                            onClick={() => {
                                navigate("/event-list-page");
                            }}
                        >
                            <Texts>View More</Texts>
                            <ArrowIconContainer>
                                <ArrowIcon src={arrow} alt="Icon" />
                            </ArrowIconContainer>
                        </Button>
                    </EventContainer>
                    </EventsContainer>
                </Bottom>
            </MainContainer>
        </Container>
    );
}
const Container = styled.div`
    background: #FCFBF8;
    padding: 50px 0;
` 
const MainContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    padding: 50px 0;
`;
const Top = styled.div`
    margin-bottom: 30px;
`;
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
const Bottom = styled.div``;
const EventsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-bottom: 80px;
    > *:nth-child(6n + 4),
    > *:nth-child(6n + 5),
    > *:nth-child(6n + 6) {
        background: #fff9fb;
        border: 1px solid #ffd3e2;
    }
    @media all and (max-width: 980px) {
        grid-template-columns: repeat(2, 1fr);
        > *:nth-child(6n + 5),
        > *:nth-child(6n + 6),
        > *:nth-child(6n + 9) {
            background: #f6fff9;
            border: 1px solid #b8f2ca;
        }
        > *:nth-child(6n + 3),
        > *:nth-child(6n + 4),
        > *:nth-child(6n + 7),
        > *:nth-child(6n + 8) {
            background: #fff9fb;
            border: 1px solid #ffd3e2;
        }
    }
    @media all and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        > *:nth-child(2n +2) {
            background: #fff9fb;
            border: 1px solid #ffd3e2;
        }
        > *:nth-child(2n + 1) {
            background: #f6fff9;
            border: 1px solid #b8f2ca;
        }
    }
`;
const EventContainer = styled.li`
    background: #f6fff9;
    padding: 20px;
    border: 1px solid #b8f2ca;
    border-radius: 10px;
`;
const EventImageContainer = styled.div`
    width: auto;
    height: auto;
    margin-bottom: 20px;
`;
const EventImage = styled.img`
    display: block;
    width: 100%;
`;
const EventDate = styled.h5`
    color: #0fa76f;
    font-size: 13px;
    line-height: 13px;
    letter-spacing: 0.02em;
    padding: 8px 10px;
    gap: 8px;
    border: 1px solid #0fa76f;
    border-radius: 6px;
    display: inline-block;
    margin-bottom: 15px;
`;
const EventTitle = styled.h4`
    font-size: 19px;
    line-height: 25px;
    letter-spacing: 0.02em;
    margin-bottom: 20px;
`;
const EventDescription = styled.p`
    font-size: 13px;
    line-height: 23px;
    letter-spacing: 0.02em;
    color: #5a5a5a;
`;
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 25px;
    gap: 10px;
    background: #0fa76f;
    border-radius: 6px;
    margin-top: 60px;
    box-sizing: border-box;
    cursor: pointer;
    @media all and (max-width: 360px) {
        padding: 5px 10px;
        gap: 5px;
    }
`;
const Texts = styled.p`
    color: #fff;
    letter-spacing: 0.02em;
    font-family: "dm_sansmedium";
    @media all and (max-width: 360px) {
        font-size: 14px;
    }
`;
const ArrowWhiteIcon = styled.img`
    display: none;
`;
const ArrowIconContainer = styled.div`
    width: 7px;
    @media all and (max-width: 360px) {
        width: 6px;
    }
`;
const ArrowIcon = styled.img`
    display: block;
    width: 100%;
`;
