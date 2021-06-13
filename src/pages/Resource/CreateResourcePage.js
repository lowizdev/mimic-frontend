import React from 'react';
import api from '../../services/api.js';

class CreateResourcePage extends React.Component{

    state = {
        name: '',
        error: '',
    }

    handleCreateResource = (e) => {
        e.preventDefault();

        const {name} = this.state;

        try{

            const response = api.post('/resources', {name});
            this.props.history.push('/resources/' + response.data.id);

        }catch(err){
            console.log(err);
        }

    }
    //TODO: HANDLE QRCODES
    render(){
        return(
            <div>
                <form>
                    <input type='text' name='name' value={ this.state.name } 
                        onChange={(e) => {this.setState({name: e.target.value})}}/>
                    <button type='submit'></button>
                </form>
            </div>
        );
    }

}

export default CreateResourcePage;