import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';


const StyledContainer = styled.div`
    background-color: #E2E7D8;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;

    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width:100%;
`;

const StyledImage = styled.img`
    width: 170px;

    @media (max-width: 600px) {
        width: 100px;
    }
    
`;

const StyledTitle = styled.h1`
    color: white;
    font-size: 40px;
    font-family: Roboto;
    font-weight: 400;
    margin: 10px 0 25px;
    transition: 0.4s ease;
    text-align: center;
`;

const MenuButton = styled.button`
    background: none;
    border: none;
    color: #3C5951;
    font-size: 20px;
    cursor: pointer;
    padding: 0 20px 10px 20px;

    @media (max-width: 600px) {
        font-size: 16px;
    }
    
`

const NavbarContainer = styled.nav<{ isOpen: boolean}>`
    display: ${({ isOpen}) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    width: 250px;
    background-color: #111;
    color: white;
    padding: 60px 10px 10px 10px;
    z-index: 2;
    height: 100%;
    top: 0;
    left: 0;

    @media (max-width: 600px) {
        width: 80%;
    }
`

const ItemTitle = styled.div<{ isClickable: boolean}>`
    display: flex;
    padding: 10px 5px;
    cursor: ${({ isClickable }) => (isClickable ? 'pointer' : '')};
    font-family: Roboto;
    font-size: 16px;
    margin-top: 12px;
    transition: 0.4s ease;

    &:hover {
        background-color: ${({ isClickable }) => (isClickable ? 'white' : '')};
        border-radius: ${({ isClickable }) => (isClickable ? '#7px' : '')};
        user-select: none;
        color: #444;
    }

    & > svg {
        margin-right: 8px;
    }
`

const TitleDiv = styled(Link)`
    display: flex;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    color: white;
`

const ContainerTitle = styled.div`
    width: 100%;
`
const CloseBtn = styled.div`
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer;
    margin-left: 50px;

`

interface NavBarProps{
    ImgLogo: string;
}

function NavBar(props: NavBarProps) {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>

            <StyledContainer>
                <StyledImage src={props.ImgLogo} alt="Logo" />

                <ContainerTitle>
                    <MenuButton onClick={toggleMenu}>&#9776; Menu</MenuButton>
                </ContainerTitle>
            </StyledContainer>

            <NavbarContainer isOpen={isMenuOpen}>
                <CloseBtn onClick={toggleMenu}><CloseIcon/></CloseBtn>
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
                <TitleDiv to="/docinhos">
                    <ItemTitle isClickable={true}>
                        Docinhos para Festas
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
    );
}

export default NavBar;
