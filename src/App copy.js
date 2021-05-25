import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
