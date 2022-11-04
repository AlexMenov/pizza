import { Status } from "../../components/Status/Status";
import { OrdersStyled, OrdersContainer } from "../../components/Orders/Orders.style";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { paramsProps } from "./params.props";

const Orders = ({ result }: any) => {
    const { customer, address, total, _id } = result;
    let { paymentMetod } = result;

    switch (paymentMetod) {
        case 1:
            paymentMetod = "PayPal";
            break;
        case 2:
            paymentMetod = "Card";
            break;
        case 0:
            paymentMetod = "Cash";
            break;
    }
    return <OrdersStyled>
        <OrdersContainer>
            <table>
                <thead>
                    <tr>
                        <td><Paragraph size="L" style={{ fontWeight: 600 }}>Customer</Paragraph></td>
                        <td><Paragraph size="L" style={{ fontWeight: 600 }}>Address</Paragraph></td>
                        <td><Paragraph size="L" style={{ fontWeight: 600 }}>Payment Method</Paragraph></td>
                        <td><Paragraph size="L" style={{ fontWeight: 600 }}>Total</Paragraph></td>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>
                            <Paragraph size="L">{customer}</Paragraph>
                        </td>
                        <td>
                            <Paragraph size="L">{address}</Paragraph>
                        </td>
                        <td>
                            <Paragraph size="L">{paymentMetod}</Paragraph>
                        </td>
                        <td>
                            <Paragraph size="L">{total}</Paragraph>
                        </td>
                    </tr>
                </tbody>
            </table>
        </OrdersContainer>
        <Status />
    </OrdersStyled >;
};

export default Orders;

export const getServerSideProps = async ({ params }: any) => {
    const id = params.id;
    const response = await fetch("http://localhost:3000/api/orders/" + id);
    const data = await response.json();
    return {
        props: {
            result: data
        }
    };
};