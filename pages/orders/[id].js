import { Status } from "../../components/Status/Status";
import { OrdersStyled, OrdersContainer } from "../../components/Orders/Orders.style";
import { Paragraph } from "../../components/Paragraph/Paragraph";

const Orders = ({ result }) => {
    const { customer, address, total } = result;
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

export const getServerSideProps = async ({ params }) => {
    const id = params.id;
    const response = await fetch(process.env.API_HOST + "/orders/" + id);
    const data = await response.json();
    return {
        props: {
            result: data
        }
    };
};