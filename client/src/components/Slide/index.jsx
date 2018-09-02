import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import ClientForm from "../Table/ClientForm";
import EmployerForm from "../Table/EmployerForm";
// import Office from '../Table/clients';
// import Operation from '../Table/clients';
// import Service from '../Table/services';
// import Supplier from '../Table/clients';

export class Slide extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      entity: {...this.props.data},
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      entity: nextProps.data,
    });
  }

  handleInputChange = (event) => {
    
    const nameInput = event.target.name;
    const value = event.target.value;
    console.log(nameInput, value);
    this.setState({
      entity: {
        ...this.state.entity,
        [nameInput]: value,
      }
    })
  }

  render() {
    const { num, currSlide } = this.props;
    return (
      <li
        className={`slider__slide slider__slide_${num}`}
        data-currslide={currSlide}
      >
        <div className="slider__layout layout">
          <div className="slider__info">
            <Switch>
              <Route
                path="/clients"
                render={
                  props => (
                    <ClientForm 
                      {...props} 
                      entity={this.state.entity}
                      onChange={this.handleInputChange}
                    />
                  )
                }
              />
              <Route
                path="/employees"
                render={
                  props => (
                    <EmployerForm
                      {...props}
                      entity={this.state.entity}
                      onChange={this.handleInputChange}
                    />
                  )
                }
              />
              {/* <Route path="/services" component={Service} /> */}
            </Switch>
          </div>
        </div>
      </li>
    );
  }
}

export default Slide;
