import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./hocs/Layout";
import Home from "./containers/Home";
import Contact from "./containers/Contact";
import About from "./containers/About";
import Listings from "./containers/Listings";
import ListingDetail from "./containers/ListingDetail";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import NotFound from "./components/NotFound";
import { Provider } from "react-redux";
import store from "./store";

import "./sass/main.scss";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/listings" component={Listings} />
          <Route exact path="/listing/:id" component={ListingDetail} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={SignIn} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
