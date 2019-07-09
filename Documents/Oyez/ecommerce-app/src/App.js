import React, { Component } from 'react';
import Products from './components/Products';
import Filter from './components/Filter';
import Basket from './components/Basket';
import store from './store';
import { Provider } from 'react-redux'
import './App.css';

class App extends Component {
  componentWillMount() {
    if (localStorage.getItem('cartItems')) {
      this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems')) });
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1>E-commerce Shopping Cart Application</h1>
          <hr />
          <div className="row">
            <div className="col-md-9">
              <Filter handleSortChange={this.handleSortChange}
                handleSizeChange={this.handleSizeChange} />
              <hr />
              <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
            </div>
            <div className="col-md-3">
              <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
