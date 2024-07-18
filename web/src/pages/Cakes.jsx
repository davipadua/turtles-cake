import Container from "../components/Container";
import Header from "../components/NavBar";
import Title from "../components/Title";
import Card from "../components/Card";
import LogoImg from "../assets/logo-img.png";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";



export default function Cakes(){
    return(
        <>
            <NavBar/>
            <Container>
                <Title name="Cakes Gourmet"></Title>
                <Card
                    name="Cake de Maçã"
                    link="#"
                    price1="R$ 40,00"
                    img={LogoImg}
                    description1="Massa de farinha premium com açúcar mascavo e canela, suco e fatias da maçã natural."
                    description2="Perfeito para acompanhar uma xícara de café!"
                />
                <Card
                    name="Cake de Laranja"
                    link="#"
                    price1="R$ 40,00"
                    img={LogoImg}
                    description1="Massa de farinha premium com o suco da laranja natural e cobertura de laranja."
                    description2="Perfeito para acompanhar uma xícara de café!"
                />
                <Card
                    name="Cake de Cenoura"
                    link="#"
                    price1="R$ 45,00"
                    img={LogoImg}
                    description1="Massa de farinha premium com a cenoura natural e cobertura de chocolate com granulado gourmet."
                    description2="Perfeito para acompanhar uma xícara de café!"
                />
            </Container>
            <Footer/>
        </>
    )
}
