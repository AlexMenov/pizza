import { TotalCardStyled } from "./Total.style";
import { Paragraph } from "../Paragraph/Paragraph";

export const TotalCard = ({ total, children}: any) => {
    return <TotalCardStyled>
        <Paragraph size="L" style={{ fontWeight: 700, marginBottom: "15px" }}>TOTAL</Paragraph>
        <Paragraph size="L" >subtotal: {total}$</Paragraph>
        <Paragraph size="L" >discount: 0$</Paragraph>
        <Paragraph size="L" style={{ marginBottom: "15px" }}>total: {total}$</Paragraph> 
        {children}      
    </TotalCardStyled>;
};
