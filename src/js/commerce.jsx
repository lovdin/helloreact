import React from "react";
import ReactDom from "react-dom";

const PRODUCTS = [
  {category: 'Sporting', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronic', price: '$299.99', stocked: true, name: 'iPad Mini 2'},
  {category: 'Electronic', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronic', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class ProductCategoryRow extends React.Component {
  render() {
    return <tr><th colSpan="2">{this.props.category}</th></tr>;
  }
}

class ProductRow extends React.Component {
  render() {
    const name = this.props.product.stocked
      ? this.props.product.name
      : <span style={{color: 'red'}}>{this.props.product.name}</span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    let rows = [];
    let lastCategory = null;
    this.props.products.forEach(product => {
      if (product.name.indexOf(this.props.filterText) === -1 ||
        (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterInput = this.handleFilterInput.bind(this);
    this.handleStockInput = this.handleStockInput.bind(this);
  }

  handleFilterInput(e) {
    this.props.onFilterInput(e.target.value);
  }

  handleStockInput(e) {
    this.props.onStockInput(e.target.checked);
  }

  render() {
    return (
      <form>
        <input type="text"
               placeholder="Search..."
               value={this.props.filterText}
               onChange={this.handleFilterInput}
        />
        <p>
          <input type="checkbox"
                 checked={this.props.inStockOnly}
                 onChange={this.handleStockInput}
          />
          &nbsp;Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };

    this.handleFilterInput = this.handleFilterInput.bind(this);
    this.handleStockInput = this.handleStockInput.bind(this);
  }

  handleFilterInput(filterText) {
    this.setState({filterText});
  }

  handleStockInput(inStockOnly) {
    this.setState({inStockOnly});
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText}
                   inStockOnly={this.state.inStockOnly}
                   onFilterInput={this.handleFilterInput}
                   onStockInput={this.handleStockInput}
        />
        <ProductTable products={this.props.products}
                      filterText={this.state.filterText}
                      inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

ReactDom.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('root')
);
