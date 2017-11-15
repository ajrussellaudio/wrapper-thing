import React from 'react';
import SuggestedPropect from './SuggestedProspect';

export default class SuggestedProspectsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prospects: [
        {name: "Prospect 1"},
        {name: "Prospect 2"},
        {name: "Prospect 3"},
      ]
    };
  }
  render() {
    const wrappers = this.state.prospects.map((prospect, i) => {
      return <SuggestedPropect {...prospect} key={i} />
    })

    return (
      <div id="prospects">
        <h3>Suggested Prospects</h3>
        {wrappers}
      </div>
    );
  }
}
