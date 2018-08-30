import React, { Component, Fragment } from 'react';

import EntryForm from './EntryForm';
import Video from '../Video';

export class Entry extends Component {
  render() {
    return (
      <Fragment>
        <EntryForm />
        <Video />      
      </Fragment>
    )
  }
}

export default Entry;
