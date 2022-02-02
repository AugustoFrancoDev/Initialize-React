import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {sliderItems} from "../data"
import {mobile, notFullScreen} from "../responsive"

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
${notFullScreen({display: "none"})}
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #faf1f1;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute; /* Se estou usando absolute, o parent deve ser relative */
top: 0;
bottom: 0;
left: ${props=> props.direction === "left" && "10px"}; /* Lembrar do prop */
right: ${props=> props.direction === "right" && "10px"}; /* Lembrar do prop */
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`
const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props=>props.slideIndex *-100}vw);
`

const Slide = styled.div`
width: 100vw;
height: 100vh;
display:flex;
align-items: center;
background-color: #${props=>props.bg};
`


const ImgContainer = styled.div`
height: 100%;
flex:1;
`

const Image = styled.img`
height: 80%; 
padding: 50px;
`

const Title = styled.h1`
font-size: 70px;
`

const Desc = styled.p`
margin: 50px 0px;
font-style: 20px;
font-weight: 500;
letter-spacing: 3px;
`

const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
transition: all 0.3s ease;

&:hover {
    transform: scale(1.1);
    background-color: rgba(236, 236, 236,0.4);
}
`

const InfoContainer = styled.div`
flex:1;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const slideLenght = sliderItems.length
    const autoPass = true;
    let slideInterval;
    let intervalTime = 5000;

    function clearTime() {
        clearInterval(slideInterval)
    }
    
    function left() {
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : slideLenght-1)    
    }
    
    function right() {
        setSlideIndex(slideIndex < slideLenght-1 ? slideIndex +1 : 0)
    }
    
    function auto() {
        slideInterval = setInterval(right, intervalTime)
    }

    useEffect(() => {
        if (autoPass) {
            auto();
        }
        return () => clearTime()
    });

    const handleClick = (direction) => {
    if(direction==="left"){
        left()
    } else {
        right();
     } 
};


  return <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
          {sliderItems.map(item=>(
          <Slide bg={item.bg} key={item.id}>
          <ImgContainer>
              <Image src={item.img}/> 
          </ImgContainer>
          <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
          <Button>SHOW NOW</Button>
          </InfoContainer>
          </Slide>
          ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined/>
      </Arrow>
  </Container>;
};

export default Slider;