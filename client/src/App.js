import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import { Button } from '@fluentui/react-northstar'

function App() {

  function redirect(event, path) {
    window.location.href = path;
  }
  
  return (
    <div >
      <header >
        <img src={logo} className="App-logo" alt="logo" />

        <Button content="About" primary onClick={(e) => {redirect(e,"/about");}} />
        
      </header>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user/Toto">User</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/user/:id">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}


function Home() {
  return <h2>Home React</h2>;
}

function About() {
  return <h2>About React</h2>;
}

function User() {
  let { id } = useParams();
  return <h2>User {id} </h2>;
}

/*
function redirect(path) {
  window.location.href = path;
}
*/

export default App;
