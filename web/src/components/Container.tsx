import React from "react";
import {ReactNode} from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
    margin: 250px 20% 50px 20%;
    flex: 1;

    @media (max-width: 850px) {
        margin: 250px 10% 50px 10%;
    }

    @media (max-width: 600px) {
        margin: 170px 10% 50px 10%;
    }

    
`;

interface ContainerProps {
    children: ReactNode;
}

export default function Container(props : ContainerProps) {
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}