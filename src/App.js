import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import EventPage from './component/EventPage/EventPage';
import About from './component/About/About';
import BestDeals from './component/BestDeals/BestDeals';
import ProductDetails from './component/Product/ProductDetails/ProductDetails';
import ProductReview from './component/Product/ProductReview/ProductReview';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/events">
          <EventPage />
        </Route>
        <Route path="/aboutUs">
          <About />
        </Route>
        <Route path="/bestDeals">
          <BestDeals />
        </Route>
        <Route path="/product-details/:productId/:contentId/:type">
          <ProductReview />
        </Route>
        <Route path="/:productKey">
          <ProductDetails />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
