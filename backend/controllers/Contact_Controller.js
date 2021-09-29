   
const nodemailer = require('nodemailer');

exports.sendMessage =  async(req, res, next) =>{

    smpttransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'amanuelwakshum@gmail.com',
            pass: 'AmanHosting2020@!'
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: `${req.body.email}`,
        to: `amanuelwakshum@gmail.com`,
        subject: `Elias Portfoil Feedback`,
        html: `
       
         <h1 style='color: red '>User FeedBack</h1>        
         <span style='color: black, font-size: 20px'>Name:  ${req.body.name } </span>
         <br />
         <span style='color: black, font-size: 20px'>Email: ${req.body.email}</span>
         <br />
         <span style='color: black, font-size: 20px'>Message: 
          ${req.body.message}   
         </span>
   
        `
    };

     await smpttransport.sendMail(mailOptions)
     res.status(200).json({
         success: true,
         message: 'Email sent successfuly!'
     })
  
}