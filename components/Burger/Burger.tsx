import { BurgerProps } from "./Burger.props";
import { BurgerStyled } from "./Burger.style";

export const Burger = ({children, onClick, show}: BurgerProps) => {
    return <BurgerStyled onClick={onClick} show={show}>
        <span></span>
        <span></span>
        <span></span>
    </BurgerStyled>;
};