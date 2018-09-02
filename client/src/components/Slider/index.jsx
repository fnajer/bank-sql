import React, { Component } from 'react'

import './slider.css';
import Slide from '../Slide';
import SliderControls from '../SliderControls';

export class Slider extends Component {
  transferArrToObj = (arr) => {
    let obj = {...tableKeys[this.props.table]};
    let i = 0;
    for (i = 0; i < arr.length; i++) {
      obj[obj[i]] = arr[i];
    }
    //console.log(this.props.table);
    return obj;
  }

  render() {
    return (
      <div className="slider">
        <ul className="slider__wrapper" data-current={0}>
          <Slide data={this.transferArrToObj(this.props.data[0])} num="1" currSlide="0" />
          <Slide data={this.transferArrToObj(this.props.data[0])} num="2" currSlide="1" />
          <Slide data={this.transferArrToObj(this.props.data[0])} num="3" currSlide="2" />
        </ul>
        <SliderControls />
      </div>
    )
  }
}

const tableKeys = {
  clients: {
    0: 'id',
    1: 'name',
    2: 'passport',
    3: 'date',
    4: 'telephone',
    5: 'address',
  },
  employees: {
    0: 'id',
    1: 'name',
    2: 'passport',
    3: 'telephone',
    4: 'dateBirth',
    5: 'dateEntry',
    6: 'idPost',
    7: 'idDepart',
  }
};

export default Slider;
