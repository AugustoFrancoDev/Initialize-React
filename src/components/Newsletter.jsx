import {Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive"

const Container = styled.div`
height: 30vh;
background-color: #d8d2d2;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
font-style: 70px;
margin-bottom: 20px;
`

const Description = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${mobile({ textAlign: "center"})}
`

const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: #e0e0e0;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${mobile({ widht: "80%"})}
`

const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`

const Button = styled.button`
flex: 1;
border: none;
background-color: #868383;
color: #e0e0e0;
cursor: pointer;
transition: 0.3s ease;

&:hover {
  transform: scale(1.1);
  background-color: #a19f9f;
}
`


const Newsletter = () => {
  return <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products</Description>
      <InputContainer>
      <Input placeholder="Your email"/>
      <Button>
          <Send/>
      </Button>
      </InputContainer>
  </Container>;
};

export default Newsletter;
