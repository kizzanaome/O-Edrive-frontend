import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import SignUpPage from '../pages/signup/SignUpPage';

class Routes extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/sign_up" exact component={SignUpPage} />
                    {/* <Route path="/notfound" exact component={Notfoundpage} /> */}
                </Switch>
            </Router>
        )
    }
}

export default Routes;
