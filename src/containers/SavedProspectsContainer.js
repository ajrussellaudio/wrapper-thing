import React from 'react';
import SavedPropect from './SavedProspect';

export default class SavedProspectsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prospects: [
        {name: "Prospect 4"},
        {name: "Prospect 5"},
        {name: "Prospect 6"},
      ]
    };
  }
  render() {
    const wrappers = this.state.prospects.map((prospect, i) => {
      return <SavedPropect {...prospect} key={i} />
    })

    return (
      <div className="prospects-container">
        <h3>Saved Prospects</h3>
        {wrappers}
      </div>
    );
  }
}
