import Image from "next/image";
import styled, { css } from "styled-components";
import { SliderStyled } from "./Slider.style";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
import { device } from "../../styles/theme";

const arrow = css`
    position: absolute !important;
    z-index: 2;
    cursor: pointer;
`;

const ArrowL = styled.div`
    ${arrow};
    left: 15%;
    @media ${device.desktop} {
        left: 5%;
    }
    @media ${device.tablets} {
        left: 15%;
    }
    @media ${device.correction} {
        left: 0%;
        bottom: 0%;
        width: 70px;
    }
`;

const ArrowR = styled.div`
    ${arrow};
    right: 15%;
    @media ${device.desktop} {
        right: 5%;
    }
    @media ${device.tablets} {
        right: 5%;
    }
    @media ${device.correction} {
        right: 0%;
        bottom: 0%;
        width: 70px;
    }
`;

const Pizza = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 400px;
    height: 400px;
    margin: auto;
    cursor: pointer;
    transition: transform .3s;
    &:hover {
        transform: translate(0, 10px);
        transition: transform .3s;
    }
    @media ${device.tablets} {
        width: 300px;
        height: 300px;
        img {
            width: 300px !important;
            height: 300px !important;
            left: 100px;
        }
    }
`;

const PizzaContainer = styled.div`
    height: 100%;
    min-width: 400px;  
    opacity: 0;
    transition: opacity 1s ease-in-out 0.3s;
    @media ${device.tablets} {
        min-width: 300px;  
    }
`;

const pizza = [
    { src: "/img/pepperoni_pizza.png", id: uniqid() },
    { src: "/img/hamburger_pizza.png", id: uniqid() },
    { src: "/img/vegan_pizza.png", id: uniqid() }
];

export const Slider = () => {
    const [move, setMove] = useState(0);
    const [translate, setTranslate] = useState(400);

    useEffect(
        () => {
            if (window && window.screen.width < 481) {
                setTranslate(300);
            } else {
                setTranslate(400);
            }
        }
        , [move]);

    const handleClick = (direction: string): void => {
        switch (direction) {
            case "l":
                setMove(l => l > 0 ? --l : 2);
                break;
            case "r":
                setMove(r => r < 2 ? ++r : 0);
                break;
        }
    };
    return <SliderStyled>
        <ArrowL>
            <Image width={100} height={100} src={"/img/arrowl.png"} alt={"left"} onClick={() => handleClick("l")} />
        </ArrowL>
        <Pizza style={{ overflow: "hidden" }}>
            <Pizza style={{ transform: `translateX(${-translate * move}px)` }} >
                {pizza.map(({ src, id }, index) => {
                    return <PizzaContainer key={id} style={move !== index ? { opacity: 0 } : { opacity: 1 }} ><Image width={400} height={400} src={src} objectFit="contain" /></PizzaContainer>;
                })}
            </Pizza>
        </Pizza>
        <ArrowR>
            <Image width={100} height={100} src={"/img/arrowr.png"} alt={"right"} onClick={() => handleClick("r")} />
        </ArrowR>
    </SliderStyled>;
};