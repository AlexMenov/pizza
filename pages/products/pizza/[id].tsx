import { ProductInfo } from "../../../components/ProductInfo/ProductInfo";


const Pizza = ({result}: any) => {
    return <ProductInfo result={result}/>;
};

export default Pizza;

export const getServerSideProps = async ({ params }: any) => {
    
    const id = params.id;
    const response = await fetch(`${process.env.API_HOST}/products/pizza/${id}`);
    const data = await response.json();
    return {
        props: {
            result: data
        }
    };
};