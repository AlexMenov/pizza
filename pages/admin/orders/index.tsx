import { Htag } from "../../../components/Htag/Htag";
import { Container } from "../../../components/Container/Container";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "../../../components/Button/Button";
import axios from "axios";

const TD = styled.td`
    width: 30px;
    background-color: #e6e6e6;
    text-align: center;
`;

const AllOrders = ({ result }: any) => {

    const [orders, setOrders] = useState(result);
    const handleUpdateOrder = async (id: number, count: number) => {
        try {
            await axios.put("http://localhost:3000/api/orders/put/" + id, { status: ++count });
            const response = await axios.get("http://localhost:3000/api/orders");
            setOrders(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    const handleDeleteOrder = async (id: number) => {
        try {
            await axios.delete("http://localhost:3000/api/orders/delete/" + id);
            const response = await axios.get("http://localhost:3000/api/orders");
            setOrders(response.data);
        } catch (error) {
            console.log(error);
        }
    };


    return <Container>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
            <Htag tag="h2">All Orders</Htag>
            <table style={{ marginTop: "25px", width: "100%" }}>
                <thead>
                    <tr>
                        <TD>ID</TD>
                        <TD>Customer</TD>
                        <TD>Address</TD>
                        <TD>Total</TD>
                        <TD>Status</TD>
                        <TD>Payment Method</TD>
                        <TD colSpan={2}>Actions</TD>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders ? orders.map(({ _id, customer, address, total, status, paymentMetod }: any) => {
                            return <tr key={_id}>
                                <TD>{_id.slice(0, 10)}...</TD>
                                <TD>{customer}</TD>
                                <TD>{address}</TD>
                                <TD>{total}</TD>
                                <TD>{status}</TD>
                                <TD>{paymentMetod === 1 ? "Card" : "Cash"}</TD>
                                <TD onClick={() => handleUpdateOrder(_id, status)} style={{ padding: "5px" }}>
                                    <Button>next stage</Button>
                                </TD>
                                <TD onClick={() => handleDeleteOrder(_id)} style={{ padding: "5px" }}>
                                    <Button>delete</Button>
                                </TD>
                            </tr>;
                        }) : "empty"
                    }
                </tbody>
            </table>
        </div>
    </Container>;
};

export default AllOrders;

export const getServerSideProps = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/orders");
        const data = await response.json();
        return {
            props: {
                result: data
            }
        };
    } catch (error) {
        console.log(error);
    }
};
