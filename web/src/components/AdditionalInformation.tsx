import React from "react";
import styled from "styled-components";


const StyledContainer = styled.div`
    text-align: center;
    margin-bottom: 50px;
`;

const StyledTitle = styled.p`
    font-size: 25px;
    font-family: 'Quicksand', sans-serif;
    margin-bottom: 10px;

`

const StyledInfo = styled.p`
    font-size: 16px;
    font-family: 'Work Sans'
`

const StyledDiscount = styled.p`
    font-size: 16px;
    font-family: 'Work Sans'
`

const StyledDiscountSpan = styled.span`
    font-size: 16px;
    font-family: 'Work Sans';
    font-weight: bold;
`

const StyledPaymentsTitle = styled.p`
    font-family: 'Work Sans';
    font-weight: bold;
    margin: 0;
    font-size: 16px;

`

const StyledPaymentsP = styled.p`
    font-family: 'Work Sans';
    margin: 0;
    font-size: 20px;
    
`

const StyledTest = styled.div`
    margin: 30px 0;
    
`






export default function AdditionalInformation(){
    return(
        <StyledContainer>
            <StyledTitle>Informações Adicionais:</StyledTitle>

            <StyledInfo>Encomendas mediante a 60% do valor do pedido.</StyledInfo>

            <StyledTest>
                <StyledPaymentsTitle>Formas de Pagamento:</StyledPaymentsTitle>
                <StyledPaymentsP>Pix - Dinheiro - Cartão</StyledPaymentsP>
            </StyledTest>

            

            <StyledDiscount>
                <StyledDiscountSpan>10% OFF</StyledDiscountSpan> para pagamentos à vista em dinheiro ou Pix
            </StyledDiscount>

        </StyledContainer>
    )
}