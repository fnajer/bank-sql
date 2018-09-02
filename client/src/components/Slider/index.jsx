import React, { Component } from 'react'

import './slider.css';
import Slide from '../Slide';
import SliderControls from '../SliderControls';

export class Slider extends Component {

  constructor(props) {
    super(props);

    this.state = {
      entity: this.transferArrToObj(props.data[0]),
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      entity: this.transferArrToObj(nextProps.data[0], nextProps),
    });
  }

  handleInputChange = (event) => {
    
    const nameInput = event.target.name;
    const value = event.target.value;
    
    this.setState({
      entity: {
        ...this.state.entity,
        [nameInput]: value,
      }
    })
  }

  transferArrToObj = (arr, nextProps = this.props) => {
    let obj = {...tableKeys[nextProps.table]};
    let i = 0;
    for (i = 0; i < arr.length; i++) {
      obj[obj[i]] = arr[i];
    }

    return obj;
  }

  nextSlide = () => {
    let nextSlide = null;
    this.props.data.some((entity, index) => {
      console.log(entity[0], this.state.entity.id)
      if (entity[0] === this.state.entity.id) {
        nextSlide = index + 1;
        return true;
      }
      return false;
    });
    
    if (this.props.data[nextSlide]) {
      this.setState({
        entity: this.transferArrToObj(this.props.data[nextSlide]),
      });
    } else {
      this.setState({
        entity: this.transferArrToObj(this.props.data[0]),
      });
    }
    
  }

  render() {
    return (
      <div className="slider">
        <ul className="slider__wrapper" data-current={0}>
          <Slide entity={this.state.entity} onChange={this.handleInputChange} num="1" currSlide="0" />
          <Slide entity={this.state.entity} onChange={this.handleInputChange} num="2" currSlide="1" />
          <Slide entity={this.state.entity} onChange={this.handleInputChange} num="3" currSlide="2" />
        </ul>
        <SliderControls nextSlide={this.nextSlide} />
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
