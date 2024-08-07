import React from "react";
import styled from "styled-components";

const StyledP = styled.p`

    font-family: 'Work Sans';
    font-size: 16px;
    
    @media (max-width: 850px) {
        font-size: 13px;
    }
`;


interface TitleProps{
    name: string;
}

export default function PComponent(props: TitleProps) {
    return (
        <StyledP>{props.name}</StyledP>
        
    );
}