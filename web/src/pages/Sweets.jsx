import Container from "../components/Container";
import Header from "../components/NavBar";
import Title from "../components/Title";
import Card from "../components/Card";
import LogoImg from "../assets/logo-img.png";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";



export default function Sweets(){
    return(
        <>
            <NavBar/>
            <Container>
                <Title name="Docinhos para Festas"></Title>
                <Card
                    name="Brigadeiro de Chocolate ao Leite"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Brigadeiro%20de%20Chocolate%20ao%20Leite"
                    price1="R$ 160,00 - Tradicional"
                    price2="R$ 200,00 - Granulé"
                    price3="R$ 200,00 - Confete"
                    img={LogoImg}
                    description1="Feito com Leite Moça Nestlé®, creme de leite e chocolate em pó 50% cacau."
                />
                <Card
                    name="Brigadeiro de Chocolate Branco"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Brigadeiro%20de%20Chocolate%20Branco"
                    price1="R$ 160,00 - Tradicional"
                    price2="R$ 220,00 - Granulé"
                    img={LogoImg}
                    description1="Feito com Leite Moça Nestlé®, creme de leite e chocolate branco nobre."
                />
                <Card
                    name="Brigadeiro Casadinho"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Brigadeiro%20Casadinho"
                    price1="R$ 160,00 - Tradicional"
                    img={LogoImg}
                    description1="Feito com Leite Moça Nestlé®, creme de leite, chocolate em pó 50% cacau e chocolate branco nobre."
                />
                <Card
                    name="Brigadeiro Prestígio"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Brigadeiro%20Prestígio"
                    price1="R$ 180,00 - Tradicional"
                    img={LogoImg}
                    description1="Feito com Leite Moça Nestlé®, creme de leite, leite de coco e coco ralado."
                />
                <Card
                    name="Brigadeiro de Morango"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Brigadeiro%20de%20Morango"
                    price1="R$ 160,00 - Tradicional"
                    img={LogoImg}
                    description1="Feito com Leite Moça Nestlé®, creme de leite, chocolate branco nobre e suco sabor morango."
                />
                <Card
                    name="Brigadeiro Dois Amores"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Brigadeiro%20Dois%20Amores"
                    price1="R$ 160,00 - Tradicional"
                    img={LogoImg}
                    description1="Feito com Leite Moça Nestlé®, creme de leite, chocolate branco nobre e suco de morango."
                />
                <Card
                    name="Brigadeiro de Paçoca"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Brigadeiro%20de%20Paçoca"
                    price1="R$ 180,00 - Tradicional"
                    img={LogoImg}
                    description1="Feito com Leite Moça Nestlé®, creme de leite e paçoca."
                />
                <Card
                    name="Brigadeiro de Ninho"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Brigadeiro%20de%20Ninho"
                    price1="R$ 180,00 - Tradicional"
                    price2="R$ 200,00 - Com Creme de Avelã"
                    img={LogoImg}
                    description1="Feito com Leite Moça Nestlé®, creme de leite, Leite Ninho® e creme de avelã."
                />
                <Card
                    name="Brigadeiro de Churros"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Brigadeiro%20de%20Churros"
                    price1="R$ 180,00 - Tradicional"
                    img={LogoImg}
                    description1="Feito com Leite Moça Nestlé®, creme de leite, canela e doce de leite."
                />
                <Card
                    name="Brigadeiro Ferrero"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Brigadeiro%20Ferrero"
                    price1="R$ 220,00 - Tradicional"
                    img={LogoImg}
                    description1="Feito com Leite Moça Nestlé®, creme de leite, chocolate 50% cacau, avelã, creme de avelã e amendoin triturado."
                />
            </Container>
            <Footer/>
        </>
    )
}