import { Top, Container } from "./Home";
import Footer from "./footer/Footer.jsx";
import Main from "./main/Main.jsx";
import "../App.css"

export default function Home() {
  return (
    <>
      <Container>
        <Top>Catalogo Kallifon</Top>
        <Main />
        <Footer />
      </Container>
    </>
  );
}
