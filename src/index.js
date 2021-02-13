import React from 'react';
import ReactDOM from 'react-dom';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './scss/styles.scss';
import Redirect from './components/Redirect';
import App from './App';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
          <Route path='/face' render={(props) => <Redirect {...props} loc="https://www.facebook.com/faisal.hameed1" />} />
          <Route path='/insta' render={(props) => <Redirect {...props} loc="https://www.instagram.com/faisalhameed82/?hl=en" />} />
          <Route path='/linked'render={(props) => <Redirect {...props} loc="https://www.linkedin.com/in/faisal-hameed-6330897b/" />} />
          <Route path='/Holidaze'render={(props) => <Redirect {...props} loc="https://holidaze1.netlify.app/" />} />
          <Route path='/Nasa'render={(props) => <Redirect {...props} loc="https://mfhameed.net/humans-in-space/Nasa-project%20/index.html" />} />
          <Route path='/Bessegen'render={(props) => <Redirect {...props} loc="https://mfhameed.net/Besseggen%20VV%20new/Home-Besseggen.html" />} />
          <Route path='/Homefair'render={(props) => <Redirect {...props} loc="https://mfhameed.net/CA-Home_Fair/CA-home_fair/index.html" />} />
          <Route path='/UnStudent' render={(props) => <Redirect {...props} loc="https://mfhameed.net/Unwebsite/unhome.html" />} />
          <Route path='/System'render={(props) => <Redirect {...props} loc="https://mfhameed.net/home-fair/Homefair-MA-3/index.html#second_link" />} />  
      </Switch>
    </App>
  </Router>,
  document.getElementById('root')
);

