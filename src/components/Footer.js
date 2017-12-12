import React from 'react';
import styled from 'styled-components';
import colors from "../styles/constants/colors";

const Wrapper = styled.footer`
     position: absolute;
     bottom: 10px;
     width: 100%;
     text-align: center;
     font-weight: 300;
     color: ${colors.baliHai};
`;

const Footer = (props) => {

    return (
        <Wrapper>
            Developed by Rodrigo Dugin
        </Wrapper>
    )
};
export default Footer;