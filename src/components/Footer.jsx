import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column"})}
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none" })}
`
const Title = styled.h3`
margin-bottom: 30px;
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
    
const ListItem = styled.li`
width: 50%; //Quanto da lista vai aparecer por coluna
margin-bottom: 10px;
cursor: pointer;
`

const Right = styled.div`
flex: 1;
padding: 20px;
display: flex;
align-items: baseline;
flex-direction: column;
justify-content: flex-start;
`

const ContactItem = styled.div`
justify-self: baseline;
display: flex;
align-items: center;
margin-bottom: 15px;
`

const Payement = styled.img`
width: 40%;
`

const Logo = styled.h1``

const Desc = styled.p`
margin: 20px 0px;
`

const SocialContainer = styled.div`
display: flex;
`

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor: pointer;
`

function Footer() {
  return <Container>
      <Left>
          <Logo>ALGUSTU.</Logo>
          <Desc>
              This is a showcase website. Not a real E-Comerce.
          </Desc>
          <SocialContainer>
              <SocialIcon color="E4405F">
                  <Instagram/>
              </SocialIcon>
              <SocialIcon color="55ACEE">
                  <Twitter/>
              </SocialIcon>
              <SocialIcon color="3B5999">
                  <Facebook/>
              </SocialIcon>
          </SocialContainer>
      </Left>
      <Center>
          <Title>Useful Links</Title>
          <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Man Fashion</ListItem>
              <ListItem>Woman Fashion</ListItem>
              <ListItem>Accessories</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Order Tracking</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Terms</ListItem>
          </List>
      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem>
              <Room style={{marginRight:"10px"}}/>
              394 Fake Street , West Fake City 23422
          </ContactItem>
          <ContactItem>
              <Phone style={{marginRight:"10px"}}/>
              +1 234 56 78
          </ContactItem>
          <ContactItem>
              <MailOutline style={{marginRight:"10px"}}/>
              Algustu@fakeemail.com
          </ContactItem>
          <Payement src="./Images/imgCreditCard.png"/>
      </Right>
  </Container>;
}

export default Footer;
