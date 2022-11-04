import { StatusStyled, StatusContainerStyled } from "./Status.style";
import { Paragraph } from "../Paragraph/Paragraph";
import Image from "next/image";
export const Status = () => {
    const status = 2;
    const handleStatus = (index: number) => {
        if (status - index < 1) return "undone";
        if (status - index === 1) return "process";
        if (status - index > 1) return "done";
    };
    return <StatusStyled>
        <StatusContainerStyled className={handleStatus(0)}>
            <Image src={"/img/payment.svg"} width={50} height={50} />
            <Paragraph size="S">payment</Paragraph>
        </StatusContainerStyled>
        <StatusContainerStyled className={handleStatus(1)}>
            <Image src={"/img/cooking.svg"} width={50} height={50} />
            <Paragraph size="S">preparing</Paragraph>
        </StatusContainerStyled>
        <StatusContainerStyled className={handleStatus(2)}>
            <Image src={"/img/delivery.svg"} width={50} height={50} />
            <Paragraph size="S">on the way</Paragraph>
        </StatusContainerStyled>
        <StatusContainerStyled className={handleStatus(3)}>
            <Image src={"/img/delivered.svg"} width={50} height={50} />
            <Paragraph size="S">delivered</Paragraph>
        </StatusContainerStyled>
    </StatusStyled>;
};