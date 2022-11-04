import styled from "styled-components";
import { device } from "../../styles/theme";

export const OrdersStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 50px 10px;
    width: 800px;
    margin: auto;
    table {
        margin-bottom: 25px;
        margin-right: 50px;        
        height: min-content;
    }
    td {
        width: 160px;
        text-align: center;
        padding-bottom: 15px;
    }
    @media ${device.desktop} {
        width: 600px;
    }
    @media ${device.laptop} {
        padding: 20px 10px;
        td {
            width: 120px;
        }
    }
    @media ${device.tablets} {
        width: 80%;
    }
    @media ${device.desktop} {
        width: 400px;
    }
    @media ${device.mobile} {
        width: 100%;
        padding: 50px 0px;
        margin: 0;
    }
`;

export const OrdersContainer = styled.div`
    display: flex;
    @media ${device.desktop} {
        flex-direction: column;
        align-items: center;
        table {
            margin: 15px auto;
        }
    }    
`;