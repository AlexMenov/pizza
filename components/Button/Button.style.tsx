import styled from "styled-components";
import { device } from "../../styles/theme";

export const ButtonUsual = styled.button`
    font-family: inherit;
    height: 35px;
    border: 1px solid transparent;
    border-radius: 3px;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
    overflow: hidden;
    font-size: 14px;
    line-height: 12px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    padding: 0 10px;
    cursor: pointer;
    transition-property: background-color, color, outline;
    @media ${device.tablets} {
        font-size: 12px;
        line-height: 12px;
    }
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    outline: 3px solid rgb(197, 184, 186);
    transition-duration: 0.3s, 0.5s;  
    &:hover {
        background-color: tomato;
        color: rgb(255, 255, 255);
        transition-property: background-color, color, outline;
        transition-duration: 0.3s, 0.5s;  
    }
`;










