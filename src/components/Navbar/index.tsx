import { Container, LogoContainer, MenuContainer, LogoName, Btn2Via, BtnGetIn } from "./styles";

const Navbar : React.FC = () => {
    return (
        <Container>
            <LogoContainer>
                <img src="./Logo.png" alt="Logo"/>
                <LogoName>Intnet</LogoName>
            </LogoContainer>
            <MenuContainer>
                <ul>
                    <li><a href="/">Sobre nós</a></li>
                    <li><a href="/">Para você</a></li>
                    <li><a href="/">Para empresa</a></li>
                    <li><a href="/">Planos</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Contato</a></li>
                    <li><a href="/">Carreira</a></li>
                </ul>
                <Btn2Via> 2ª Via do Boleto</Btn2Via>
                <BtnGetIn>Entrar</BtnGetIn>
            </MenuContainer>
        </Container>
    );
}

export default Navbar;