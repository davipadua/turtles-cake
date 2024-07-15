import styled from "styled-components";
import Container from "../components/Container";
import Header from "../components/NavBar";
import Title from "../components/Title";
import FidelityCard from "../components/FidelityCard";
import Footer from "../components/Footer";
import FidelityImg from "../assets/fidelity-img.png";



export default function Fidelity(){
    return(
        <>
            <Header/>
            <Container>
                <Title name="Programa de Fidelidade"></Title>
                <FidelityCard img={FidelityImg}/>

            </Container>
            <Footer/>
            


        </>
    )
}