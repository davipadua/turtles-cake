import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
    font-size: 40px;
    text-align: center;
    font-family: 'Roboto';
    font-weight: 300;
    border-bottom: solid 1.5px black;

    @media (max-width: 500px) {
        font-size: 25px;
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