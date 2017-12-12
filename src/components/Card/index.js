import React from 'react';
import styled from 'styled-components';
import Title from "./Title";
import Body from "./Body";
import Footer from "./Footer";
import {Box} from 'grid-styled'
import Loader from "../Loader";
import PropTypes from "prop-types";

const Wrapper = styled.section`
      background-color: white;
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
      border-radius: 5px;
      position:relative;
      min-height: 250px;
      height: 100%;
`;

const Card = (props) => {

    const {isLoading, planet, isError} = props;


    if (isLoading)
        return <Wrapper> <Loader/> </Wrapper>;

    else if (isError)
        return <Wrapper> <h1>Not found</h1> </Wrapper>;

    else
        return (
            <Wrapper>
                <Box width={[4 / 5]}>
                    <Title text={planet.name}/>
                    <Body planet={planet}/>
                    <Footer appearedInMovie={planet.films.length}/>
                </Box>
            </Wrapper>
        )
};

Card.propTypes = {
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
    planet: PropTypes.object.isRequired
};

export default Card;