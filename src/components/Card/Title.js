import React from 'react';
import styled from 'styled-components';
import colors from "../../styles/constants/colors";
import PropTypes from "prop-types";


const Wrapper = styled.h1`  
      color: ${colors.brightTurquoise};
      font-weight: 300;
      padding-bottom: 10px;
      border-bottom: 1px solid ${colors.pattensBlue};
`;

const Title = (props) => {

    return (
        <Wrapper>
            {props.text}
        </Wrapper>
    )
};

Title.propTypes = {
    text: PropTypes.string.isRequired,
};
export default Title;