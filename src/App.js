import React, { Component } from 'react';
import data from './data.json';
import Products from './components/Products';
import Filter from './components/filter';


class App extends Component {

  constructor(){
    super();
    this.state = {
      products: data.products,
      size: "",
      sort:""
    }
  }
  sortProducts = (event) => { 
    const sort = event.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a,b) => (
        sort==="Lowest"?
        ((a.price > b.price)? 1: -1):
        sort === "Highest"?
        ((a.price < b.price)? 1: -1):
        ((a._id < b._id)? 1: -1)
      ))
    }))
  }
  filterProducts = (event) => {
    if(event.target.value ===""){
      this.setState({size: event.target.value, product: data.products});
    }
    else{
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  }

  render(){
    return (
      <div className="grid-container">
        <header><a href="#">CapAwes</a></header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count= {this.state.products.length}
                  size={this.state.size}
                  sort ={this.state.sort}
                  filterProducts = {this.filterProducts}
                  sortProducts ={this.sortProducts}
              ></Filter>
              <Products products={this.state.products}></Products>
              </div>          
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
