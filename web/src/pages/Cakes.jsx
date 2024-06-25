import styled from "styled-components";
import Container from "../components/Container";
import Header from "../components/Header";
import Title from "../components/Title";
import Card from "../components/Card";
import LogoImg from "../assets/logo-img.png";
import Footer from "../components/Footer";



export default function Cakes(){
    return(
        <>
            <Header/>
            <Container>
                <Title name="Bolos Gourmet"></Title>
                <Card
                    name="Cake de Maçã"
                    link="#"
                    price="R$ 40,00"
                    img={LogoImg}
                    description1="Massa de farinha premium com açúcar mascavo e canela, suco e fatias da maçã natural."
                    description2="Perfeito para acompanhar uma xícara de café!"
                />
                <Card
                    name="Cake de Laranja"
                    link="#"
                    price="R$ 40,00"
                    img={LogoImg}
                    description1="Massa de farinha premium com o suco da laranja natural e cobertura de laranja."
                    description2="Perfeito para acompanhar uma xícara de café!"
                />
                <Card
                    name="Cake de Cenoura"
                    link="#"
                    price="R$ 45,00"
                    img={LogoImg}
                    description1="Massa de farinha premium com a cenoura natural e cobertura de chocolate com granulado gourmet."
                    description2="Perfeito para acompanhar uma xícara de café!"
                />
            </Container>
            <Footer/>
        </>
    )
}
