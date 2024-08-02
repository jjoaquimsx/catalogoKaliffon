import "./footer.js";
import { Container, Whats } from "./footer.js";
import { FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <Container>
      <Whats>
        <a href="https://wa.link/70ew6e" target="blanq_">
          <section>Faça seu pedido</section>
          <FaWhatsapp></FaWhatsapp>
        </a>
      </Whats>
    </Container>
  );
}