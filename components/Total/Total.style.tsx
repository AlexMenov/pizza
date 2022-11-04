import styled from "styled-components";
import { device } from "../../styles/theme";

export const TotalStyled = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 50px 10px;
    width: 800px;
    margin-right: auto;
    table {
        margin-bottom: 25px;
    }
    td {
        width: 120px;
        text-align: center;
        padding-bottom: 5px;
        border: 1px solid black;
    }
    @media ${device.laptop} {
        table {
            padding: 0px;
        }
    }
    @media ${device.desktop} {
        width: 400px;
    }
    @media ${device.desktop} {
        flex-direction: column;
    }
`;

export const TotalCardStyled = styled.div`
    width: 300px; 
    height: 340px;
    padding: 25px;
    background-color: #848484;  
    color: white; 
    @media ${device.laptop} {
        padding: 10px;
        width: 220px;
    }
    @media ${device.correction} {
        height: 250px;
    }

`;

