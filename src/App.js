import React from 'react';
import logo from './logo.svg';
import './App.css';
import Listing from "./Listing";
import CreateItem from "./CreateItem";

class App extends React.Component {
  createdToDoItem(item) {
    console.log('create from app: ' + item);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <main>
          <div className="col-listing">
            <Listing />
          </div>
          <div className="col-create">
            <CreateItem createdItem={this.createdToDoItem} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
