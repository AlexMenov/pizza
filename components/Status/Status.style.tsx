import styled from "styled-components";
import { device } from "../../styles/theme";


export const StatusStyled = styled.section`
    display: flex;
    margin: auto auto 0px 20px;
    @media ${device.desktop} {
        margin: 30px auto 0px;
    }
    @media ${device.laptop} {
        margin: 20px auto 0px 0px;
    }
    @media ${device.correction} {
        margin: 40px auto;
    }
`;

export const StatusContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100px;
    opacity: 0.3;
    @media ${device.tablets} {
        img {
            width: 30px !important;
            height: 30px !important;
        }
    }    
    @media ${device.laptop} {
        width: 80px;
        img {
            width: 20px !important;
            height: 20px !important;
        }
    }
`;

