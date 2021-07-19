import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Layout} from '../components';

import {Teams} from '../screens';

const Routes = () => (
    <Router>
        <Layout>
            <Switch>
                <Route component={Teams} path='/teams' />
            </Switch>
        </Layout>
    </Router>
);

export default Routes;