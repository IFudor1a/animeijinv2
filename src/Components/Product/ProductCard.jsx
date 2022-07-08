import React from 'react';
import styled, {keyframes} from "styled-components";
import {mobile, smallSize} from "../../responsive";


const ProductImageContainer = styled.div`
  height: 450px;
  position: relative;
`;

const FadeAnimation = keyframes`
    0% {
      opacity: 0;
    }
  100% {
    opacity: 1;
  }
`;
const ProductOverlay = styled.div` 
  visibility: hidden;
  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  backdrop-filter: blur(2px);
  justify-content: center;
  align-items: center;
`;
const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
`;
const ProductCard = styled.div`
    width: 350px;
    box-shadow: 2px 2px 20px rgba(0,0,0,0.2);
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    flex:  0 0 auto;
    margin-right: 100px;
  ${mobile({width: '100%', })}
  ${smallSize({width: '50%'})}
  &:hover ${ProductOverlay} {
    visibility: visible;
    animation: ${FadeAnimation} 0.5s;
  }
`;
const ProductButton = styled.a`
  display: flex;
    width: 160px;
  text-decoration: none;
  color: black;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-weight: 700;
  letter-spacing: 1px;
  font-family: Calibri, sans-serif;
  border-radius: 20px;
  box-shadow: 2px 2px 30px rgba(0,0,0,0.2);
  &:hover{
    color: #ffffff;
    background-color: #f7453f;
    transition: all ease .3s;
  }
`;
const ProductTextContainer = styled.div`
    width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-sizing: border-box;
  font-family: Nunito Sans, sans-serif;
`;
const ProductTitle = styled.div`
    display: flex;
    color: #333333;
    font-weight: 600;
    font-size: 1.1rem;
    font-family: Nunito Sans, sans-serif;
   letter-spacing: 1.5px;
`;
const ProductDescription = styled.p`
    display: flex;
    color: rgba(26,26,26,0.5);
`;
const ProductPrice = styled.a`
  color: #222222;
  margin: 5px 0;
  font-family: Nunito Sans, sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
`;
const ProductCards = ({el}) => {

    return (
        <ProductCard>
            <ProductImageContainer>
                <ProductOverlay>
                    <ProductButton href="#">
                        Show Detail
                    </ProductButton>
                </ProductOverlay>
                <ProductImage src = {el.img}/>
            </ProductImageContainer>
            <ProductTextContainer>
                <ProductTitle>
                    {el.title}
                </ProductTitle>
                <ProductDescription>
                    {el.description}
                </ProductDescription>
                <ProductPrice href='#'>{el.price}</ProductPrice>
            </ProductTextContainer>
        </ProductCard>
    );
};

export default ProductCards;