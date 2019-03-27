import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from '../screens/LoginForm';
import Library from '../screens/Library';
import Employees from '../screens/Employees';
import AddEmployee from '../screens/AddEmployee';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key={'root'} hideNavBar>
        <Scene key={'auth'} initial>
          <Scene key="login" component={LoginForm} title="Login" />
        </Scene>
        <Scene key={'main'}>
          <Scene
            initial
            key="employees"
            component={Employees}
            title="Employees"
            rightTitle={'Add'}
            onRight={() => Actions.addEmployee()}
          />
          <Scene
            key="addEmployee"
            component={AddEmployee}
            title="Add Employee"
          />
          <Scene key="library" component={Library} title="Library" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;