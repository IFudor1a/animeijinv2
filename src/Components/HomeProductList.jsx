import React, {useEffect, useState} from 'react';
import styled, {keyframes} from 'styled-components';
import ProductCards from "./Product/ProductCard";
import {leftArrow, rightArrow} from "../ExportFiles";
import {mobile, smallSize} from "../responsive";

const FadeAnimation = keyframes`
    0% {
      transform: translateY(-100%);
    }
  100% {
    transform: translateY(0%);
  }
`;
const Products = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 50px;
  width: 100%;
  height: 75vh;
  ${mobile({overflowX: 'visible', height: '100vh'})}
  ${smallSize({overflowX: 'visible', height: '75vh'})}
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
  ${mobile({display:'none'})}
  ${smallSize({display:'none'})}
`;
const Title = styled.h2`
  font-family: Montserrat, sans-serif;
  font-size: 34px;
  margin-top: 100px;
  text-align: center;
  letter-spacing: 1.5px;
  font-weight: 500;
  color: #1d1d1f;
  animation: ${({scroll}) => (scroll && `${FadeAnimation} .5s`)};
`;

const ProductWrapper = styled.div`
  justify-content: space-between;
  justify-items: flex-start;
  display: flex;
  width: 125vw;
  padding: 100px 150px;
  scroll-behavior: smooth;
  transition: all .4s;
  transform: translateX(${(props) => props.slideIndex * -25}vw);
  ${mobile({width: '100vw', padding: '100px 10px'})}
  
  
  &::-webkit-scrollbar {
    display: none;
  }

`;

const ContainerFooter = styled.hr`
  width: 100vw;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  margin-bottom: 30px;
  ${smallSize({color: 'black', border: '1px solid black', marginBottom: '12px'})}
  ${mobile({color: 'black', border: '1px solid black', marginBottom: '12px',fontSize: '12px'})}
`;

const HomeProductList = ({title, SliderProducts}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [scroll,setScrolled] = useState(false);
    const SlideCount = SliderProducts && Math.round((SliderProducts.length - 1)/4);
    useEffect(() => {
        setTimeout(() => {setScrolled(false)}, 5000)
    }, [scroll])
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex >= SlideCount ? slideIndex - 1 : SlideCount);
        } else {
            setSlideIndex(slideIndex < SlideCount ? slideIndex + 1 : 0)
        }
    }
    return (
        <div onScroll={() => setScrolled(true)}>
            <Title scroll = {scroll}>{title}</Title>
            <Products>
                <Arrow direction="left" onClick={() => handleClick('left')}>
                    {leftArrow}
                </Arrow>
                   <ProductWrapper slideIndex={slideIndex}>
                    { SliderProducts && SliderProducts.map(el => (<ProductCards el={el} key = {el.id}/>))
                    }
                </ProductWrapper>
                <Arrow direction={'right'} onClick={() => handleClick('right')}>
                    {rightArrow}
                </Arrow>
            </Products>
            <Button>View All Products</Button>
            <ContainerFooter/>
        </div>
    );
};

export default HomeProductList;