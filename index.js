//server start
const server = require('./api/server.js');
//PORT of server
const port = process.env.PORT || 4300;
server.listen(port, () => console.log(`\n** Server Runnong on port ${port}**\n`));