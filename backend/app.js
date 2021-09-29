const express = require('express');
const path = require('path');
const Cookieparser = require('cookie-parser');
const app = express();


if(process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({path: 'backend/config/config.env'})

app.use(Cookieparser());
app.use(express.json());

// router api => /api/v1/
const userRouter = require('./router/user');
const skillRouter = require('./router/skill');
const portfoilRouter = require('./router/portfoil');
const ServiceRouter = require('./router/service');
const BlogRouter = require('./router/blog');
const sendMessage = require('./router/contact_message');
app.use('/api/v1/admin/',userRouter)
app.use('/api/v1/', skillRouter, portfoilRouter, ServiceRouter, BlogRouter)
app.use('/api/', sendMessage)

if(process.env.NODE_ENV === 'PRODUCTION'){
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
    })
}

module.exports = app;