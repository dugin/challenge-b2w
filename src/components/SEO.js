import React from 'react';
import {Helmet} from "react-helmet";


const SEO = () => {

    return (
        <Helmet>
            <title>B2W-Bit Challenge</title>
            <meta name="description" content="A frontEnd challenge"/>
            <meta name="author" content="Rodrigo Dugin"/>
            <meta property="og:type" content="challenge"/>
        </Helmet>
    )
};
export default SEO;