import React, { useEffect, useState } from 'react';

const SalesforceAuth = () => {
  const [authorizationCode, setAuthorizationCode] = useState('');

  useEffect(() => {
    // Function to parse URL parameters
    const getUrlParameter = (param) => {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    };

    // Get authorization code from URL parameter
    const code = getUrlParameter('code');
    if (code) {
      setAuthorizationCode(code);
    }
  }, []);

  const handleSalesforceAuth = () => {
    const salesforceAuthUrl = `https://cheems6-dev-ed.develop.my.salesforce.com/services/oauth2/authorize?client_id=3MVG95mg0lk4batjVwHpPkahCROA1JXckG2MoWXqDTqMcv2sI4NjLmzIJq33BJka_FCR0TwINW3LN.Yuclvxa&redirect_uri=http://localhost:3000&response_type=code`;

    // Redirect to Salesforce authentication URL
    window.location.href = salesforceAuthUrl;
  };

  return (
    <div>
      <h1>Salesforceee Authentication</h1>
      {authorizationCode ? (
        <p>Authorization Code: {authorizationCode}</p>
      ) : (
        <button onClick={handleSalesforceAuth}>Authenticateeee with Salesforce</button>
      )}
    </div>
  );
};

export default SalesforceAuth;
