import { PizzaListStyled } from "./Pizza.style";
import { PizzaCard } from "../ProductCard/PizzaCard";

export const PizzaList = ({ pizza }: any) => {
    return <PizzaListStyled>
        {pizza?.map(({ _id, title, desсription, img, prices, extraOptions }: any) => {
            return <PizzaCard title={title} img={img} key={_id} desсription={desсription} prices={prices} extraOptions={extraOptions} _id={_id}/>;
        })}
    </PizzaListStyled>;
};