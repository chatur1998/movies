import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Main from './components/Main';


const RouterComponent = () => (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="main" component={Main} title="IMDB" initial />
      </Scene>
    </Router>
  );
  
export default RouterComponent;
