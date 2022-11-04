import styled, { css } from "styled-components";
import { device } from "../../styles/theme";
import { BurgerProps } from "./Burger.props";

const span = css`
    span {
        position: absolute;
        width: 100%;
        height: 5px;
        background-color: darkgray;
        border-radius: 10px;
        border: 1px solid black;
    }
`;

const BurgerStyledOpen = css`
        ${span}
        span {
        &:nth-of-type(1) {
            top: 0%;
        }
        &:nth-of-type(2) {
            top: 50%;
        }
        &:nth-of-type(3) {
            top: 100%;
        }
    }
`;

const BurgerStyledClose = css`
        ${span}
        span {
        &:nth-of-type(1) {
            top: 50%;
            transform: rotate(45deg);
        }
        &:nth-of-type(2) {
            opacity: 0;
        }
        &:nth-of-type(3) {
            top: 50%;
            transform: rotate(-45deg);
        }
    }
`;

export const BurgerStyled = styled.div<BurgerProps>`
    display: none;
    @media ${device.correction} {
        display: flex;
        align-items: center;
        position: absolute;
        right: 5%;
        width: 50px;
        height: 25px; 
        cursor: pointer;
        z-index: 5;
        span {
            transition: transform 0.5s, top 0.3s;
        }
        ${({show}) => !show ? BurgerStyledOpen : BurgerStyledClose}
    }
`;