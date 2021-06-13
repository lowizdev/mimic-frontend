import React from 'react';

import {decodeOnce} from '../../services/qrcodereader.js';

class ScanResourcePage extends React.Component {

    constructor(props){
        super(props);

        this.videoArea = React.createRef();
    }

    componentDidMount(){
        decodeOnce(this.videoArea);
    }

    render(){
        return(
            <div>
                <div>
                    <video id="video" width="300" height="200" ref={this.videoArea} style={{border: '2px solid red'}}></video>
                </div>
            </div>
        );
    }

}

export default ScanResourcePage;