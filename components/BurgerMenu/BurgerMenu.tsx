import { BurgerMenuStyled } from "./BurgerMenu.style";
import { BurgerMenuProps } from "./Burger.props";
import { TagInfo } from "../TagInfo/TagInfo";
export const BurgerMenu = ({ show, children }: BurgerMenuProps) => {
    return <BurgerMenuStyled show={show}>
            <TagInfo size={"M"} href={"/"}>Homepage</TagInfo>
            <TagInfo size={"M"} href={"products"}>Products</TagInfo>
            <TagInfo size={"M"} href={"menu"}>Menu</TagInfo>
            <TagInfo size={"M"} href={"events"}>Events</TagInfo>
            <TagInfo size={"M"} href={"contacts"}>Contacts</TagInfo>
    </BurgerMenuStyled>;
};