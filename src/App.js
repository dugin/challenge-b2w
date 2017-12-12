import React, {PureComponent} from 'react';
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import {Redirect, Route, Switch} from "react-router-dom";


class App extends PureComponent {

    render() {
        return (
            <div>
                <SEO/>
                <Switch>
                    <Route path="/" component={Home}/>
                    <Route exact path="/planet/:id" component={Home}/>
                    <Redirect to="/" path="**" component={Home}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}
export default App;
