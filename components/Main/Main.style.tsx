import styled from "styled-components";
import { device } from "../../styles/theme";

export const MainStyled = styled.main`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
    min-height: 500px;
    @media ${device.correction} {
        min-height: 400px;
    }
    @media ${device.mobile} {
        margin: 0;
        width: 100%;
    }
`;