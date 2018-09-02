import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import ClientForm from "../Table/ClientForm";
import EmployerForm from "../Table/EmployerForm";
// import Office from '../Table/clients';
// import Operation from '../Table/clients';
// import Service from '../Table/services';
// import Supplier from '../Table/clients';

export class Slide extends Component {

  render() {
    const { num, currSlide, onChange } = this.props;
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
                      entity={this.props.entity}
                      onChange={onChange}
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
                      entity={this.props.entity}
                      onChange={onChange}
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
