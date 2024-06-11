import React from "react";
import {ReactNode} from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
    margin: 50px 20%;

    @media (max-width: 500px) {
        margin: 0;
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