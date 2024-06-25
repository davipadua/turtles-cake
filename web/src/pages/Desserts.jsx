import Container from "../components/Container";
import Header from "../components/Header";
import Title from "../components/Title";
import Card from "../components/Card";
import LogoImg from "../assets/logo-img.png";
import Footer from "../components/Footer";



export default function Desserts(){
    return(
        <>
            <Header/>
            <Container>
                <Title name="Sobremesas Gourmet"></Title>
                <Card
                    name="Pudim de Leite"
                    link="#"
                    price="R$ 45,00"
                    img={LogoImg}
                    description1="Leite condensado moça, leite CooperRita e uma deliciosa calda de açúcar caramelizado."
                    description2="Perfeito para sua sobremesa!"
                />
            </Container>
            <Footer/>
        </>
    )
}