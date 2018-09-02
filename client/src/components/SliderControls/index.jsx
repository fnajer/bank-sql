import React, { Component } from 'react';

export class SliderControls extends Component {
  render() {
    return (
      <div className="layout slider__layout-controls">
        <div className="slider__controls">
          <span className="slider__arrow icon-slider-arrow-left" id="prev_slide" />
          <span onClick={this.props.nextSlide} className="slider__arrow icon-slider-arrow-right" id="next_slide" />
        </div>
      </div>
    )
  }
}

export default SliderControls;
