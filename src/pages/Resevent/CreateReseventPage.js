import React from 'react';

import api from '../../services/api.js';

class CreateReseventPage extends React.Component{

    state = {
        description: '',
        resourceId: null,
        error: '',
    }

    handleCreateResevent = async (e) => {

        e.preventDefault();

        try{

            const response = await api.post('/resevents/');
            //TODO: HANDLE ERROR CASE

        }catch(err){
            console.log(err);
        }

    }

    render(){

        return(
            <div>
                <form onSubmit={this.handleCreateResevent}>
                    <textarea name="description" value={this.state.description}
                        onChange={(e) => { this.setState(e.target.value); }}/>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        );

    }


}

export default CreateReseventPage;