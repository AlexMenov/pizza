import Image from "next/image";
import Link from "next/link";
import { TagInfo } from "../TagInfo/TagInfo";
import { Container } from "../Container/Container";
import { MenuList } from "./Navbar.style";
import { useSelector } from "react-redux";
export const Navbar = () => {
    const quantity = useSelector((state: any) => state.orders.quantity);
    return (
        <MenuList>
            <Link href={"/"}><a><Image src={"/img/pizza_logo.png"} width={60} height={60} /></a></Link>
            <Container>
                <TagInfo size={"M"} href={"/"}>Homepage</TagInfo>
                <TagInfo size={"M"} href={"products"}>Products</TagInfo>
                <TagInfo size={"M"} href={"menu"}>Menu</TagInfo>
                <TagInfo size={"M"} href={"events"}>Events</TagInfo>
                <TagInfo size={"M"} href={"contacts"}>Contacts</TagInfo>
            </Container>
            <div>
                <TagInfo size="M" href={"/order"}><a><Image src={"/img/basket.svg"} width={60} height={60} />{quantity}</a></TagInfo>
            </div>
        </MenuList>
    );
};