import styled from "styled-components";

export const Container = styled.div`
    background-color: crimson;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    section{
        z-index: 10;
        display: flex;
        gap: 30px;
    }
`

export const CardImg = styled.main`
    width: 80vw;
    height: auto;
    margin-top: 15px;
    img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
        border: 2px solid black;
        filter: drop-shadow(0px 25px 20px rgba(0, 0, 0, 0.6));
    }
`;

export const Button = styled.button`
    width: 140px;
    height: 40px;
    font-size: 30px;
    font-family: Inter, sans-serif;
    border-radius: 10px;
    border: none;
    background-color: rgb(139, 28, 28);
    box-shadow: 0px 0px 10px black;
    color: #fff;
    z-index: 10;
    a{
        color: #fff;
        text-decoration: none;
        font-family: inherit;
    }
`;
