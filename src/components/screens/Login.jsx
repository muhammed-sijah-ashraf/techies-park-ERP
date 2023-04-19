import React, { useState } from "react";

// Packages
import styled from "styled-components";

// Icons
import talrop_logo from "../../assets/icons/login-page/talrop_logo.svg";
import eye from "../../assets/icons/login-page/Eye.svg";
import masked_eye from "../../assets/icons/login-page/Hide.svg";

// Images
import logo from "../../assets/images/logo.svg";
import login_protrait from "../../assets/images/login-page/login_protrait.png";
import login_landscape from "../../assets/images/login-page/login_landscape.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
    // eslint-disable-next-line
    const [userdata, setUserdata] = useState({ username: "", password: "" });
    const [hide, setHide] = useState(false);
    const [activeLabel, setActiveLabel] = useState("");

    let navigate = useNavigate();

    return (
        <MainContainer>
            <Left>
                <LeftText>Techies Park</LeftText>
                <LeftDescription>
                    Techies park is a technology and entrepreneurship hub, a
                    project from Talrop. To build a strong startup ecosystem and
                    accelerate startups, Talrop is establishing Techies Parks in
                    all 140 Assembly constituencies of Kerala.
                </LeftDescription>
            </Left>
            <Right>
                <LogoContainer>
                    <Logo src={talrop_logo} alt="Logo" />
                </LogoContainer>
                <TextLogoContainer>
                    <TextLogo src={logo} alt="Logo" />
                </TextLogoContainer>
                <Title>
                    An Project from <HighlightText>Talrop</HighlightText>
                </Title>
                <Text>
                    To aid the development of a strong startup ecosystem in our
                    state, Talrop has designed Techies park
                </Text>
                <LoginForm>
                    <LoginInputContainer>
                        <InputLabel
                            className={activeLabel === "click" ? "active" : ""}
                        >
                            Username
                        </InputLabel>
                        <LoginInput
                            className={activeLabel === "click" ? "active" : ""}
                        >
                            <InputArea
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
                                required
                                onChange={(e) =>
                                    (userdata.username = e.target.value)
                                }
                                onBlur={() => setActiveLabel("")}
                                onFocus={() => setActiveLabel("click")}
                            />
                        </LoginInput>
                    </LoginInputContainer>
                    <LoginInputContainer>
                        <InputLabel
                            className={activeLabel === "focus" ? "active" : ""}
                        >
                            Password
                        </InputLabel>
                        <LoginInput
                            className={activeLabel === "focus" ? "active" : ""}
                        >
                            <InputArea
                                type={!hide ? "password" : "text"}
                                id="password"
                                name="password"
                                placeholder="Password"
                                required
                                onChange={(e) =>
                                    (userdata.password = e.target.value)
                                }
                                onBlur={() => setActiveLabel("")}
                                onFocus={() => setActiveLabel("focus")}
                            />
                            <EyeIcon onClick={() => setHide(!hide)}>
                                {!hide ? (
                                    <Eye src={eye} alt="Icon" />
                                ) : (
                                    <Mask src={masked_eye} alt="Icon" />
                                )}
                            </EyeIcon>
                        </LoginInput>
                    </LoginInputContainer>
                    <LoginCheckBoxContainer>
                        <CheckBox
                            type="checkbox"
                            id="checkbox"
                            name="checkbox"
                            value="Agree"
                            required
                        />
                        <CheckBoxLabel>Keep me signed in</CheckBoxLabel>
                    </LoginCheckBoxContainer>
                    <Submit
                        type="submit"
                        onClick={() => {
                            if (!userdata.username) {
                                alert("Enter Username");
                            } else if (!userdata.password) {
                                alert("Enter Password");
                            } else {
                                navigate("/dashboard");
                            }
                        }}
                    >
                        Log in
                    </Submit>
                </LoginForm>
            </Right>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media all and (max-width: 768px) {
        flex-direction: column-reverse;
        align-items: center;
        gap: 50px;
    }
`;
const Left = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: end;
    background: url(${login_protrait});
    background-size: cover;
    @media all and (max-width: 768px) {
        width: 100%;
        background: url(${login_landscape});
        background-size: contain;
        background-repeat: no-repeat;
        height: 75vh;
    }
    @media all and (max-width: 640px) {
        height: 62vh;
    }
    @media all and (max-width: 480px) {
        height: 47vh;
    }
    @media all and (max-width: 420px) {
        height: 33vh;
    }
    @media all and (max-width: 360px) {
        height: 25vh;
    }
    @media all and (max-width: 320px) {
        height: 21vh;
    }
`;
const LeftText = styled.h4`
    width: 80%;
    margin: 0 auto;
    font-family: "dm_sansmedium";
    font-size: 30px;
    line-height: 40px;
    color: #fff;
    @media all and (max-width: 640px) {
        font-size: 25px;
    }
    @media all and (max-width: 480px) {
        font-size: 20px;
        width: 90%;
    }
`;
const LeftDescription = styled.p`
    width: 80%;
    margin: 0 auto;
    font-family: "dm_sansregular";
    font-size: 18px;
    line-height: 23px;
    color: #d4d4d4;
    margin-bottom: 10%;
    @media all and (max-width: 640px) {
        font-size: 16px;
        margin-bottom: 8%;
    }
    @media all and (max-width: 480px) {
        font-size: 14px;
        width: 90%;
        margin-bottom: 5%;
    }
`;
const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media all and (max-width: 768px) {
        width: 100%;
        margin-top: 50px;
    }
    @media all and (max-width: 480px) {
        margin-top: 30px;
    }
`;
const LogoContainer = styled.div`
    width: 50px;
    margin-bottom: 20px;
    @media all and (max-width: 480px) {
        width: 45px;
        margin-bottom: 15px;
    }
`;
const Logo = styled.img`
    display: block;
    width: 100%;
`;
const TextLogoContainer = styled.div`
    width: 160px;
    margin-bottom: 10px;
    @media all and (max-width: 480px) {
        width: 130px;
    }
`;
const TextLogo = styled.img`
    display: block;
    width: 100%;
`;
const Title = styled.h3`
    font-family: "dm_sansregular";
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 20px;

    @media all and (max-width: 480px) {
        font-size: 12px;
        margin-bottom: 15px;
    }
`;
const HighlightText = styled.span`
    color: #1a987c;
`;
const Text = styled.p`
    text-align: center;
    width: 55%;
    margin: 0 auto;
    font-family: "dm_sansregular";
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 6%;
    color: #747474;

    @media all and (max-width: 480px) {
        width: 80%;
        font-size: 13px;
        margin-bottom: 5%;
    }
`;
const LoginForm = styled.form`
    width: 55%;

    @media all and (max-width: 480px) {
        width: 80%;
    }
`;
const LoginInputContainer = styled.div`
    width: 100%;
`;
const InputLabel = styled.label`
    font-family: "dm_sansregular";
    font-size: 14px;
    line-height: 30px;
    color: #fff;
    margin-left: 10px;
    &.active {
        color: #4d4d4d;
    }
`;
const LoginInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #fff;
    background: #f4f5fc;
    padding: 15px 15px;
    border-radius: 5px;
    &.active {
        border: 1px solid #247d3d;
        background: #fff;
    }
`;
const InputArea = styled.input`
    ::placeholder {
        color: #adadad;
    }
`;
const EyeIcon = styled.div`
    width: 17px;
    cursor: pointer;
`;
const Mask = styled.img`
    display: block;
    width: 100%;
`;
const Eye = styled.img`
    display: block;
    width: 100%;
`;
const LoginCheckBoxContainer = styled.div`
    display: flex;
    margin: 11px 0 0 10px;
`;
const CheckBox = styled.input`
    display: inline-block;
    height: 15px;
    width: 15px;
    margin-right: 7px;
    accent-color: #247d3d;
`;
const CheckBoxLabel = styled.label`
    font-size: 13px;
`;
const Submit = styled.button`
    padding: 10px 50px;
    width: 100%;
    background: #247d3d;
    border-radius: 6px;
    color: #fff;
    margin-top: 15%;
    @media all and (max-width: 480px) {
        margin-top: 10%;
    }
`;
