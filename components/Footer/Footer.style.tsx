import styled from "styled-components";
import { device } from "../../styles/theme";
export const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    background-color: tomato;
    padding: 10px;
    menu {
        justify-content: space-around;
    }
    @media ${device.correction} {

    }
`;

export const Basket = styled.div`
    display: none;
    @media ${device.correction} {
        display: block;
        justify-content: center;
        align-items: center;
    }    
`;