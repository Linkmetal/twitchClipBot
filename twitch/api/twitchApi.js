const axios = require('axios');
const opts = {
  clientId: process.env.TWITCH_API_CLIENT,
  clientSecret: process.env.TWITCH_API_SECRET,
  broadcasterId: process.env.TWITCH_BROADCASTER_ID
};

function twitchApiPost(endpoint) {
  axios.post(`https://api.twitch.tv/helix/clips?broadcaster_id=${opts.broadcasterId}`, {
    headers: {
      'Authorization': `Bearer ${opts.TWITCH_API_SECRET}`,
      'Client-Id': opts.TWITCH_API_CLIENT
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};