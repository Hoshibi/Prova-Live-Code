import styled from "styled-components";

export const Container = styled.div `
    font-family: "Segoe UI";
    width: 40vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: end;
`;

export const TextContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 10vh;
`;

export const BorderText = styled.h1 `
    color: transparent; 
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
    font-size:4.27vw;
`;

export const BackgroundText = styled.h1 `
    color: #fff; 
    font-size: 3.2vw;
    font-weight: 400;
`

export const BtnYellow = styled.button `
    background-color: #F98100;
    border-width: 0;
    border-radius: 15px;
    font-size: 20px;
    font-weight: 300;
    color: white;
    width: 350px;
    height: 80px;
    margin-top: 48px;
`