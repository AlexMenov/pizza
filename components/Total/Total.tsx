import { TotalStyled } from "./Total.style";
import { TotalCard } from "./TotalCard";
import { Paragraph } from "../Paragraph/Paragraph";
import Image from "next/image";

export const Total = () => {
    return <TotalStyled>
        <table>
            <thead>
                <tr>
                    <td><Paragraph size="L" style={{ fontWeight: 600 }}>Product</Paragraph></td>
                    <td><Paragraph size="L" style={{ fontWeight: 600 }}>Name</Paragraph></td>
                    <td><Paragraph size="L" style={{ fontWeight: 600 }}>Extras</Paragraph></td>
                    <td><Paragraph size="L" style={{ fontWeight: 600 }}>Price</Paragraph></td>
                    <td><Paragraph size="L" style={{ fontWeight: 600 }}>Quantity</Paragraph></td>
                    <td><Paragraph size="L" style={{ fontWeight: 600 }}>Total</Paragraph></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Image src={"/img/vegan_pizza.png"} width={100} height={100} />
                    </td>
                    <td>
                        <Paragraph size="L">vegan pizza</Paragraph>
                    </td>
                    <td>
                        <Paragraph size="M">Lorem ipsum dolor sit amet.</Paragraph>
                    </td>
                    <td>
                        <Paragraph size="L">25$</Paragraph>
                    </td>
                    <td>
                        <Paragraph size="L">2</Paragraph>
                    </td>                    <td>
                        <Paragraph size="L">50</Paragraph>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Image src={"/img/vegan_pizza.png"} width={100} height={100} />
                    </td>
                    <td>
                        <Paragraph size="L">vegan pizza</Paragraph>
                    </td>
                    <td>
                        <Paragraph size="M">Lorem ipsum dolor sit amet.</Paragraph>
                    </td>
                    <td>
                        <Paragraph size="L">25$</Paragraph>
                    </td>
                    <td>
                        <Paragraph size="L">2</Paragraph>
                    </td>                    <td>
                        <Paragraph size="L">50</Paragraph>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Image src={"/img/vegan_pizza.png"} width={100} height={100} />
                    </td>
                    <td>
                        <Paragraph size="L">vegan pizza</Paragraph>
                    </td>
                    <td>
                        <Paragraph size="M">Lorem ipsum dolor sit amet.</Paragraph>
                    </td>
                    <td>
                        <Paragraph size="L">25$</Paragraph>
                    </td>
                    <td>
                        <Paragraph size="L">2</Paragraph>
                    </td>                    <td>
                        <Paragraph size="L">50</Paragraph>
                    </td>
                </tr>
            </tbody>
        </table>
        <TotalCard />
    </TotalStyled>;
};