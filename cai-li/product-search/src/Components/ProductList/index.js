import React, { Component } from "react";
import Product from "../Product";
import products from "./products";


let listHightoLow = products.concat([]);
listHightoLow.sort(
  (a,b) => (a.price < b.price) ? 1 : ((a.price > b.price) ? -1 : 0)
);
let listLowtoHigh = products.concat([]);
listLowtoHigh.sort(
  (a,b) => (a.price > b.price) ? 1 : ((a.price < b.price) ? -1 : 0)
);
class ProductList extends Component {
  state = { productlist: products, userSearch: '' };
  filterBy = (cate1, cate2) => {
    this.setState({
      productlist: products.filter(
        (product) => product.category === cate1 || product.category === cate2
      ),
    });
  };
  allProducts = () => {
    this.setState({ productlist: products });
  };
  inputChange = (e) => {
    this.setState({userSearch: e.target.value})
  }
  getInput = (e) => {
    this.setState({
      productlist: products.filter(
        (product) =>
          product.name
            .toLowerCase()
            .search(this.state.userSearch.toLowerCase()) !== -1 ||
          product.description
            .toLowerCase()
            .search(this.state.userSearch.toLowerCase()) !== -1
      ), userSearch: ''
    });
  };
  change = (e) => {
    if (e.target.value === 'default') {
      this.setState({productlist: products})
    } else if (e.target.value === 'hightolow') {
      this.setState({productlist: listHightoLow});
    } else if (e.target.value === 'lowtohigh') {
      this.setState({productlist: listLowtoHigh});
    }
  }

  render() {
    return (
      <>
        <div className="filter">
          <button onClick={() => this.filterBy("shirts")}>Shirts</button>
          <button onClick={() => this.filterBy("pants", "skirts")}>
            Pants and skirts
          </button>
          <button onClick={() => this.filterBy("jackets")}>Jackets</button>
          <button onClick={this.allProducts}>All Products</button>
          <div className="search">
            <input onChange={this.inputChange} value={this.state.userSearch}></input>
            <button onClick={this.getInput}>Submit</button>
          </div>
          <select onChange={this.change}>
            <option value='default'>Sorts: Default</option>
            <option value='hightolow'>Price: High to Low</option>
            <option value='lowtohigh'>Price: Low to High</option>
          </select>
        </div>
        <div className="product-list">
          {this.state.productlist.map((product) => (
            <Product
              key={product.name}
              name={product.name}
              category={product.category}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </>
    );
  }
}

export default ProductList;
