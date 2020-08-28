import React, { Component } from 'react';
import data from './data.json';


class App extends Component {

  constructor(){
    super();
    this.state = {
      products: data.products,
      size: "",
      sort:""
    }
  }

  render(){
    return (
      <div className="grid-container">
        <header><a href="#">CapAwes</a></header>
        <main>
          <div className="content">
            <div className="main">products</div>          
            <div className="sidebar">
              Cart
            </div>
          </div>
        </main>
        <footer>All rights reserved</footer>
      </div>
    );
  }

}

export default App;
