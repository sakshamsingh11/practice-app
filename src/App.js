import React, { Fragment } from 'react';
import { renderRoutes } from "./routes"
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

const App = (props) => {
    return (
        <Fragment>
            <Header></Header>
            <div>
                {renderRoutes()}
            </div>
            <Footer></Footer>
        </Fragment>
    );
}

export default App;