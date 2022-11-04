import styled from "styled-components";
import { device } from "../../styles/theme";

export const PLarge = styled.p`
    font-size: 18px;
    line-height: 29px;
    @media ${device.tablets} {
        font-size: 14px;
        line-height: 15px;
    }
    @media ${device.correction} {
        font-size: 12px;
        line-height: 12px;
    }
`;

export const PMedium = styled.p`
    font-size: 16px;
    line-height: 24px;
    @media ${device.tablets} {
        font-size: 14px;
        line-height: 15px;
    }
    @media ${device.correction} {
        font-size: 12px;
        line-height: 12px;
    }
`;

export const PSmall = styled.p`
    font-size: 14px;
    line-height: 24px;
    @media ${device.tablets} {
        font-size: 14px;
        line-height: 15px;
    }
    @media ${device.correction} {
        font-size: 12px;
        line-height: 12px;
    }
`;