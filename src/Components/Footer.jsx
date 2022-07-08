import React from 'react';
import styled from 'styled-components';
const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin: 50px auto;
`;
const Footer = () => {
    return (
        <FooterContainer>
            © Animeijin
        </FooterContainer>
    );
};

export default Footer;