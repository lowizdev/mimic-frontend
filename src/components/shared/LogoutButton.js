import React from 'react';
import {logout} from '../../services/auth.js';

class LogoutButton extends React.Component{

    handleLogout = async (e) => {
        
        e.preventDefault();
        await logout();

        this.props.history.push('/login');

    }

    render(){
        return(
            <button onClick = { this.handleLogout }>
                Logout
            </button>
        );
    }

}

export default LogoutButton;