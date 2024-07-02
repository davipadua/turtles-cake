import React from "react";
import styled from "styled-components";
import LogoImg from "../assets/logo-img.png";
import { Link } from "react-router-dom";

const StyledContainer = styled.div`
    background-color: #9EC09F;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
`;

const StyledImage = styled.img`
    width: 150px;
`;

const StyledTitle = styled.h1`
    color: white;
    font-size: 40px;
    font-family: Roboto;
    font-weight: 400;
    margin: 10px 0 25px;
`;

const StyledNavBar = styled.div`
    border-bottom: 1px solid black;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
`;

const StyledMenuItems = styled(Link)`
    display: block;
    padding: 10px 5px 10px 0;
    text-align: center;
    font-family: Roboto;
    text-decoration: none;
    color: black;
    transition: 0.4s ease;
    flex: 1;

    &:hover {
        color: #9EC09F;
    }

    @media (max-width: 500px) {
        font-size: 13px;
        
    }
`;

export default function Container() {
    return (
        <StyledContainer>
            <StyledImage src={LogoImg} alt="Logo" />
            <StyledTitle>Turtle’s Cake</StyledTitle>
            <StyledNavBar>
                <StyledMenuItems to={"/"}>Bolos</StyledMenuItems>
                <StyledMenuItems to={"/tortas"}>Tortas</StyledMenuItems>
                <StyledMenuItems to={"/sobremesas"}>Sobremesas</StyledMenuItems>
                <StyledMenuItems to={"/fidelidade"}>Fidelidade</StyledMenuItems>
                <StyledMenuItems to={"/sobre-nos"}>Sobre Nós</StyledMenuItems>
            </StyledNavBar>
        </StyledContainer>
    );
}