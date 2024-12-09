const express = require('express');

const { ServerConfig } = require('./config');

const apiRoutes = require('./routes/index.js')

const app = express();

app.use('/api' , apiRoutes);


app.listen(ServerConfig.PORT , ()=>{
  console.log(`server is running at port: ${ServerConfig.PORT}`);
 
});