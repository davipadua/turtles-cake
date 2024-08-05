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
        <StyledLink href="https://www.instagram.com/turtles_cake/"><InstagramIcon/></StyledLink>
        <StyledLink href="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%fazer%20um%20pedido!"><WhatsappIcon/></StyledLink>

        <StyledText>
            Turtle’s Cake<br/>
            Santa Rita do Sapucaí<br/>
            Av. Frederico de Paula Cunha n.º 271 - Loja Adonai Camisetas
            
        </StyledText>
    </StyledCotainerFooter>

  );
}
