import React from 'react';
import './App.css';
import Login from './login';
// import SalesforceAuth from './salesforceAuth';
import SalesforceAuth from './authCode';
import SalesforceLogin from './SalesforceLogin';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <SalesforceAuth/> */}
      {/* <SalesforceLogin/> */}
      {/* <Login/> */}
      <SalesforceAuth/>
    </div>
  );
}

export default App;


/*`https://cheems6-dev-ed.develop.my.salesforce.com/services/oauth2/authorize?client_id=3MVG95mg0lk4batjVwHpPkahCROA1JXckG2MoWXqDTqMcv2sI4NjLmzIJq33BJka_FCR0TwINW3LN.Yuclvxa&redirect_uri=http://localhost:3000&response_type=code`;*/
