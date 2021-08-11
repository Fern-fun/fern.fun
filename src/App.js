import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import TODO from "./page/TODO/TODO";

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/todo" exact component={TODO} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
