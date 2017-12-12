import React, {PureComponent} from 'react';
import styled from 'styled-components';
import {Box} from "grid-styled";
import Card from "../components/Card";
import Button from "../components/Button";

const Container = styled(Box)`
  max-width: 470px;
  margin: auto;
  text-align: center;
  
  & > * {
    margin-bottom: 20px;
  }
`;


class Home extends PureComponent {

    render() {
        return (
            <div>
                <Container width={[
                    7 / 8,
                    4 / 7,
                    1 / 2,
                    3 / 7
                ]}>
                    <Card info={'xyz'}/>
                    <Button text={'Next'}/>
                </Container>
            </div>
        );
    }
}

export default Home;
