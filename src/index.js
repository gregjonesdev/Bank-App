import registerServiceWorker from './registerServiceWorker';

//import react
import React from 'react';
import ReactDOM from 'react-dom';

//import styles
import './styles/index.css';

//import React Router
import {BrowserRouter, Route, Switch} from 'react-router-dom';


//import all components
import App from './components/App'
import BaseLayout from './components/BaseLayout'
import UserList from './components/UserList'
import UserDetail from './components/UserDetail'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/user_list" component={UserList} />
        <Route path="/user_detail" component={UserDetail} />
        <Route path="/" component={App}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,document.getElementById('root'));
registerServiceWorker();
