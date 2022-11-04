import { PayWithCashStyled } from "./PayWithCash.style";
import { payWithCashProps } from "./PayWithCash.props";

export const PayWithCash = ({ children, showPopup}) => {
    return <PayWithCashStyled showPopup={showPopup}>
        {children}
    </PayWithCashStyled>;
};