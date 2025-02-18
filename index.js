// it's recommended to load configuration for .env as early as possible
require('dotenv').config(); // add this line as the first thing to run1

const server = require('./server.js')

// we'll read the port from the server environment if it is there
// heroku will have the PORT environment variable set
const port = process.env.PORT || 4000;

// we can now use that port, if set up by heroku or read from .env or 4000 as a default if not set
server.listen(port, () => {
  console.log("Server is now listening on port ${port} ***\n")
})
