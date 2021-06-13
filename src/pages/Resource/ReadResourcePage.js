import React from 'react';
import QRCode from 'qrcode.react'

import api from '../../services/api.js';

class ReadResourcePage extends React.Component{

    state = {
        resource: '',
        isLoading: true,
        error: '',
    }

    componentDidMount(){

        const { params } = this.props.match;

        this.fetchResource(params.id);//.then((resource) => { });

    }

    fetchResource = async (resourceId) => {

        try {
            
            const response = await api.get('/resources/' + resourceId);

            //console.log(response);

            this.setState({
                resource: response.data,
                isLoading: false,
            });

        } catch (err) {
            console.log(err);
        }

    }

    render(){
        const {isLoading, resource} = this.state;
        //console.log(resource);
        //TODO: FINISH DESIGN 
        //TODO: DECIDE UPON LEAVING ONLY THE ID OR ENCODE THE WHOLE URL
        return(
            <div>
                {isLoading ? <h1>Loading...</h1> : 
                    <div>
                        <h1> {resource.name} </h1> 
                        <QRCode value={resource.id}/>
                    </div>
                }
            </div>
        );
    }

}

export default ReadResourcePage;