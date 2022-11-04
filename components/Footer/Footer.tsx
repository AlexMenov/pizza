import { FooterStyled, Basket } from "./Footer.style";
import { Navbar } from "../Navbar/Navbar";
import { TagInfo } from "../TagInfo/TagInfo";
import Image from "next/image";
import { useSelector } from "react-redux";
export const Footer = (): JSX.Element => {
    const quantity = useSelector((state: any) => state.orders.quantity)
    return <FooterStyled>
        <Navbar />
        <Basket><TagInfo size="M" href={"/order"}><a><Image src={"/img/basket.svg"} width={60} height={60} />{quantity}</a></TagInfo></Basket>
    </FooterStyled>;
};

