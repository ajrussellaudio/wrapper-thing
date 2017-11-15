import React from 'react';
import Prospect from '../components/Prospect';

export default class SuggestedPropect extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    // delete prospect from board
  }

  render() {
    return (
      <div className="prospect-wrapper">
        <button onClick={this.handleDelete}>Delete</button>
        <Prospect {...this.props} />
      </div>
    );
  }
}
