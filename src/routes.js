import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from 'react-router-dom';

import {isAuthenticated} from './services/auth.js';

import Login from './pages/User/Login.js';
import ReadResourcePage from "./pages/Resource/ReadResourcePage.js";
import ScanResourcePage from "./pages/Resource/ScanResourcePage.js";
import ResourceDashboard from "./pages/Resource/ResourceDashboard.js";

const PrivateRoute = ({component: Component, ...rest}) => {

    return(
        <Route {...rest}
            render = {
                (props) => {
                    return (
                        isAuthenticated() ? (<Component {...props} />) : 
                        (<Redirect to = {{
                            pathname: '/login',
                            state: { from: props.location }
                        }}/>)
                    );
                }
            }
        
        />
    );

}

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/scan' component={ScanResourcePage}></Route>
                <Route exact path='/resources/:id' component={ReadResourcePage}></Route>
                <Route exact path='/resources/' component={ResourceDashboard}></Route>
                <Route exact path='/login' component={Login}></Route>
            </Switch>
        </Router>
    );
}

export default Routes;