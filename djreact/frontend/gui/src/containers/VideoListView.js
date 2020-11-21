import React from 'react';
import Videos from '../components/Video';
import axios from 'axios';
import CustomForm from '../components/Form';

class VideoList extends React.Component{
    state = {
        videos:[]
    }
    
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/')
            .then(res=>{
                this.setState({
                    videos:res.data
                });
            }
            )
    }
    
    
    render(){
        return(
            <div>
            <h2>Upload a Video :</h2>
            <CustomForm />
            <br />
            <Videos data={this.state.videos} />
            </div>
        );
    }
}
export default VideoList;