import styled from "styled-components";


export const Container = styled.footer`
    width: 100vw;
    height: 100px;
    background-color: crimson;
    border-radius: 10px 10px 0px 0px;
    margin-top: 1em;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    font-size: 1.5em;
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    section{
        font-size: 1em;
        font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

export const Whats = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    a{
        color: black;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
    }
`

