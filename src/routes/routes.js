import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../pages/home/homepage';
// import Notfoundpage from '../shared/Not';
// import Footer from '../shared/footer/Footer';

class Routes extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    {/* <Route path="/notfound" exact component={Notfoundpage} /> */}
                </Switch>
            </Router>
        )
    }
}

export default Routes;
