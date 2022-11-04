import styled from "styled-components";
import { device } from "../../styles/theme";

export const HeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 100px;
    background-color: tomato;
    @media ${device.desktop} {
        padding: 20px 50px;
    }
    @media ${device.laptop} {
        padding: 20px 10px;
    }
    @media ${device.correction} {
        padding: 20px 1px;
    }
`;