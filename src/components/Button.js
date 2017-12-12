import React from 'react';
import styled from 'styled-components';
import colors from "../styles/constants/colors";


const Wrapper = styled.button`
      box-shadow: 5px 5px 25px 0 ${colors.shadow};
      border-radius: 5px;
      border: none;
      background-color: ${colors.brightTurquoise};
      color: ${colors.sapphire};
      padding: 14px 48px;
      font-size: 16px;
      outline: none;
      
      &:hover{
      box-shadow:2px 4px 8px 0 ${colors.shadow};
      background-color: ${colors.caribbeanGreen};
      cursor: pointer;
      }
`;

const Button = (props) => {

    return (
        <Wrapper>
            {props.text}
        </Wrapper>
    )
};
export default Button;