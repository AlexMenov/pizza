import { ProductInfoStyled } from "./ProductInfo.style";
import { ProductSize } from "./ProductInfo.style";
import { ProductAdditional } from "./ProductInfo.style";
import { Htag } from "../Htag/Htag";
import { Button } from "../Button/Button";
import { Paragraph } from "../Paragraph/Paragraph";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ProductInfoProps, ProductAdditionalProps } from "./ProductInfo.props";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/orders/ordersSlice";
import uniqid from "uniqid";
import { Popup } from "../Popup/Popup";

export const ProductInfo = ({ result }: any) => {
    const { _id, title, desсription, img, prices, extraOptions } = result[0];
    const dispatch = useDispatch();
    const [size, setSize] = useState<number>(0.8);
    const [show, setShow] = useState<boolean>(false);
    const [price, setPrice] = useState<ProductInfoProps>({
        quantity: 1,
        pizzaPrice: prices[1],
        additional: [],
    });
    const [totalPrice, setTotalPrice] = useState<number>(0);
    useEffect(() => {
        let additionalPrice = 0;
        if (price.additional.length > 0) {
            price.additional.map(({price}) => additionalPrice += price);
        }
        const priceOfPizza = (price.pizzaPrice + additionalPrice) * price.quantity;
        setTotalPrice(priceOfPizza); 
    }, [price.additional, price.pizzaPrice, price.quantity]);
    const handleSize = (scale: number) => {
        setSize(scale);
    };
    const handleSizePrice = (addPrice: number) => {
        setPrice(() => ({ ...price, pizzaPrice: addPrice }));
    };
    const handleQuantityPrice = (event: React.FormEvent<HTMLInputElement>) => {
        const input = +(event.target as HTMLInputElement).value;
        setPrice(() => ({ ...price, quantity: input }));
    };
    const handleCheckedPrice = (event: React.FormEvent<HTMLInputElement>, text: string, addPrice: number) => {
        const input = event.target as HTMLInputElement;
        const newAdditional = JSON.parse(JSON.stringify(price.additional));
        if (input.checked) {
            newAdditional.push({ title: text, price: addPrice });
            setPrice(() => ({ ...price, additional: newAdditional }));
        } else {
            const check = newAdditional.find(({ title }: any) => title === text);
            newAdditional.splice(check, 1);
            setPrice(() => ({ ...price, additional: newAdditional }));
        }
    };
    const handleAddToOrders = () => {
        const order = {
            added: false,
            id: uniqid(),
            _id,
            size,
            extras: price.additional,
            quantity: +price.quantity,
            src: img,
            totalPrice,
            title
        };
        dispatch(addProduct(order));
    };
    const showCat = () => {
        setShow(true);
        setTimeout(() => setShow(false), 2000);
    };
    return <ProductInfoStyled>
        <div>
            <Image src={img} width={500} height={500} style={{ transform: `scale(${size})`, transition: "transform .3s " }} />
        </div>
        <div style={{ height: "500px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
            <Htag tag="h3">{title}</Htag>
            <Paragraph size="L">{totalPrice}$</Paragraph>
            <Paragraph size="M">{desсription}</Paragraph>
            <Paragraph size="L" style={{ fontSize: "25px" }}>Choose the size</Paragraph>
            <div style={{ display: "flex", columnGap: "50px", cursor: "pointer" }}>
                <div style={{ position: "relative", marginBottom: "auto" }} onClick={() => { handleSize(0.6); handleSizePrice(prices[0]); }}>
                    <Image src={"/img/pizza_icon.svg"} width={50} height={50} />
                    <ProductSize>small</ProductSize>
                </div>
                <div style={{ position: "relative", marginBottom: "auto" }} onClick={() => { handleSize(0.8); handleSizePrice(prices[1]); }}>
                    <Image src={"/img/pizza_icon.svg"} width={60} height={60} />
                    <ProductSize>medium</ProductSize>
                </div>
                <div style={{ position: "relative", marginBottom: "auto" }} onClick={() => { handleSize(1); handleSizePrice(prices[2]); }}>
                    <Image src={"/img/pizza_icon.svg"} width={70} height={70} />
                    <ProductSize>large</ProductSize>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Paragraph size="L" style={{ fontSize: "25px" }}>Choose additional ingredients</Paragraph>
                {extraOptions.map(({ text, price, _id }: ProductAdditionalProps) => {
                    return <label style={{ cursor: "pointer", marginTop: "10px" }} key={_id} >
                        <ProductAdditional onChange={(event) => handleCheckedPrice(event, text, price)} type={"checkbox"} name={text}></ProductAdditional>
                        {text} + {price}$
                    </label>;
                })}
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <input onChange={handleQuantityPrice} type="number" name="quantity" value={price.quantity} min={0} style={{ height: "40px", marginRight: "10px", width: "100px" }} />
                <div onClick={() => { handleAddToOrders(); showCat(); }}><Button>add to card</Button></div>
            </div>
            <Popup show={show} />
        </div>
    </ProductInfoStyled>;
};