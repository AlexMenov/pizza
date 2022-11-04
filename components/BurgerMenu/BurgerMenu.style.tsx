import styled from "styled-components";
import { device } from "../../styles/theme";
import { BurgerMenuProps } from "./Burger.props";
export const BurgerMenuStyled = styled.menu<BurgerMenuProps>`
    display: none;
    @media ${device.correction} {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 15px;
        position: fixed;
        inset: 0;
        z-index: 5;
        transform: ${({show}) => show ? 'translate(0, 0)' : 'translate(-100%, -100%)'};
        background-color: tomato;
        width: 100%;
        height: 100%;
        transition: transform 0.5s;
    }
`;