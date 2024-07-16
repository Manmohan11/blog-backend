const http = require('http');
const config = require('./src/config/config');
const app = require('./src/app');
const db = require('./src/models/index');

const PORT = config.PORT;
const server = http.createServer(app);


db.sequelize.sync({ force: false }).then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });