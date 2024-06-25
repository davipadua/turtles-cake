import React from "react";
import styled from "styled-components";

import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsappIcon from '@mui/icons-material/WhatsApp';



const StyledCotainerFooter = styled.div`
    background-color: #404040;
    padding: 25px 0;
    text-align: center;
    color: white;
    font-family: 'Roboto', sans-serif;
`

const StyledLink = styled.a`
    text-decoration: none;
    color: white;
    padding: 0 10px;

`

const StyledText = styled.p`

`

interface FooterProps {
  
}

export default function Footer(props: FooterProps) {
  return (
    <StyledCotainerFooter>
        <StyledLink href="#"><InstagramIcon/></StyledLink>
        <StyledLink href="#"><WhatsappIcon/></StyledLink>

        <StyledText>
            Turtle’s Cake<br/>
            Santa Rita do Sapucaí<br/>
            Rua Maria da Conceição Ribeiro n.º 100
        </StyledText>
    </StyledCotainerFooter>

  );
}
