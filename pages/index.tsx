import { indexProps } from "./index.props";
import { PizzaList } from "../components/ProductList/PizzaList";

const Home = (result:[indexProps]) => {
  return <>
    <PizzaList pizza={result}/>
  </>;
};

export default Home;

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/products/pizza");
  const data = await response.json();
  return {
    props: {
      result: data
    }
  };
};