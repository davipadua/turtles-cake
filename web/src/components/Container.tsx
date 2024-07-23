import React from "react";
import {ReactNode} from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
    margin: 250px 20% 50px 20%;
    flex: 1;

    
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