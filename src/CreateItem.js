import React from "react";

class CreateItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log(props, context)

    this.state = {
      createItem: props.createdItem
    };
  }

  addItem() {
    console.log('add-item');
    this.state.createItem(`item-${(new Date()).getTime()}`);
  }

  render() {
    return(
      <div>
        <button onClick={() => this.addItem()}>Add</button>
      </div>
    )
  }
}

export default CreateItem;
