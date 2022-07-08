import React from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";

const Row = styled.div`
    position: relative;
    display: block;
    height: 20vh;
    
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 0;
  ${mobile({flexDirection: 'column'})}
`;
const LogoItem = styled.div`
  display: inline-block;
  vertical-align: middle;
  max-width: 160px;
  margin: 0 20px 20px;
`;
const Logo_item_img = styled.span`
  background-repeat: no-repeat;
  background-size: cover;
  width: 160px;
  height: 70px;
  background-image: url(${(props) => props.src});
  display: block;
`;
const Logos = ({logo}) => {
    return (
        <div>
            <Container>
                {
                    logo.map((el) => (
                        <LogoItem key = {el.id}>
                            <a><Logo_item_img src = {el.img}/> </a>
                        </LogoItem>
                    ))
                }
            </Container>
        </div>
    );
};

export default Logos;