import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: white;
  padding: 20px;
  border-bottom: 1.5px dashed;
  font-family: 'Roboto', sans-serif;
`;

const StyledContentCard = styled.div`
  display: flex;

  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`;

const StyledTitle = styled.p`
  font-size: 25px;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 10px;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const StyledImgCard = styled.img`
  background-color: #f0f0f0;
  width: 200px;
  margin: 0 20px 20px 0;
`;

const StyledTextCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const StyledTextContent = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  margin: 0 0 10px 0;

  @media (max-width: 500px) {
        
    }
`;

const StyledPriceAndButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledPrice = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: bold;
`;

const StyledLink = styled.a`
  background-color: #62CC79;
  border-radius: 5px;
  padding: 10px;
  color: white;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  display: inline-block;
  transition: 0.4s ease;

  
`;

interface CardProps {
  name: string;
  link: string;
  price1: string;
  price2: string;
  price3: string;
  img: string;
  description1: string;
  description2: string;
}

export default function Card(props: CardProps) {
  return (
    <StyledCard>
      <StyledTitle>{props.name}</StyledTitle>

      <StyledContentCard>
        <StyledImgCard src={props.img} alt={props.name} />
        <StyledTextCard>
          <StyledTextContent>{props.description1}<br></br>{props.description2 ?? ""}</StyledTextContent>
          <StyledPriceAndButton>
            <StyledPrice>
              {props.price1 ?? ""}<br/>
              {props.price2 ?? ""}<br/>
              {props.price3 ?? ""}
            </StyledPrice>
            <StyledLink href={props.link}>Encomendar</StyledLink>
          </StyledPriceAndButton>
        </StyledTextCard>
      </StyledContentCard>
    </StyledCard>
  );
}
