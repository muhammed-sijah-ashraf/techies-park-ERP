import React from "react";

// Packages
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Icons
import underline from "../../../../assets/icons/landing-page/underline.svg";
import arrow from "../../../../assets/icons/landing-page/arrow.svg";

// Images
import meetingOne from "../../../../assets/images/landing-page/events/meetingOne.png";
import meetingTwo from "../../../../assets/images/landing-page/events/meetingTwo.png";
import meetingThree from "../../../../assets/images/landing-page/events/meetingThree.png";

export default function Events() {
    let navigate = useNavigate()

    return (
        <MainContainer>
            <Top className="wrapper">
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
            </Top>
            <Middile className="wrapper">
                <EventContainer>
                    <Left>
                        <EventName>
                            Business meeting organised on the 28th August at
                            Kannur
                        </EventName>
                        <EventDate>Aug. 25, 2022</EventDate>
                        <EventDetails className="first_paragraph">
                            As part of Talrop's Invest in Kerala campaign, a
                            business meeting was organised on 28th August at
                            Kannur.The event was held at Talrop's Techies Park,
                            NAHER Arts and Science College, Kanhirode, Kannur
                            and many potential Angel Investors took part in the
                            meeting. Talked about the needs and opportunities of
                            Angel Investors in a startup and the risks &
                            benefits o...
                        </EventDetails>
                        <Container>
                            <Button onClick={() => {navigate("/event-list-page")}}>
                                <Texts>View More</Texts>
                                <ArrowIconContainer>
                                    <ArrowIcon src={arrow} alt="Icon" />
                                </ArrowIconContainer>
                            </Button>
                            <Number>01</Number>
                        </Container>
                    </Left>
                    <Right>
                        <EventImageConatiner>
                            <EventImage src={meetingOne} alt="Meeting Image" />
                        </EventImageConatiner>
                    </Right>
                </EventContainer>
                <EventContainer>
                    <Right>
                        <EventImageConatiner>
                            <EventImage src={meetingTwo} alt="Meeting Image" />
                        </EventImageConatiner>
                    </Right>
                    <Left>
                        <EventName>
                            MLA Mr. Sunny Joseph visited Talrop's recently
                            established Techies Park on NAHER Arts and Science
                            College
                        </EventName>
                        <EventDate className="date">Aug. 25, 2022</EventDate>
                        <EventDetails>
                            Talrop's Techies Park at the NAHER Arts & Science
                            College under KMJ Management were visited by MLA Mr.
                            Sunny Joseph, Peravoor Assembly Constituency in
                            Kannur District.In order to strengthen Kerala's
                            startup ecosystem, he also pledged his complete
                            support for Talrop's initiatives in the Peravoor
                            Assembly Constituency, including the implementation
                            of...
                        </EventDetails>
                        <Container>
                            <Button onClick={() => {navigate("/event-list-page")}}>
                                <Texts>View More</Texts>
                                <ArrowIconContainer>
                                    <ArrowIcon src={arrow} alt="Icon" />
                                </ArrowIconContainer>
                            </Button>
                            <Number className="secondNumber">02</Number>
                        </Container>
                    </Left>
                </EventContainer>
                <EventContainer>
                    <Left>
                        <EventName>
                            The Inspector of Police Mr Sibeesh VP of Kannur
                            Chakkarakal station, inaugurated the Cyber Month
                            programs
                        </EventName>
                        <EventDate className="date">Aug. 25, 2022</EventDate>
                        <EventDetails>
                            Cyber Month program at Talrop's new Techies Park at
                            NAHER Arts and Science College campus of Kannur
                            Assembly Constituency was inaugurated by the
                            Inspector of Police, Mr Sibeesh VP of Chakkarakal
                            station, Kannur.As part of Cyber Month, a lot of
                            free programs suitable for every group of people are
                            organised at Techies Park. Community...
                        </EventDetails>
                        <Container>
                            <Button onClick={() => {navigate("/event-list-page")}}>
                                <Texts>View More</Texts>
                                <ArrowIconContainer>
                                    <ArrowIcon src={arrow} alt="Icon" />
                                </ArrowIconContainer>
                            </Button>
                            <Number>03</Number>
                        </Container>
                    </Left>
                    <Right>
                        <EventImageConatiner>
                            <EventImage
                                src={meetingThree}
                                alt="Meeting Image"
                            />
                        </EventImageConatiner>
                    </Right>
                </EventContainer>
            </Middile>
            <Bottom className="wrapper">
                <Button className="button" onClick={() => {navigate("/event-list-page")}}>
                    <Texts>View More Events</Texts>
                    <ArrowIconContainer>
                        <ArrowIcon src={arrow} alt="Icon" />
                    </ArrowIconContainer>
                </Button>
            </Bottom>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    background: #fcfbf8;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media all and (max-width: 768px) {
        padding-top: 80px;
    }
    @media all and (max-width: 640px) {
        padding-top: 60px;
    }
    @media all and (max-width: 480px) {
        padding-top: 40px;
    }
    @media all and (max-width: 360px) {
        padding-top: 30px;
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
    right: 42%;
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
    width: 67%;
    margin: 0 auto;
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

const Middile = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;
const EventContainer = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    background: #fff6f9;
    padding: 40px;
    border-radius: 7px;
    :nth-child(2) {
        background: #f1fcff;
    }
    .secondNumber {
        color: #e2f7fd;
    }
    @media all and (max-width: 768px) {
        flex-direction: column-reverse;
        :nth-child(2) {
            flex-direction: column;
        }
    }
    @media all and (max-width: 480px) {
        padding: 10px;
    }
`;
const Left = styled.div`
    width: 52%;
    @media all and (max-width: 768px) {
        width: 90%;
        margin-top: 20px;
    }
    @media all and (max-width: 480px) {
        width: 100%;
    }
`;
const EventName = styled.h3`
    font-family: "dm_sansbold";
    font-size: 19px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 8px;
    @media all and (max-width: 480px) {
        font-size: 15px;
        line-height: 20px;
    }
    @media all and (max-width: 360px) {
        font-size: 14px;
        margin-bottom: 5px;
    }
`;
const EventDate = styled.h4`
    font-family: "dm_sansmedium";
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: #adadad;
    margin-bottom: 25px;
    &.date {
        margin-bottom: 15px;
    }
    @media all and (max-width: 980px) {
        margin-bottom: 15px;
    }
    @media all and (max-width: 360px) {
        margin-bottom: 10px;
        font-size: 13px;
        line-height: 15px;
        &.date {
            margin-bottom: 10px;
        }
    }
`;
const EventDetails = styled.p`
    font-family: "dm_sansregular";
    font-size: 14px;
    line-height: 23px;
    color: #747474;
    margin-bottom: 15%;
    &.first_paragraph {
        margin-bottom: 20%;
    }
    @media all and (max-width: 1280px) {
        margin-bottom: 10%;
        &.first_paragraph {
            margin-bottom: 13%;
        }
    }
    @media all and (max-width: 980px) {
        margin-bottom: 15%;
        &.first_paragraph {
            margin-bottom: 10%;
        }
        line-height: 20px;
    }
    @media all and (max-width: 480px) {
        font-size: 12px;
        line-height: 19px;
    }
    @media all and (max-width: 360px) {
        font-size: 11px;
        line-height: 18px;
        margin-bottom: 5%;
    }
`;
const Container = styled.div`
    display: flex;
    position: relative;
`;
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 25px;
    gap: 10px;
    background: #0fa76f;
    border-radius: 6px;
    width: 149px;
    height: 46px;
    box-sizing: border-box;
    cursor: pointer;
    @media all and (max-width: 360px) {
        padding: 5px 10px;
        width: 120px;
        height: 35px;
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
const ArrowIconContainer = styled.div`
    width: 7px;
    @media all and (max-width: 360px) {
        width: 6px
    }
`;
const ArrowIcon = styled.img`
    display: block;
    width: 100%;
`;
const Number = styled.span`
    font-family: "dm_sansbold";
    font-style: italic;
    font-size: 120px;
    line-height: 150px;
    letter-spacing: 0.02em;
    color: #ffedf3;
    position: absolute;
    right: 17px;
    bottom: -33px;
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const Right = styled.div`
    width: 42%;
    @media all and (max-width: 1380px) {
        width: 46%;
    }
    @media all and (max-width: 768px) {
        width: 75%;
    }
    @media all and (max-width: 480px) {
        width: 99%;
    }
`;
const EventImageConatiner = styled.div``;
const EventImage = styled.img`
    display: block;
    width: 100%;
`;
const Bottom = styled.div`
    margin: 30px 0 100px 0;
    .button {
        width: 206px;
        height: 44px;
        margin: 0 auto;
    }
    @media all and (max-width: 360px) {
        margin-bottom: 40px;
        .button{
            width: 180px;
            height: 38px;
        }
    }
`;
