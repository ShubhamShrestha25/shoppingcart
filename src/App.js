import React from "react";
import Products from "./components/Products";
import data from "./data.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">My Shopping App</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">Cart Item</div>
          </div>
        </main>
        <footer>All right is resolved.</footer>
      </div>
    );
  }
}

export default App;
