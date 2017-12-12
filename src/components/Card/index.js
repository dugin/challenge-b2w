import React from 'react';
import styled from 'styled-components';
import Title from "./Title";
import Body from "./Body";
import Footer from "./Footer";
import {Box} from 'grid-styled'


const Wrapper = styled.section`
      background-color: white;
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
      border-radius: 5px;
      position:relative;
`;

const Card = (props) => {

    return (
        <Wrapper>
            <Box width={[
                4 / 5,
            ]}>
                <Title text='PLANET NAME'/>
                <Body/>
                <Footer/>
            </Box>
        </Wrapper>
    )
};
export default Card;