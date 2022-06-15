const express = require('express');
require('dotenv').config();
const mailer = require('nodemailer');
const cors = require('cors')


const app = express();

app.use(express.json())

app.use(cors('*'))

app.get('/', (req, res) => {
    res.send({ message: 'This is working' })
})



app.post('/', (req, res, next) => {
    console.log(req.body)
    let senderEmail = req.body.senderEmail;
    // Thi is 
    let name = req.body.name;
    let address = req.body.address;
    let puppyName = req.body.puppyName;
    let phone = req.body.phone;
    let email = req.body.email;
    let message = req.body.message;
    // This is a change
    //Test
    let body = {
        from: `mymailer2377@crittersdeliveryagency.com`,
        to: senderEmail,
        replyTo: `${email}`,
        subject: `${name}`,
        html: `<div><h3 style="color: green; text-align: center">New Contact Submited</h3><p> <span style='font-weight: bold'> FirstName: </span>  ${name} <br/> <span style='font-weight: bold'>Address:</span>  ${address} <br/> <span style='font-weight: bold'>Phone:</span>  ${phone} <br/> <span style='font-weight: bold'>PuppyName:</span>  ${puppyName} <br/> <span style='font-weight: bold'>Email:</span>  ${email} <br/> <span style='font-weight: bold'>Message:</span> ${message}</p></div>`
    }
    // icui4CUMISE$$7
    const transporter = mailer.createTransport({
        secure: true,
        host: 'smtp.titan.email',
        port: 465,
        // secureConnection: false,
        auth: {
            user: 'mymailer2377@crittersdeliveryagency.com',
            pass: 'icui4cumise7'    
        }
    })


    // ITS NOT UP TO DATE

    
    transporter.sendMail(body, (err, result) => {
        console.log('Sending Mail')
        if (err) {
            console.log("#####there was an error########");
            console.log(err);
            res.status(401).send({ message: 'There was an error' })
            return false
        }
        console.log(result);
        console.log("email sent");
        res.send({ message: 'Hello World Working' })

    })
})

app.listen(process.env.PORT || 4000, () => {
    console.log('Server Running')
})




// const express = require('express');
// require('dotenv').config();
// const mailer = require('nodemailer');
// const cors = require('cors')


// const app = express();

// app.use(express.json())

// app.use(cors('*'))

// app.get('/', (req, res) => {
//     res.send({ message: 'This is working' })
// })



// app.post('/', (req, res, next) => {
//     console.log(req.body)
//     let senderEmail = req.body.senderEmail;
//     // Thi is 
//     let name = req.body.name;
//     let address = req.body.address;
//     let puppyName = req.body.puppyName;
//     let phone = req.body.phone;
//     let email = req.body.email;
//     let message = req.body.message;
//     // This is a change
//     //Test
//     let body = {
//         from: `${email}`,
//         to: senderEmail,
//         replyTo: `${email}`,
//         subject: `${name}`,
//         html: `<div><h3 style="color: green; text-align: center">New Contact Submited</h3><p> <span style='font-weight: bold'> FirstName: </span>  ${name} <br/> <span style='font-weight: bold'>Address:</span>  ${address} <br/> <span style='font-weight: bold'>Phone:</span>  ${phone} <br/> <span style='font-weight: bold'>PuppyName:</span>  ${puppyName} <br/> <span style='font-weight: bold'>Email:</span>  ${email} <br/> <span style='font-weight: bold'>Message:</span> ${message}</p></div>`
//     }
//     // icui4CUMISE$$7
//     const transporter = mailer.createTransport({
//         secure: true,
//         host: 'smtp.gmail.com',
//         port: 465,
//         auth: {
//             user: 'mymailer2377@gmail.com',
//             pass: 'icui4CUMISE$$$7'    
//         }
//     })


//     // ITS NOT UP TO DATE

//     transporter.sendMail(body, (err, result) => {
//         console.log('Sending Mail')
//         if (err) {
//             console.log("#####there was an error########");
//             console.log(err);
//             res.status(401).send({ message: 'There was an error' })
//             return false
//         }
//         console.log(result);
//         console.log("email sent");
//         res.send({ message: 'Hello World Working' })

//     })
// })

// app.listen(process.env.PORT || 4000, () => {
//     console.log('Server Running')
// })
