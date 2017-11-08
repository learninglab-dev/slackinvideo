// this code from the slack verification tool in modules/.bin

// until we write this, execute this command line command: ./node_modules/.bin/slack-verify --token process.env.SLACK_VERIFICATION_TOKEN --path=/slack/events --port=3000

var slackEvents = (0, _index.createSlackEventAdapter)(argv.token);

/* eslint-disable no-console */
slackEvents.createServer(argv.path).then(function (server) {
  return new Promise(function (resolve, reject) {
    server.on('error', reject);
    server.listen(argv.port, function () {
      var _server$address = server.address(),
          address = _server$address.address,
          port = _server$address.port;

      console.log('The verification server is now listening at the URL: http://' + address + ':' + port + argv.path);
      resolve();
    });
  });
}).catch(function (error) {
  console.error('The verification server failed to start. error: ' + error.message);
});
