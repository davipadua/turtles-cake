import React, { useState } from "react";
import styled from "styled-components"

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import "./Carousel.css";


const StyledImgCard = styled.img`
  background-color: #f0f0f0;
  width: 250px;
  margin: 0 20px 20px 0;

  @media (max-width: 600px) {
        width: 200px;
    }
`;


export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <NavigateBeforeIcon onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <StyledImgCard
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <NavigateNextIcon
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};