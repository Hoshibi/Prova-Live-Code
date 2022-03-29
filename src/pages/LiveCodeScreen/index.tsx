import { Container, PageContainer ,BackgroundImage } from "./styles";
import { Navbar, InfoBox, ImageBox } from "@components/index"

export default function LiveCodeScreen() {
  return (
    <>
      <Navbar />
      <Container> 
        <PageContainer>
          <InfoBox />
          <ImageBox />
        </PageContainer>
        <BackgroundImage src="./Fundo.png" alt="Fundo" />
      </Container>  
    </>
  );
}
