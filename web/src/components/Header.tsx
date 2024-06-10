import React from "react";
import { ReactNode } from "react";
import styled from "styled-components"
import LogoImg from "../assets/logo-img.png"
import { Link } from "react-router-dom";



const StyledContainer = styled.div`
    background-color: #9EC09F;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px
`;

const StyledImage = styled.img`
    width: 150px;
    padding: 0px;
`;

const StyledTitle = styled.h1`
    color: white;
    margin: 0;
    font-size: 50px;
    font-family: Roboto;
    font-weight: 400;
`;

const StyledNavBar = styled.div`
    border-bottom: 1px solid black;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Adicionando sombra */
    width: auto;
    background-color: white;
    padding: 15px 100%;
    margin: 0;
    display: flex;
`
const StyledMenuItems = styled(Link)`
    display: inline-block;
    padding: 4px 0;
    width: 175px;
    text-align: center;
    font-family: Roboto;
    text-decoration: none;
    color: black;
    transition: 0.4s ease;

    &:hover {
        
        color: #9EC09F;
      }
`

// interface ContainerProps {
//     children: ReactNode;
// }

export default function Container() {
    return (
        <StyledContainer>
            <StyledImage src={LogoImg}/>

            <StyledTitle>Turtle’s Cake</StyledTitle>

            <StyledNavBar>
                <StyledMenuItems to={"/"}>Bolos</StyledMenuItems>
                <StyledMenuItems to={"/tortas"}>Tortas</StyledMenuItems>
                <StyledMenuItems to={"/doces"}>Doces</StyledMenuItems>
                <StyledMenuItems to={"/fidelidade"}>Fidelidade</StyledMenuItems>
                <StyledMenuItems to={"sobre-nos"}>Sobre Nós</StyledMenuItems>

            </StyledNavBar>
            
        </StyledContainer>
    )
}
