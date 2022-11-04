import styled from "styled-components";
import { device } from "../../styles/theme";

export const MenuList = styled.menu`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media ${device.desktop} {
        width: 90%;
        img {
            width: 40px;
            height: 40px;
        }
    }
    @media ${device.correction} {
        display: none;
    }
`; 