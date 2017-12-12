import React, {PureComponent} from 'react';
import styled from 'styled-components';
import {Box} from "grid-styled";
import Card from "../components/Card";
import Button from "../components/Button";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {fetchPlanet, fetchPlanets} from "../planet/planet.action";

const Container = styled(Box)`
  max-width: 470px;
  margin: auto;
  text-align: center;
  position: relative;
  
  & > * {
    margin-bottom: 20px;
  }
`;


class Home extends PureComponent {

    onNext = () => {
        if (this.props.planetID) {
            this.props.history.replace(`/planet/${this.props.planetID}`);

            this.fetchPlanet(this.props.planetID);
        }
        else {
            this.fetchPlanet();
            this.props.history.replace(`/`)
        }
    };

    componentDidMount() {
        const {pathname} = this.props.location;

        if (pathname.includes('planet'))
            this.fetchPlanet(pathname.substring(pathname.lastIndexOf('/') + 1));

        else if (pathname === '/')
            this.fetchPlanet();
    }

    fetchPlanet(id) {
        this.props.dispatch(id ? fetchPlanet(id) : fetchPlanets());
    }

    render() {
        return (
            <Container
                width={[7 / 8, 4 / 7, 1 / 2, 3 / 7]}>

                <Card
                    isLoading={this.props.isLoading}
                    isError={this.props.error}
                    planet={this.props.planet}/>
                <Button
                    isLoading={this.props.isLoading}
                    text={'Next'}
                    onPress={() => this.onNext()}/>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const {planet, amount, isDone, error} = state.planets;

    return {
        planet,
        planetID: amount !== 0 && Math.floor((Math.random() * amount) + 1),
        isLoading: !isDone,
        error: !!error
    }
};

export default connect(mapStateToProps)(withRouter(Home));
