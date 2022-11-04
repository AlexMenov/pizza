import Image from 'next/image';
import { PizzaCardStyled } from './PizzaCard.style';
import { Htag } from '../Htag/Htag';
import { Paragraph } from '../Paragraph/Paragraph';
import { indexProps } from '../../pages/index.props';
import Link from 'next/link';
export const PizzaCard = ({  _id, title, desсription, img, prices }: indexProps): JSX.Element => {
    return <PizzaCardStyled>
        <Link href={`/products/pizza/${_id}`}>
            <a>
                <Image src={img} width={200} height={200} />
                <Htag tag={"h3"}>{"pizza " + title}</Htag>
                <Paragraph size="S">{desсription}</Paragraph>
                <Paragraph size="L">from {prices[0]}$</Paragraph>
            </a>
        </Link>
    </PizzaCardStyled>;
};