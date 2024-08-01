import React from "react";
import styled from "styled-components";

import {Carousel} from "./Carousel.tsx";

const StyledCard = styled.div`
  background-color: white;
  padding: 20px;
  border-bottom: 1.5px dashed;
`;

const StyledContentCard = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const StyledTitle = styled.p`
  font-size: 25px;
  font-family: 'Quicksand', sans-serif;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 19px;
  }
`;

const StyledImgCard = styled.img`
  background-color: #f0f0f0;
  width: 250px;
  margin: 0 20px 20px 0;

  @media (max-width: 600px) {
        width: 180px;
    }
`;

const StyledTextCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const StyledTextContent = styled.p`
  font-family: 'Work Sans', sans-serif;
  font-size: 16px;
  margin: 0 0 10px 0;

  @media (max-width: 600px) {
        font-size: 14px;
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

  @media (max-width: 600px) {
        font-size: 15px;
    }
`;

const StyledLink = styled.a`
  background-color:  #13a161;
  border-radius: 5px;
  padding: 10px;
  color: white;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  display: inline-block;
  transition: 0.4s ease;

  &:hover {
        background-color: #117f57 ;
        color: ;
    }

  @media (max-width: 600px) {
        font-size: 15px;
    }
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
  imgList: [];
}

export default function Card(props: CardProps) {
  return (
    <StyledCard>
      <StyledTitle>{props.name}</StyledTitle>

      <StyledContentCard>
        <Carousel data={props.imgList}/>
        <StyledTextCard>
          <StyledTextContent>{props.description1}<br></br>{props.description2 ?? ""}</StyledTextContent>
          <StyledPriceAndButton>
            <StyledPrice>
              {props.price1 ?? ""}<br/>
              {props.price2 ?? ""}<br/>
              {props.price3 ?? ""}
            </StyledPrice>
            <StyledLink target="blank" href={props.link}>Encomendar</StyledLink>
          </StyledPriceAndButton>
        </StyledTextCard>
      </StyledContentCard>
    </StyledCard>
  );
}
