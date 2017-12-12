import React from 'react';
import colors from "../styles/constants/colors";
import ReactLoading from 'react-loading';
import styled from 'styled-components';


const Container = styled.section`
 position:absolute;
 z-index: 1;
 width: 100%;
 height: 100%;
 display: flex;
 align-items: center;
 flex-direction: column;
 justify-content: center;
 
 & > *{
 margin-bottom: 10px;
 font-size: 14px;
 color:${colors.sapphire};
 font-weight: 300;
 }
`;



const Loader = (props) => {

    return (
        <Container>
            <ReactLoading type="spin" color={colors.sapphire} delay={0}  height={30} width={30}/>
            <span>Loading...</span>
        </Container>
    )
};
export default Loader;