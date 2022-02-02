import styled from "styled-components";
import {popularProducts} from "../data"
import { mobile } from "../responsive";
import Product from "./Product";

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap; //Para que os produtos não saiam da borda da pagina, indo para baixo
justify-content: space-between;
${mobile({ justifyContent: "space-around"})}
`

const Products = () => {
  return <Container>
      {popularProducts.map((item) => (
          <Product item={item} key={item.id}/>
      ))}
  </Container>;
};

export default Products;
