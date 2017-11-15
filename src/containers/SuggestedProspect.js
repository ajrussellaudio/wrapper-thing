import React from 'react';
import Prospect from '../components/Prospect';

export default class SuggestedPropect extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    // save prospect to board
  }

  handleRemove() {
    // remove prospect from list
  }

  render() {
    return (
      <div className="suggested-prospect">
        <button onClick={this.handleSave}>Save</button>
        <button onClick={this.handleRemove}>Remove</button>
        <Prospect {...this.props} />
      </div>
    );
  }
}
