import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from 'react-router-dom';

import {isAuthenticated} from './services/auth.js';

import Login from './pages/Login.js';

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
                <Route exact path='/login' component={Login}></Route>
            </Switch>
        </Router>
    );
}

export default Routes;