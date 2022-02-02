import { MenuItem } from "@material-ui/core";
import styled from "styled-components";
import {mobile, notFullScreen} from "../responsive";

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative; /* Se vou usar position absolute, o parent deve ser relative */
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover; /* Para não distorcer a imagem */
${mobile({ height: "20vh"})}
${notFullScreen({ height: "40vh"})}
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Title = styled.h1`
color: white;
margin-bottom: 20px;
`
const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 600;
transition: all 0.3s ease;

&:hover {
  transform: scale(1.1);
  color: #a5a5a5;
}
`

function CategoryItem({item})  {
  return <Container>
    <Image src={item.img}/>
    <Info>
      <Title> {item.title} </Title>
      <Button>SHOP NOW</Button>
    </Info>
  </Container>;
}

export default CategoryItem;
