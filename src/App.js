import HomePage from './home/HomePage.js';
import AboutPage from './about/AboutPage.js';
import PillarsPage from './pillars-temp/PillarsPage.js';
import ContactUsPage from './contact/ContactUsPage.js';
import Footer from './common/Footer.js';
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import './index.css';

function App() {
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <Router>
        <header className="mdl-layout__header mdl-layout__header--waterfall header">
          <div className="mdl-layout__header-row logo-row">
              <span className="mdl-layout__title">
                  <div className="logo"></div>
              </span>
          </div>
          <div className="mdl-layout__header-row navigation-row mdl-layout--large-screen-only">
              <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
                <NavLink exact to="/" className="mdl-navigation__link" activeClassName="is-active">Home</NavLink>
                <NavLink exact to="/about" className="mdl-navigation__link" activeClassName="is-active">About</NavLink>
                <NavLink exact to="/pillars" className="mdl-navigation__link" activeClassName="is-active">Pillars</NavLink>
                <NavLink exact to="/contact" className="mdl-navigation__link" activeClassName="is-active">Contact Us</NavLink>
              </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer mdl-layout--small-screen-only">
            <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
              <NavLink exact to="/" className="mdl-navigation__link" activeClassName="is-active">Home</NavLink>
              <NavLink exact to="/about" className="mdl-navigation__link" activeClassName="is-active">About</NavLink>
              <NavLink exact to="/pillars" className="mdl-navigation__link" activeClassName="is-active">Pillars</NavLink>
              <NavLink exact to="/contact" className="mdl-navigation__link" activeClassName="is-active">Contact Us</NavLink>
            </nav>
        </div>
        <main className="mdl-layout__content">
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/pillars">
              <PillarsPage />
            </Route>
            <Route path="/contact">
              <ContactUsPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
          <Footer />
        </main>
      </Router>
    </div>
  );

}

export default App;
