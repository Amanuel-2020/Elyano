const app = require('./app')
const ConnectDB = require('./database/database');
// const dotenv = require('dotenv');

// setting up config file
if(process.env.NODE_ENV === 'PRODUCTION') require('dotenv').config({path: 'backend/config/config.env'})

// connecting database
ConnectDB();

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})