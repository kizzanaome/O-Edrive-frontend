import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import SignUpPage from '../pages/authentication/SignUpPage';
import PasswordResetPage from '../pages/authentication/PasswordResetPage';

class Routes extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/auth/sign_up" exact component={SignUpPage} />
                    <Route path="/password_reset" exact component={PasswordResetPage} />
                    {/* <Route path="/notfound" exact component={Notfoundpage} /> */}
                </Switch>
            </Router>
        )
    }
}

export default Routes;
