import React from "react";

// Packages
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Icons
import underline from "../../../../assets/icons/landing-page/underline.svg";
import arrow from "../../../../assets/icons/landing-page/arrow.svg";
import arrowGreen from "../../../../assets/icons/landing-page/arrow-green.svg";
import search from "../../../../assets/icons/landing-page/search.svg";

// Images
import eventTwo from "../../../../assets/images/landing-page/events/event-two.svg";
import eventThree from "../../../../assets/images/landing-page/events/event-three.svg";

export default function EventListSection() {
    let navigate = useNavigate();

    return (
        <MainContainer>
            <Top>
                <Box>
                    <Title>
                        Our <Text>Events</Text>
                    </Title>
                    <IconConatiner>
                        <Icon src={underline} alt="Icon" />
                    </IconConatiner>
                </Box>
                <Description>
                    Several events are being organised by Talrop and its
                    startups in Techies Parks to support entrepreneurship and
                    technological education. Techies Parks is a venue that is
                    open to both governmental and non-governmental
                    organisations.
                </Description>
                <SearchContainer>
                    <SearchIconContainer>
                        <SearchIcon src={search} alt="Search Icon" />
                    </SearchIconContainer>
                    <SearchInput placeholder="Seacrh Events Here..." />
                </SearchContainer>
            </Top>
            <Bottom>
                <EventsContainer>
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
                                navigate("/event-single-page");
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
                                navigate("/event-single-page");
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
                                navigate("/event-single-page");
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
                            Business meeting organised on the 28th August at
                            Kannur
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
                                navigate("/event-single-page");
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
                            Business meeting organised on the 28th August at
                            Kannur
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
                                navigate("/event-single-page");
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
                            Business meeting organised on the 28th August at
                            Kannur
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
                                navigate("/event-single-page");
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
                            Business meeting organised on the 28th August at
                            Kannur
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
                                navigate("/event-single-page");
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
                            Business meeting organised on the 28th August at
                            Kannur
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
                                navigate("/event-single-page");
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
                            Business meeting organised on the 28th August at
                            Kannur
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
                                navigate("/event-single-page");
                            }}
                        >
                            <Texts>View More</Texts>
                            <ArrowIconContainer>
                                <ArrowIcon src={arrow} alt="Icon" />
                            </ArrowIconContainer>
                        </Button>
                    </EventContainer>
                </EventsContainer>
                <PageNumberContainer>
                    <PageNumber>1</PageNumber>
                    <PageNumber>2</PageNumber>
                    <PageNumber>3</PageNumber>
                    <PageNumber>
                        <ArrowIconContainer>
                            <ArrowWhiteIcon src={arrow} alt="Arrow Icon" />
                            <ArrowGreenIcon src={arrowGreen} alt="Arrow Icon" />
                        </ArrowIconContainer>
                    </PageNumber>
                </PageNumberContainer>
            </Bottom>
        </MainContainer>
    );
}
const MainContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1200px;
    padding-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media all and (max-width: 768px) {
        padding-top: 160px;
    }
    @media all and (max-width: 640px) {
        padding-top: 120px;
    }
    @media all and (max-width: 480px) {
        padding-top: 80px;
    }
    @media all and (max-width: 360px) {
        padding-top: 60px;
    }
`;
const Top = styled.div`
    text-align: center;
    margin-bottom: 40px;
    @media all and (max-width: 480px) {
        margin-bottom: 20px;
    }
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
    right: 43%;
    bottom: -5px;
    @media all and (max-width: 1280px) {
        right: 42%;
    }
    @media all and (max-width: 1180px) {
        right: 41%;
    }
    @media all and (max-width: 1080px) {
        right: 40%;
    }
    @media all and (max-width: 980px) {
        right: 39%;
    }
    @media all and (max-width: 880px) {
        right: 38%;
    }
    @media all and (max-width: 820px) {
        right: 37%;
    }
    @media all and (max-width: 780px) {
        right: 36%;
    }
    @media all and (max-width: 700px) {
        right: 35%;
    }
    @media all and (max-width: 650px) {
        right: 34%;
    }
    @media all and (max-width: 600px) {
        right: 32%;
    }
    @media all and (max-width: 550px) {
        right: 31%;
    }
    @media all and (max-width: 500px) {
        right: 30%;
    }
    @media all and (max-width: 450px) {
        right: 28%;
    }
    @media all and (max-width: 400px) {
        right: 26%;
    }
    @media all and (max-width: 360px) {
        right: 23%;
    }
    @media all and (max-width: 300px) {
        right: 20%;
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
    width: 66%;
    margin: 0 auto;
    margin-bottom: 30px;
    @media all and (max-width: 480px) {
        width: 90%;
        font-size: 14px;
        line-height: 22px;
    }
    @media all and (max-width: 360px) {
        font-size: 12px;
        line-height: 20px;
    }
`;
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 350px;
    border: 1px solid #eeeeee;
    padding: 10px;
    border-radius: 8px;
    margin: 0 auto;
`;
const SearchIconContainer = styled.div`
    width: 16px;
    height: 16px;
`;
const SearchIcon = styled.img`
    display: block;
    width: 100%;
`;
const SearchInput = styled.input`
    width: 100%;
    font-size: 15px;
    line-height: 22px;
    color: #adadad;
    opacity: 0.5;
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
        > *:nth-child(2n + 2) {
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
const PageNumberContainer = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 50px;
`;
const ArrowGreenIcon = styled.img`
    display: block;
    width: 100%;
`;
const PageNumber = styled.li`
    padding: 10px;
    width: 40px;
    height: 40px;
    border: 1px solid #0fa76f;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0fa76f;
    font-weight: bold;
    :hover {
        background: #0fa76f;
        color: #fff;
    }
    :hover ${ArrowGreenIcon} {
        display: none;
    }
    :hover ${ArrowWhiteIcon} {
        display: block;
        width: 100%;
    }
`;
