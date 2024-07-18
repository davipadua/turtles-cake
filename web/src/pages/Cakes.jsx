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
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Cake%20de%20Maçã"
                    price1="R$ 40,00"
                    img={LogoImg}
                    description1="Massa de farinha premium com açúcar mascavo e canela, suco e fatias da maçã natural."
                    description2="Perfeito para acompanhar uma xícara de café!"
                />
                <Card
                    name="Cake de Laranja"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Cake%20de%20Laranja"
                    price1="R$ 40,00"
                    img={LogoImg}
                    description1="Massa de farinha premium com o suco da laranja natural e cobertura de laranja."
                    description2="Perfeito para acompanhar uma xícara de café!"
                />
                <Card
                    name="Cake de Cenoura"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Cake%20de%20Cenoura"
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
