import React from 'react';
import api from '../services/api.js';
import {login} from '../services/auth.js';

class Login extends React.Component{

    state = {
        username: '',
        password: '',
        error: '',
    }

    handleLogin = async (e) => {
        e.preventDefault();

        const {username, password} = this.state;

        console.log([username, password]);

        try{

            const response = await api.get('/users/login', {username, password});
            console.log(response);
            //login()

        }catch(err){
            console.log(err);
        }

    }

    render(){
        return (
            <div>
                <form onSubmit = {this.handleLogin}>
                    
                    <input type='text' name='username' value={this.state.username}
                        onChange={(e) => { this.setState({ username: e.target.value }) }}
                    >
                    </input>
                    <input type='password' name='password' value={this.state.password}
                        onChange={(e) => {this.setState({ password: e.target.value }) }}
                    >
                    </input>

                    <button type='submit'>Login</button>
                </form>
            </div>
        );
    }

}

export default Login;