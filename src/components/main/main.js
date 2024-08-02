import styled from "styled-components";

export const Container = styled.main`
  margin-top: 2em;
  display: grid;
  grid-template-columns: 130px 130px;
  gap: 2em 2.5em;
  place-content: center;
  font-family: Inter, sans-serif;

  .img1 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000000;
  }

  article {
    background-color: crimson;
    height: 230px;
    border-radius: 10px 10px 10px 10px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    button {
      padding: 5px;
      margin: 5px;
      border: none;
      background-color: white;
      border-radius: 5px;
      a {
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont,
          "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
          "Helvetica Neue", sans-serif;
        color: crimson;
        text-decoration: none;
        transition: .5s all;
        }

        transition: .5s all;
    }

    button:hover{
      background-color:rgb(139, 28, 28);
      a{
        color: #fff;
      }
    }
  }

  div {
    width: 120px;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    border-radius: 5px;
    animation: Aparecer;
    animation-timeline: view();

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }

  @keyframes Aparecer {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`;
