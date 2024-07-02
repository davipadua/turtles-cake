import React from "react";
import {ReactNode} from "react"
import styled from "styled-components"


const StyledP = styled.p`
    font-family: 'Roboto', sans-serif;

`

const StyledImg = styled.img`
    width: 125px;
`




interface ContainerProps {
    children: ReactNode;
    img: string;
}

export default function FidelityCard(props : ContainerProps) {
    return (
        <>
            <StyledImg src={props.img} alt="programa fidelidade"/>
            <StyledP>
                Na compra de qualquer produto, você ganha uma tartaruginha igual a da foto.<br/>
                Juntando 10 tartaruguinhas você troca por uma deliciosa Turtle de limão.
            </StyledP>
            
            
        
        </>
        
    )
}







