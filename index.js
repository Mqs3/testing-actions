const app = require('./server')

const port = 8080;
app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
  });
  