import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../assets/logo-img.png";
import { Link } from "react-router-dom";

import CakeIcon from '@mui/icons-material/Cake';

const StyledContainer = styled.div`
    background-color: #9EC09F;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
`;

const StyledImage = styled.img`
    width: 150px;
    cursor: pointer;
`;

const StyledTitle = styled.h1`
    color: white;
    font-size: 40px;
    font-family: Roboto;
    font-weight: 400;
    margin: 10px 0 25px;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
        padding: 0 8px 0 0;
    }
`;

const StyledNavBar = styled.div`
    border-bottom: 1px solid black;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
`;

const StyledMenuItems = styled(Link)`
    display: block;
    padding: 10px 5px 10px 0;
    text-align: center;
    font-family: Roboto;
    text-decoration: none;
    color: black;
    transition: 0.4s ease;
    flex: 1;

    &:hover {
        color: #9EC09F;
    }

    @media (max-width: 500px) {
        font-size: 13px;
        
    }
`;




const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 100px;
    background-color: #9EC09F;
    color: #fff;
`

const Title = styled.h1`
    margin: 0;
    font-family: 'MonteCarlo', cursive;
    font-size: 40px;
    color: white;
    user-select: none;
    cursor: pointer;
    transition: 0.3s ease;
    
    &:hover {
        padding: 8px;
        color: #c9c8c7
    }
`

const MenuButton = styled.button`
    background: none;
    border: none;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`

const NavbarContainer = styled.nav<{ isOpen: boolean}>`
    display: ${({ isOpen}) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 140px;
    left: 0px;
    width: 250px;
    background-color: #9EC09F;
    color: white;
    padding: 10px;
    z-index: 10000;
    transition: 0.4s ease;
    padding-top: 80px;
    
`
const ItemTitle = styled.div<{ isClickable: boolean}>`
    display: flex;
    padding: 10px 5px;
    cursor: ${({ isClickable }) => (isClickable ? 'pointer' : '')};
    font-family: Roboto;
    font-size: 20px;
    margin-top: 12px;
    transition: 0.4s ease;

    &:hover {
        background-color: ${({ isClickable }) => (isClickable ? 'white' : '')};
        border-radius: ${({ isClickable }) => (isClickable ? '#7px' : '')};
        user-select: none;
        border-radius: 7px;
        color: #444;
    }

    & > svg {
        margin-right: 8px;
    }
`

const ItemLabel = styled(Link)`
    padding: 8px;
    cursor: pointer;
    font-family: Roboto;
    font-weight: lighter;
    font-size: 20px;
    color: white;
    text-decoration: none;
    margin-left: 31px;
    transition: 0.4s ease;

    &:hover {
        background-color: white;
        border-radius: 7px;
        color: #444;
      }
`

const TitleDiv = styled(Link)`
    display: flex;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    color: white;
`

const NavBar: React.FC = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <>
            
            <StyledContainer>
                <StyledImage onClick={toggleMenu} src={LogoImg} alt="Logo" />

                
                <StyledTitle onClick={toggleMenu}> <MenuButton onClick={toggleMenu}>&#9776;</MenuButton> Turtle’s Cake</StyledTitle>

            </StyledContainer>
            
            

            <NavbarContainer isOpen={isMenuOpen}>

                <TitleDiv to="/">
                    <ItemTitle isClickable={true}>
                        Bolos
                    </ItemTitle>
                </TitleDiv>

                <TitleDiv to="/tortas">
                    <ItemTitle isClickable={true}>
                        Tortas
                    </ItemTitle>
                </TitleDiv>

                <TitleDiv to="/sobremesas">
                    <ItemTitle isClickable={true}>
                        Sobremesas
                    </ItemTitle>
                </TitleDiv>

                <TitleDiv to="/fidelidade">
                    <ItemTitle isClickable={true}>
                        Programa de Fidelidade
                    </ItemTitle>
                </TitleDiv>

                <TitleDiv to="/sobre-nos">
                    <ItemTitle isClickable={true}>
                        Sobre Nós
                    </ItemTitle>
                </TitleDiv>

                

            </NavbarContainer>

        
        </>
    )

}

export default NavBar;






// export default function Header() {
//     return (
//         <StyledContainer>
//             <StyledImage src={LogoImg} alt="Logo" />
//             <StyledTitle>Turtle’s Cake</StyledTitle>
//             <StyledNavBar>
//                 <StyledMenuItems to="/">Bolos</StyledMenuItems>
//                 <StyledMenuItems to="/tortas">Tortas</StyledMenuItems>
//                 <StyledMenuItems to="/sobremesas">Sobremesas</StyledMenuItems>
//                 <StyledMenuItems to="/fidelidade">Fidelidade</StyledMenuItems>
//                 <StyledMenuItems to="/sobre-nos">Sobre Nós</StyledMenuItems>
//             </StyledNavBar>
//         </StyledContainer>
//     );
// }