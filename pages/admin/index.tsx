import { Htag } from "../../components/Htag/Htag";
import { Container } from "../../components/Container/Container";
import Link from "next/link";

const Admin = () => {
    return <Container>
        <Htag tag="h2">
            <Link href={"admin/products"}>All Products</Link>
        </Htag>
        <Htag tag="h2">
            <Link href={"admin/orders"}>All Orders</Link>
        </Htag>
    </Container >;
};

export default Admin;