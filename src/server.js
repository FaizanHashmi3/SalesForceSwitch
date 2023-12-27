// const express = require('express');
// const axios = require('axios');
// const app = express();
const express = require('express');
const cors = require('cors'); // Import the cors module
const axios = require('axios');
const app = express();
app.use(cors());

const clientId = '3MVG95mg0lk4batjVwHpPkahCROA1JXckG2MoWXqDTqMcv2sI4NjLmzIJq33BJka_FCR0TwINW3LN.Yuclvxa';
const clientSecret = '4296A62A96D50C0A3B928A183176446BF37CE71B889293DE61607C9BD34E2AE0';
const redirectUri = 'http://localhost:3000'; // Update with your frontend URL

app.get('/oauth2/callback', async (req, res) => {
  const { code } = req.query;

  const tokenUrl = 'https://cheems6-dev-ed.develop.my.salesforce.com/services/oauth2/token'; // Replace with your Salesforce instance URL

  const requestBody = {
    grant_type: 'authorization_code',
    code: code,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
  };

  try {
    const response = await axios.post(tokenUrl, new URLSearchParams(requestBody).toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const accessToken = response.data.access_token;
    console.log("accsstkn> "+accessToken);
   
    // Here you can send the accessToken to your frontend or perform other actions

    res.send({ accessToken });
  } catch (error) {
    console.error('Error fetching access token: backend', error);
    res.status(500).send('Error fetching access token');
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
