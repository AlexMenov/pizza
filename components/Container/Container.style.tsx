import styled from "styled-components";
import { device } from "../../styles/theme";

export const ContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 650px;
    @media ${device.desktop} {
        width: 500px;
    }
    @media ${device.correction} {
        width: 400px;
    }
`;