import registerServiceWorker from './registerServiceWorker';
import index from './reducers'

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
import UserList from './containers/UserList'
import UserDetail from './containers/UserDetail'
import AccountDetail from './containers/AccountDetail'

//redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const store = createStore(
  index,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route path="/users" component={UserList} />
          <Route path="/user_detail/:id/:accountid" component={AccountDetail} />
          <Route path="/user_detail/:id" component={UserDetail} />
          <Route path="/" component={App}/>
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root'));
registerServiceWorker();
