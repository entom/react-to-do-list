import React from "react";

class Listing extends React.Component {
  items = ['item 1', 'item 2', 'item 3'];

  render() {
    return(
      <div>
        {this.items.map((item) => <div key={`item_${item}`}>{item}</div>)}
      </div>
    )
  }
}

export default Listing;
