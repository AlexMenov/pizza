import styled from "styled-components";
export const PayWithCashStyled = styled.div`
    ${({ showPopup }: any) => showPopup ? "display: flex;" : "display: none;"}
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    inset: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    background-color: #d4d4d4cd;
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border-radius: 10px;
        color: #fff;
        padding: 20px;
        text-align: center;
        width: 300px;
        height: 50vh;
        background-color: tomato;
        label {
            font-size: 14px;
        }
        input {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 5px;
            border: none;
            padding: 2px;
        }
        textarea {
            height: 100px;
            width: 100%;
            border-radius: 5px;
            border: none;
            padding: 10px;
        }
        button {
            width: 100%;
            padding: 5px;
            border-radius: 5px;
            border: none;
            font-family: inherit;
            cursor: pointer;
        }
    }

`;