import { OrdersStyled, OrdersContainer } from "./Orders.style";
import { Paragraph } from "../Paragraph/Paragraph";
import { TotalCard } from "../Total/TotalCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Image from "next/image";
import { PayWithCash } from "../PayWithCash/PayWithCash";
import { useState } from "react";
import { reset } from "../../features/orders/ordersSlice";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import PayPalButton from "../PayPalButton/PayPalButton";
import { Button } from "../Button/Button";

export const Orders = () => {
    const [userData, setUserData] = useState({
        fullname: "",
        address: "",
        phoneNumber: ""
    });
    const changeUserNameData = (data: string) => {
        setUserData(() => ({ ...userData, fullname: data }));
    };
    const changeUserAddressData = (data: string) => {
        setUserData(() => ({ ...userData, address: data }));
    };
    const changeUserPhoneData = (data: string) => {
        setUserData(() => ({ ...userData, phoneNumber: data }));
    };
    const [showPayment, setShowPayment] = useState(false);
    const handleShowPayment = () => {
        setShowPayment(true);
    };
    const router = useRouter();
    const resetDispatch = useDispatch();
    const createOrder = async (data: {
        customer: string,
        address: string,
        total: number,
        paymentMetod: number,
        status: number
    }) => {
        try {
            const response = await axios.post("http://localhost:3000/api/orders/", data);
            response.status === 200 && router.push("/orders/" + response.data._id);
            resetDispatch(reset());
        } catch (error) {
            console.log(error);
        }
    };
    const [showPopup, setShowPopup] = useState(false);
    const handleShowPopup = () => {
        setShowPopup(true);
    };
    const handleClosePayment = () => {
        setShowPopup(false);
    };
    let total = 0;

    const order: any = useSelector<RootState>((state) => state.orders.products);

    return <OrdersStyled>
        <OrdersContainer>
            <table>
                <thead>
                    <tr>
                        <td><Paragraph size="L" style={{ fontWeight: 600 }}>Product</Paragraph></td>
                        <td><Paragraph size="L" style={{ fontWeight: 600 }}>Title</Paragraph></td>
                        <td><Paragraph size="L" style={{ fontWeight: 600 }}>Size</Paragraph></td>
                        <td><Paragraph size="L" style={{ fontWeight: 600 }}>Quantity</Paragraph></td>
                        <td><Paragraph size="L" style={{ fontWeight: 600 }}>Extras</Paragraph></td>
                        <td><Paragraph size="L" style={{ fontWeight: 600 }}>SubTotal</Paragraph></td>
                    </tr>
                </thead>
                <tbody>
                    {order.map(({ id, src, size, extras, quantity, totalPrice, title }: any) => {
                        total += totalPrice;
                        return <tr key={id} >
                            <td>
                                <Image src={src} width={60} height={60} />
                            </td>
                            <td>
                                <Paragraph size="L">{title}</Paragraph>
                            </td>
                            <td>
                                <Paragraph size="L">{size}</Paragraph>
                            </td>
                            <td>
                                <Paragraph size="L">{quantity}</Paragraph>
                            </td>
                            <td>
                                <Paragraph size="M">{extras
                                    ?.map(({ title }: any, index: number) =>
                                        extras.length - 1 !== index ? title + ", " : title)}
                                </Paragraph>
                            </td>
                            <td>
                                <Paragraph size="L">{totalPrice}</Paragraph>
                            </td>
                        </tr>;
                    })}
                </tbody>
            </table>
            <TotalCard total={total} handleShowPopup={handleShowPopup} >
                {showPayment ?
                    <>
                        <div style={{ marginBottom: "15px" }} onClick={handleShowPopup}><Button>Pay with cash</Button></div>
                        <PayPalButton createOrder={createOrder} total={total} />
                    </> :
                    <div onClick={handleShowPayment}><Button >check out now!</Button></div>
                }
            </TotalCard>
            <PayWithCash showPopup={showPopup}>
                <div style={{ position: "relative" }}>
                    <span onClick={handleClosePayment} style={{ position: "absolute", right: "2%", top: "0", cursor: "pointer" }}>x</span>
                    <Paragraph size="M">
                        Payment with cash on delivery {total}$
                    </Paragraph>
                    <Paragraph size="S">
                        Please, enter your delivery data:
                    </Paragraph>
                    <label>
                        Full name
                        <input onChange={(e) => changeUserNameData(e.target.value)} name="full name" type="text" placeholder="Jack Sparrow" value={userData.fullname} required={true} />
                    </label>
                    <label>
                        Telefon
                        <input onChange={(e) => changeUserPhoneData(e.target.value)} name="telefon" type={"tel"} placeholder="+0123456789" value={userData.phoneNumber} required={true} />
                    </label>
                    <textarea onChange={(e) => changeUserAddressData(e.target.value)} name="address" placeholder="City, Street, own" value={userData.address} required={true} ></textarea>
                    <button onClick={() => createOrder({ customer: userData.fullname, address: userData.address, total, paymentMetod: 0, status: 1 })}>proceed with cash</button>
                </div>
            </PayWithCash>
        </OrdersContainer>
    </OrdersStyled >;
};