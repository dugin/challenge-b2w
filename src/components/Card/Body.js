import React from 'react';
import styled from 'styled-components';
import colors from "../../styles/constants/colors";
import PropTypes from "prop-types";


const Wrapper = styled.section`  
      padding-bottom: 10px;
      border-bottom: 1px solid ${colors.pattensBlue};
      & > p{
        color: ${colors.baliHai};
        font-size: 14px;
        text-align: start;
      }
`;

const Content = styled.span`  
     color: ${colors.sapphire};
     font-size: 16px;
     margin-left: 10px;
`;

const constants = ['POPULATION', 'CLIMATE', 'TERRAIN'];

const Body = (props) => {

    const {planet} = props;

    return (
        <Wrapper>
            {constants.map(c => <p key={c}> {c}: <Content>{planet[c.toLowerCase()].toUpperCase()} </Content></p>)}
        </Wrapper>
    )
};

Body.propTypes = {
    planet: PropTypes.object.isRequired,
};

export default Body;