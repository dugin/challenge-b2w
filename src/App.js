import React, {PureComponent} from 'react';
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SEO from "./components/SEO";


class App extends PureComponent {

    render() {
        return (
            <div>
                <SEO/>
                <Home/>
                <Footer/>
            </div>
        );
    }
}

export default App;
