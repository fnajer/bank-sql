import React, { Component } from 'react'

import './slider.css';
import Slide from '../Slide';
import SliderControls from '../SliderControls';

export class Slider extends Component {
  render() {
    return (
      <div className="slider">
        <ul className="slider__wrapper" data-current={0}>
          <Slide data={this.props.data.body} num="1" currSlide="0" />
          <Slide data={this.props.data.body} num="2" currSlide="1" />
          <Slide data={this.props.data.body} num="3" currSlide="2" />
        </ul>
        <SliderControls />
      </div>
    )
  }
}

export default Slider;
