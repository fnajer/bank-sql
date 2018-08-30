import React, { Component, Fragment } from 'react';

import './video.css';
import videoMp4 from './bg-video.mp4';

export class Video extends Component {
  render() {
    return (
      <Fragment>
        <video autoPlay loop muted className="bgvideo" width="1366" height="768">
          <source src={videoMp4} type="video/mp4"></source>
        </video>
        <div className="blackout"></div>
      </Fragment>
    )
  }
}

export default Video;
