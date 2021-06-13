import React from 'react';


class ResourceListTable extends React.Component{

    render(){

        const resources = this.props.resources;

        return(
            <table>
                <tbody>
                    { resources.map((resource) => {
                        return(
                            <tr key={ resource.id }>
                                <th>HEADER</th>
                                <td> { resource.name} </td>
                            </tr>
                        );
                    }) }
                </tbody>

            </table>
        );
    }

}

export default ResourceListTable;