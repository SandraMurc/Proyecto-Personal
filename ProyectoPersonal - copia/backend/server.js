const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose');
const sstIntegralModel = require("./models/sstIntegral");

// para leer datos de formulario
const app = express();
app.use( express.json() );

app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/personal", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Se conectó correctamente a la bd"))
.catch(err => console.log());


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const sstIntegralRoutes = require("./routers/sstIntegral.routes");
sstIntegralRoutes(app);


AdminJS.registerAdapter(AdminJSMongoose)

const adminJS = new AdminJS({
    resources: [sstIntegralModel],
    rootPath: '/admin'
})
//const adminRouter = AdminJSExpress.buildRouter(adminJS)
const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    adminJS,
    {
        cookieName: "adminjs",
        cookiePassword: "complicatedsecurepassword",
        authenticate: async (email, password) => {
            if(email == "admin@gmail.com" && password == "123456"){
                return true;
            } else {
                return false;
            }
        },
    },
    null,
    {
        resave: false, 
        saveUninitialized: true,
    }
);

app.use(adminJS.options.rootPath, adminRouter);

// recibir datos del formulario y enviar correo electrónico
app.post('/enviar', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'luisadama2402@gmail.com',
            pass: 'gplxgzhqjhfijlfu'
        }
    });

    const mailOptions = {
        from: 'Sandra <luisadama2402@gmail.com>',
        to: 'luisadama2402@gmail.com',
        subject: 'Un nuevo cliente necesita de tu servicio',
        text: `Nombre: ${req.body.nombre}\nCorreo electrónico: ${req.body.email}\nMensaje: ${req.body.detalle}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error al enviar el mensaje');
        } else {
            console.log('Mensaje enviado:', info.response);
            res.send('Mensaje enviado');
        }
    });
});


const server = app.listen(8000, ()=>{
    console.log("Se levanto el servidor en el puerto 8000");
})

