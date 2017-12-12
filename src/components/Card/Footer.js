import React from 'react';
import styled from 'styled-components';
import colors from "../styles/constants/colors";


const Wrapper = styled.section`  
      display: flex;
      justify-content: center;
      & > p{
        color: ${colors.baliHai};
        font-size: 16px;
        text-align: start;
      }
`;


const Footer = (props) => {

    return (
        <Wrapper>
           <p>
           FEATURED IN 10 FILMS
           </p>

        </Wrapper>
    )
};
export default Footer;