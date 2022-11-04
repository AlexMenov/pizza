import styled, { css } from "styled-components";

const TagInfoStyle = css`
    cursor: pointer;
    padding: 2px 5px;
    border-radius: 20px;  
    color: #fff;
    margin: 0 10px;
`;

export const TagInfoSmall = styled.span`
    ${TagInfoStyle};
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
`;

export const TagInfoMedium = styled.span`
    ${TagInfoStyle};
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
`;
