import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeContainer from "./containers/HomeContainer";
import ProductsContainer from "./containers/ProductsContainer";
import ProductDetailsContainer from "./containers/ProductDetailsContainer";
import CartContainer from "./containers/CartContainer";
import HeaderMenu from "./components/Menu/HeaderMenu";
import FooterMenu from "./components/Menu/FooterMenu";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
        <HeaderMenu />
        <div className="global-container">
          <Switch >
            {/* *rubic34* */}
            {/* Shopping page is accessible at http://localhost:3000/shopping */}
            <Route exact path="/shopping" component={ProductsContainer} />
            {/* *rubic46* */}
            {/* Product page is accessible at http://localhost:3000/shopping/name=productname */}
            <Route exact path="/shopping/:name" component={ProductDetailsContainer} />
             {/* *rubic56* */}
            {/* Cart page is accessible at http://localhost:3000/cart */}
            <Route exact path="/cart" component={CartContainer} />
            {/* *rubic64* */}
            {/* About page is accessible at http://localhost:3000/about */}
            <Route exact path="/about" component={About} />
             {/* *rubic62* */}
            {/* Contact page is accessible at http://localhost:3000/Contact */}
            <Route exact path="/contact" component={Contact} />
            {/* *rubic13* */}
            {/* Home page is accessible at http://localhost:3000/# */}
            <Route exact path="/" component={HomeContainer} />
          </Switch>
        </div>
        <FooterMenu/>
    </BrowserRouter>
  </Provider>
);

export default App;