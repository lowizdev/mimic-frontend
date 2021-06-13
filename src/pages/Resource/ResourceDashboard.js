import React from 'react';

import ResourceListTable from '../../components/Resource/ResourceListTable.js';

import api from "../../services/api.js";

class ResourceDashboard extends React.Component{

    state = {
        resources: null,
        isLoading: true,
        error: '',
    }

    componentDidMount(){

        //const resources = this.fetchResources();
        this.fetchResources();

    }

    fetchResources = async () => {
        
        //e.preventDefault();

        try{
            //TODO: GET PAGED INSTEAD.
            const resources = await api.get("/resources/");
            //console.log(resources.data);
            //return resources.data;
            this.setState({resources: resources.data, isLoading: false});

        }catch(err){
            console.log(err);
        }
        
        

    }

    render(){

        const {resources, isLoading} = this.state;

        return(
        
            <div>
                <h1>Recursos</h1>
                {isLoading ? <h3>Loading...</h3> : <ResourceListTable  resources = {resources}/>}
                
            </div>
        
        );

    }

}

export default ResourceDashboard;