import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
    font-size: 45px;
    text-align: center;
    font-family: 'Quicksand';
    font-weight: 400;
    border-bottom: solid 1.5px black;

    @media (max-width: 600px) {
        font-size: 30px;
    }
`;


interface TitleProps{
    name: string;
}

export default function Title(props: TitleProps) {
    return (
        <StyledTitle>{props.name}</StyledTitle>
        
    );
}