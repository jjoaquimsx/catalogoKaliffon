import { useState } from "react";
import { Container } from "./main.js";
import itemFem from "../../..//itemfem.json";
import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Main() {
  //const [itemId, setItemId] = useState();

  const [clickedItemId, setClickedItemId] = useState(null);

  const handleButtonClick = (id) => {
    setClickedItemId(id);
    console.log("Clicked item Url:", id);
  };

  return (
    <Container>
      {itemFem.length === 0 && <div className="spinner">Carregando</div>}
      {itemFem.length > 0 && itemFem.map((item) => (
        <article key={item.id}>
          <Link
            to={`/page/${encodeURIComponent(item.img)}`}
            state={{ url: item.img }}
          >
            <div>
              <img
                src={item.img}
                alt=""
                id="imgs"
                onClick={() => handleButtonClick(item.img)}
              />
            </div>
          </Link>
          <button onClick={() => handleButtonClick(item.id)}>
            <Link
              to={`/page/${encodeURIComponent(item.img)}`}
              state={{ url: item.img }}
            >
              Comprar <BsFillBagFill />
            </Link>
          </button>
          {console.log(clickedItemId)}
        </article>
      ))}
      {clickedItemId && <p>Item clicado: {clickedItemId}</p>}
    </Container>
  );
}
