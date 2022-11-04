import { PizzaListStyled } from "./Pizza.style";
import { PizzaCard } from "../ProductCard/PizzaCard";
import { indexProps } from "../../pages/index.props";

export const PizzaList = ({ pizza }: any) => {
    return <PizzaListStyled>
        {pizza.result?.map(({ _id, title, desсription, img, prices, extraOptions }: indexProps) => {
            return <PizzaCard title={title} img={img} key={_id} desсription={desсription} prices={prices} extraOptions={extraOptions} _id={_id}/>;
        })}
    </PizzaListStyled>;
};