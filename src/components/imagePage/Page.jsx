import { useParams, useNavigate } from "react-router-dom";
import { Container, CardImg, Button } from "./page.js";

export default function Page() {
  const { url } = useParams(); // Obtém o parâmetro da URL
  const navigate = useNavigate();

  const retorna = () => {
    navigate(-1);
  };

  return (
    <>
      <Container>
        <CardImg>
          <img src={decodeURIComponent(url)} alt="Item" />
        </CardImg>
        <Button onClick={retorna}>Voltar</Button>
      </Container>
    </>
  );
}
