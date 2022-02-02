import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Info = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.2); // para mudar opacidade
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
opacity: 0;
transition: 0.5s ease;
`

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 380px; // limita o numero de items por linha
display: flex;
align-items: center;
justify-content: center;
background-color: #eff2ff;
position: relative;
flex-wrap: wrap;
${mobile({ minWidth: "100px" })}

&:hover ${Info}{
    opacity: 1;
}
`

const Image = styled.img`
height: 80%;
width: 100%;
object-fit: scale-down;
z-index: 2;
`

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
cursor: pointer;

&:hover{
    background-color: #efe9ff;
    transform: scale(1.2);

}
`

const Product = ({item}) => {
  return <Container>
      <Image src={item.img}/>
      <Info>
      <Icon>
              <ShoppingCartOutlined/>
          </Icon>
          <Icon>
              <SearchOutlined/>
          </Icon>
          <Icon>
              <FavoriteBorderOutlined/>
          </Icon>
      </Info>
  </Container>
  
};

export default Product;
