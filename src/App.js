import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      fetchAccessToken(code);
    }
  }, []);

  const fetchAccessToken = async (code) => {
    try {
      console.log("authCode>> "+code);
      const response = await axios.get(`http://localhost:5000/oauth2/callback?code=${code}`);
      const { access_token } = response.data;
      
      setAccessToken(access_token);
      console.log("acessTknfrnt>> "+access_token);
      // console.log("resdata>> "+response.data);
    } catch (error) {
      console.error('Error fetching access token: Frontend', error);
    }
  };

  const handleSalesforceAuth = () => {
    const clientId = '3MVG95mg0lk4batjVwHpPkahCROA1JXckG2MoWXqDTqMcv2sI4NjLmzIJq33BJka_FCR0TwINW3LN.Yuclvxa';
    const redirectUri = 'http://localhost:3000'; // Update with your backend URL

    const salesforceAuthUrl = `https://cheems6-dev-ed.develop.my.salesforce.com/services/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;

    window.location.href = salesforceAuthUrl;
  };

  return (
    <div>
      <p>Access Token: {accessToken}</p>
      <h1>Salesforce Authentication</h1>
      {accessToken ? (
        <p>Access Token: {accessToken}</p>
      ) : (
        <button onClick={handleSalesforceAuth}>Authenticate with Salesforce</button>
      )}
    </div>
  );
};

export default App;
