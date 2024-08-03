import { useParams, Link } from "react-router-dom";
import { Container, CardImg, Button } from "./page.js";

export default function Page() {
  const { url } = useParams(); // Obtém o parâmetro da URL

  return (
    <>
      <Container>
        <CardImg>
          <img src={decodeURIComponent(url)} alt="Item" />
        </CardImg>
        <section>
          <Button><a target="_blank" href={`https://wa.me/5588981244495?text=Ol%C3%A1%2C%20gostaria%20desse%20item%3A%20${decodeURIComponent(url)}`}>Comprar</a></Button>
          <Button ><Link to='/catalogoKaliffon'>Voltar</Link></Button>
        </section>
      </Container>
    </>
  );
}
