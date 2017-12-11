import React, {PureComponent} from 'react';
import {Helmet} from "react-helmet";


class App extends PureComponent {

    render() {
        return (
            <div>
                <Helmet title="React App" />
               Hello World.
            </div>
        );
    }
}

export default App;
