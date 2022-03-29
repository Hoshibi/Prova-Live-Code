import { Container, TextContainer, BorderText, BackgroundText, BtnYellow } from "./styles";

const InfoBox : React.FC = () => {
    return (
        <Container>
            <TextContainer>
                <BorderText>VELOCIDADE</BorderText>     
                <BackgroundText>PARA NAVEGAR NOS</BackgroundText>           
                <BorderText>MELHORES APPS</BorderText>     
                <BackgroundText>do mercado</BackgroundText>   
                <BtnYellow>QUERO SER INTNET</BtnYellow>
            </TextContainer>
        </Container>      
    );
}

export default InfoBox;