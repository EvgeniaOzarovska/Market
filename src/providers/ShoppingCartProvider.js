import React from 'react';

export const ShoppingCartContext = React.createContext('');

export class ShoppingCartProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      addItem: this.addItem,
      changeQuantityItem: this.changeQuantityItem,
      deleteItem: this.deleteItem,
    };
  }

  componentDidMount() {
    const initialData = JSON.parse(localStorage.getItem('cart'));
    if (initialData === null) {
      this.setState(() => ({ data: [] }));
    } else {
      this.setState(() => ({ data: initialData }));
    }
  }

  componentDidUpdate() {
    localStorage.setItem('cart', JSON.stringify(this.state.data));
  }

  addItem = item => {
    const cartItemIndex = this.state.data.findIndex(cartItem => cartItem.id === item.id);
    if (cartItemIndex >= 0) {
      const data = this.state.data;
      data[cartItemIndex].count = data[cartItemIndex].count + 1;
      this.setState(() => ({ data }));
    } else {
      this.setState(prevState => ({ data: [...prevState.data, item] }));
    }
  };

  changeQuantityItem = (id, presets) => {
    const cartItemIndex = this.state.data.findIndex(cartItem => cartItem.id === id);
    const data = this.state.data;
    if (presets === 'plus') {
      data[cartItemIndex].count = data[cartItemIndex].count + 1;
    } else {
      if (data[cartItemIndex].count > 1) {
        data[cartItemIndex].count = data[cartItemIndex].count - 1;
      }
    }
    this.setState(() => ({ data }));
  };

  deleteItem = id => {
    const updatedCart = this.state.data.filter(cartItem => cartItem.id !== id);
    this.setState(() => ({ data: updatedCart }));
  };

  render() {
    return (
      <ShoppingCartContext.Provider value={this.state}>
        {this.props.children}
      </ShoppingCartContext.Provider>
    );
  }
}
