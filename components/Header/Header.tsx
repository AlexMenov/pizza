import { HeaderStyled } from "./Header.style";
import { Navbar } from "../Navbar/Navbar";
import { Slider } from "../Slider/Slider";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Burger } from "../Burger/Burger";
import { useState } from "react";
export const Header = (): JSX.Element => {

    const [show, setShow] = useState<boolean>(false);
    const handleShow = () => {
        setShow(!show);
    };
    return <HeaderStyled>
        <BurgerMenu show={show} />
        <Burger onClick={() => handleShow()} show={show} />
        <Navbar />
        <Slider />
    </HeaderStyled>;
};