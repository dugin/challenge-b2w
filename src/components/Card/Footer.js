import React from 'react';
import styled from 'styled-components';
import colors from "../../styles/constants/colors";
import PropTypes from "prop-types";


const Wrapper = styled.section`  
      display: flex;
      justify-content: center;
      & > p{
        color: ${colors.baliHai};
        font-size: 14px;
        text-align: start;
      }
`;

export const Content = styled.span`  
      color: ${colors.sapphire};
      font-size: 16px;
`;


const Footer = (props) => {
    const {appearedInMovie} = props;

    return (
        <Wrapper>
            <p>
                FEATURED IN
                <Content> {appearedInMovie === 0 ? 'NO' : appearedInMovie}</Content>
                {appearedInMovie === 1 ? ' FILM' : ' FILMS'}
            </p>

        </Wrapper>
    )
};

Footer.propTypes = {
    appearedInMovie: PropTypes.number.isRequired,
};
export default Footer;