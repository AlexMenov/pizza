import styled from "styled-components";
import { device } from "../../styles/theme";
export const SliderStyled = styled.section`
    display: flex;
    align-items: center;
    padding-top: 40px;
    position: relative;
    width: 100%;
    height: 500px;
    @media ${device.tablets} {
        height: 400px; 
    }
    @media ${device.correction} {
        padding-top: 10px; 
    }
`;