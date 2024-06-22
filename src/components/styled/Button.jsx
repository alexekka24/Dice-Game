import styled from "styled-components"

export const Button = styled.button`
    padding: 10px 18px;
    border-radius: 5px;
    background-color: black;
    color: white;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent; //to avoid moving glitch when hovering
    transition: 0.4s background ease-in;
    cursor: pointer;

    &:hover {
        border: 1px solid black;
        background-color: white;
        color: black;
        transition: 0.3s background ease-in;
    }
`;

export const OutlineButton = styled(Button)`
    color: black;
    background-color: white;
    border: 1px solid black;

    &:hover {
        border: 1px solid black;
        background-color: black;
        color: white;
        transition: 0.3s background ease-in;
    }
`;