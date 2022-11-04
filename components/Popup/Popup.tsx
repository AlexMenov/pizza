import { PopupStyled, CatContainer } from "./Popup.styled";
import { Paragraph } from "../Paragraph/Paragraph";
import Image from "next/image";

export const Popup = ({show}: any) => {
    return <PopupStyled show={show}>
        <Paragraph size="L">Added to card</Paragraph>
        <CatContainer ><Image src={"/img/pizza_cat.png"} width={60} height={60} /></CatContainer>
    </PopupStyled>;
};