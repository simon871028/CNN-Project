import React from 'react';
import { Route } from 'react-router-dom';
import VideoList from './VideoListView';
import VideoDetail from './VideoDetailView';

const BaseRouter=()=>(
<div>
    <Route exact path ='/' component={VideoList}/>
    <Route exact path ='/:videoID' component={VideoDetail}/>
</div>
);


export default BaseRouter;

