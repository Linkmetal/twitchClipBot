var Twitter = require('twitter');

const config = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
}

var T = new Twitter(config);

T.post('statuses/update', status, function (error, tweet, response) {
  if (!error) {
    console.log(tweet);
  }
});