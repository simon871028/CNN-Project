import React from 'react';
import axios from 'axios';
import { Card } from 'antd';

class VideoDetail extends React.Component {
    state = {
        video: {}
    }

    componentDidMount() {
        const videoID = this.props.match.params.videoID;
        axios.get(`http://127.0.0.1:8000/api/${videoID}`
        ).then(res => {
            this.setState({
                video: res.data
            });
        }
        )
    }


    render() {
        return (
            <Card title={this.state.video.title}>
                <p>{this.state.video.content}</p>
                <p>{this.state.video.res}</p>
            </Card>

        );
    }
}
export default VideoDetail;