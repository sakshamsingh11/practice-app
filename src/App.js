import React, { Component, Suspense } from 'react';
import { Link, Route } from 'react-router-dom';
import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent'; // used react lazy instead of this

const AsyncPizza = React.lazy(() => import('./containers/Pizza.js')); //Lazy loading

class App extends Component {
    render () {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link> | <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users} />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Route path="/pizza" component={AsyncPizza} />
                    </Suspense>
                </div>
            </div>
        );
    }
}

export default App;