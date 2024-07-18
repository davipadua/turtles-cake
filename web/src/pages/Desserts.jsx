import Container from "../components/Container";
import Header from "../components/NavBar";
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
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Pudim%20de%20Leite"
                    price1="R$ 45,00"
                    img={LogoImg}
                    description1="Leite condensado moça, leite CooperRita e uma deliciosa calda de açúcar caramelizado."
                    description2="Perfeito para sua sobremesa!"
                />
            </Container>
            <Footer/>
        </>
    )
}