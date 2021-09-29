import './App.scss';
import HomePage from './Pages/HomePage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import PortfliosPage from './Pages/PortfoliosPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import { useState } from 'react';
import NavBar from './Components/NavBar';
import MotionGraph from './Pages/MotionGraph';
const  App = () =>{
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }
  return (

        <>
        <div className="App">
        <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
                   <NavBar />
                   </div>
                   <div className="nav-btn" onClick={navClick}>
                   <div className="lines-1"></div>
                   <div className="lines-2"></div>
                   <div className="lines-3"></div>
                   </div>
                   <div className="main-content">
                 <div className="content"> 
        <Router>
        <Switch>
        <Route  path="/" exact component={HomePage}  exact/>
          <Route path="/about" component={AboutPage}  />
          <Route  path="/portfolios" component={PortfliosPage}  />
          <Route  path="/blogs"  component={BlogsPage}  />
          <Route   path="/contact" component={ContactPage}  />
          <Route   path="/motionG" component={MotionGraph}  />
        </Switch>

        </Router>
        </div>
        </div>
 
</div>

</>

  );
}

export default App;

