import React from 'react';
import api from '../../services/api.js';

class Register extends React.Component{

    state = {
        username: '',
        password: '',
        passwordconf: '',
        error: '',
    }

    handleRegister = async (e) => {

        e.preventDefault();

        const {username, password, passwordconf} = this.state;

        if(password !== passwordconf){
            this.setState({error: 'Password and confirmation not matching'});
            return;
        }

        try{

            const response = await api.post('/users/register', {username, password});

            //TODO: CHECK RESPONSE
            this.props.history.push('/');

        }catch(err){
            console.log(err);
        }


    }

    render(){
        return(
            <div>

                <form onSubmit={ this.handleRegister }>

                    <input type="text" name="username" value={this.state.username} 
                        onSubmit={(e) => {this.setState( { username: e.target.value } )}}
                    />
                    <input type="password" name="password" value={this.state.password}
                        onSubmit={(e) => {this.setState( { password: e.target.value } )}}
                    />
                    <input type="password" name="passwordconf" value={ this.state.passwordconf }
                        onSubmit={(e) => {this.setState( { passwordconf: e.target.value } )}}
                    />

                    <button type="submit">Registrar</button>

                </form>

            </div>
        );
    }

}

export default Register;