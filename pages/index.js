
import { PizzaList } from "../components/ProductList/PizzaList";

const Home = ({result}) => {
  console.log(result)
  return <>
    <PizzaList pizza={result}/>
  </>;
};

export default Home;

export const getServerSideProps = async () => {
  const response = await fetch("/api/products/pizza");
  const data = await response.json();
  return {
    props: {
      result: data
    }
  };
};