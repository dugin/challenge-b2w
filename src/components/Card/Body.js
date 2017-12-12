import React from 'react';
import styled from 'styled-components';
import colors from "../../styles/constants/colors";


const Wrapper = styled.section`  
      padding-bottom: 10px;
      border-bottom: 1px solid ${colors.pattensBlue};
      & > p{
        color: ${colors.baliHai};
        font-size: 14px;
        text-align: start;
      }
`;

const constants = ['POPULATION', 'CLIMATE', 'TERRAIN'];

const Body = (props) => {

    return (
        <Wrapper>
            {constants.map(c=> <p key={c}> {c}: </p>)}
        </Wrapper>
    )
};
export default Body;