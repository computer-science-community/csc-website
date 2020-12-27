import Header from './common/Header.js';
import HomePage from './home/HomePage.js';
import AboutPage from './about/AboutPage.js';
import PillarsPage from './pillars-temp/PillarsPage.js';
import Footer from './common/Footer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header/>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/pillars">
              <PillarsPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );

}

export default App;
