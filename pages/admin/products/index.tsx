import { Htag } from "../../../components/Htag/Htag";
import { Container } from "../../../components/Container/Container";
import Image from "next/image";
import { Button } from "../../../components/Button/Button";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const TD = styled.td`
    width: 30px;
    background-color: #e6e6e6;
    text-align: center;
`;

const AllProducts = ({ result }: any) => {

    const [products, setProducts] = useState(result);
    const handleDeleteProduct = async (id: number) => {
        try {
            await axios.delete(process.env.API_HOST + "/products/delete/" + id);
            const response = await fetch(process.env.API_HOST + "/products/pizza");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    return <Container>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
            <Htag tag="h2">All Products</Htag>
            <table style={{ marginTop: "25px", width: "100%" }}>
                <thead>
                    <tr>
                        <TD>Product</TD>
                        <TD>Name</TD>
                        <TD>ID</TD>
                        <TD>Price</TD>
                        <TD>Actions</TD>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map(({ _id, img, title, prices }: any) => {
                            return <tr key={_id}>
                                <TD><Image src={img} width={50} height={50} /></TD>
                                <TD>{title}</TD>
                                <TD>{_id}</TD>
                                <TD>S - {prices[0] ? prices[0] : "empty"}$ <br />
                                    M - {prices[1] ? prices[1] : "empty"}$ <br />
                                    L - {prices[2] ? prices[2] : "empty"}$
                                </TD>
                                <TD>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <Button>edit</Button><br />
                                        <Button><div onClick={() => handleDeleteProduct(_id)}>delete</div></Button>
                                    </div>
                                </TD>
                            </tr>;
                        })
                    }
                </tbody>
            </table>
        </div>
    </Container>;
};

export default AllProducts;

export const getServerSideProps = async () => {
    try {
        const response = await fetch(process.env.API_HOST + "/products/pizza");
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
