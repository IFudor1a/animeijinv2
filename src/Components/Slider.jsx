import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {mobile, smallSize} from '../responsive';
import {leftArrow, rightArrow} from "../ExportFiles";

const sliderItems = [
    {
        id: 1,
        img: "https://cdn.shopify.com/s/files/1/0070/1700/5113/products/BZ9PKGULT_1_800x.jpg?v=1607454933",
        title: "SUMMER SALE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "f5fafd",
    },
    {
        id: 2,
        img: "https://cdn.shopify.com/s/files/1/0070/1700/5113/files/june_slides_banner_2000x.jpg?v=1655755257",
        title: "AUTUMN COLLECTION",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "fcf1ed",
    },
    {
        id: 3,
        img: "https://cdn.shopify.com/s/files/1/0070/1700/5113/files/titan_banner_2000x.jpg?v=1652194760",
        title: "LOUNGEWEAR LOVE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "fbf0f4",
    },
];

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: center;
  ${mobile({height: '90vh'})}
  
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '20px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  position: relative;
  flex: auto;
  ${mobile({width:'auto'})}
  
`;
const TextInImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  background-color: #${(props) => props.bg};
  ${smallSize({display: 'block'})}
  ${mobile({display: 'block',top: '50%', padding: '12px', borderRadius: '24px'})}
  
`;
const Image = styled.img`
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${mobile({height: '100%', width: '100%'})}
`;
const InfoContainer = styled.div`
  flex: auto;
  padding: 50px;
  ${smallSize({display: 'none'})}
  ${mobile({display: 'none'})}
`;
const Title = styled.h1`
  font-size: 4.375em;
  ${smallSize({color: 'black'})}
  ${mobile({color: 'black', fontSize: '24px', marginTop: '12px', fontWeight: '600'})}
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${smallSize({color: 'black'})}
  ${mobile({color: 'black', fontSize: '12px', margin: '15px 0'})}
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  ${smallSize({color: 'black', border: '1px solid black', marginBottom: '12px'})}
  ${mobile({color: 'black', border: '1px solid black', marginBottom: '12px',fontSize: '12px'})}
`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    useEffect(() => {
       const timeout = setTimeout( () =>{
            setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1: 0)}, 5000);
        return () => {clearTimeout(timeout)}
}, [slideIndex])
    const handleClick = (direction) => {
        if(direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
        } else {
            setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0)
        }
    }
    return (
        <Container>
            <Arrow direction ="left" onClick={() => handleClick('left')}>
                {leftArrow}
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
                {
                    sliderItems.map((item) => (
                       <Slide bg={item.bg} key={item.id}>
                           <ImgContainer>
                               <Image src={item.img}/>
                               <TextInImage bg = {item.bg}>
                                   <Title>
                                       {item.title}
                                   </Title>
                                   <Desc>{item.desc}</Desc>
                                   <Button>SHOW NOW</Button>
                               </TextInImage>
                           </ImgContainer>
                           <InfoContainer>
                               <Title>
                                   {item.title}
                               </Title>
                               <Desc>{item.desc}</Desc>
                               <Button>SHOW NOW</Button>
                           </InfoContainer>
                       </Slide>
                    ) )
                }
            </Wrapper>
            <Arrow direction={'right'} onClick={() => handleClick('right')}>
                { rightArrow }
            </Arrow>
        </Container>
    );
};

export default Slider;