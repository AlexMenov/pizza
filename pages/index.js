
import { PizzaList } from "../components/ProductList/PizzaList";

const Home = (result) => {
  return <>
    <PizzaList pizza={result}/>
  </>;
};

export default Home;

export const getServerSideProps = async () => {
  const response = await fetch(process.env.API_HOST + "/products/pizza");
  const data = await response.json();
  return {
    props: {
      result: data
    }
  };
};