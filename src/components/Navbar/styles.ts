import styled from "styled-components";

export const Container = styled.div `
    background-color: #4651A4;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    left: 0;
    top: 0;
    font-family: 'Roboto', sans-serif;
    height: 90px;
    z-index: 100;
`;

export const LogoContainer = styled.div `
    display: flex;
    align-items: center;

    & img {
        height: 50px;
    }
`;

export const LogoName = styled.h1 `
    font-family: 'Montserrat', sans-serif;
    color: white;
    font-size:36px;
    font-weight: 400;
`;

export const MenuContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 18px;

    & ul {
        display: flex;
        flex-direction: row;
    }

    & li {
        list-style-type: none;
    }

    & a {
        text-decoration: none;
        color: white;
        margin-right: 2vw;
    }
`;

export const Btn2Via = styled.button `
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: white;
    background-color: #009FE3;
    border-width: 0;
    padding: 13px 34px 13px 34px;
    border-radius: 30px;
    margin-right: 1vw;
`;

export const BtnGetIn = styled.button `
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: white;
    background-color: transparent;
    padding: 11px 49px 11px 49px;
    border-radius: 30px;
    border-style: solid;
    border-color: #F98100;
`;