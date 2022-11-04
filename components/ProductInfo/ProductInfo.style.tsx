import styled from "styled-components";

export const ProductInfoStyled = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: min-content;
    column-gap: 25px;
    height: 700px;
    width: 100%;
`;

export const ProductSize = styled.span`
    position: absolute;
    top: -10px;
    left: 60%;
    background-color: darksalmon;
    padding: 2px 5px;
    border-radius: 20px;
`;

export const ProductAdditional = styled.input`
    width: 10px;
    height: 10px;
    cursor: pointer;
    margin-right: 5px; 
`;