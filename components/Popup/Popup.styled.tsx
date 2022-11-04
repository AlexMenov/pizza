
import styled from "styled-components";
import { PopupProps } from "./Popup.props";
export const PopupStyled = styled.div<PopupProps>`
    ${({show}: any) => show ? "display: flex;" : "display: none;"}
    align-items: center;
    justify-content: center;
    position: fixed;
    inset: 50%;
    background-color: tomato;
    width: 300px;
    height: 150px;
    transform: translate(-50%, -50%);
    color: #fff;
    border-radius: 10px;
    overflow: hidden;
`;

export const CatContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    animation: happy 2s forwards;
    transform-origin: top;
    transform: rotate(15deg);
    @keyframes happy {
        25% {
            transform: rotate(-15deg)
        }
        50% {
            transform: rotate(15deg)
        }
        75% {
            transform: rotate(-20deg)
        }
        100% {
            transform: translate(0, 100%)
        }
    }
`;