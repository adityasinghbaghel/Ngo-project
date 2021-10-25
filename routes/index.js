var express = require('express');
var router = express.Router();
const app = express();
const expressLayout = require('express-ejs-layouts')
const ejs = require('ejs');
const path = require('path')
const nodemailer = require('nodemailer');
// set template engine!
app.use(expressLayout)
app.set('views' , path.join(__dirname , '/views') )
app.set('view engine' , 'ejs')

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/Home', function(req, res, next) {
  res.render('index');
});

router.get('/babaji' ,function(req,res){
  res.render('babaji');
})
router.get('/members' ,function(req,res){
  res.render('members');
})
router.get('/aim' ,function(req,res){
  res.render('aim');
})
router.get('/patient' ,function(req,res){
  res.render('patient');
})

router.get('/gallery' ,function(req,res){
  res.render('gallery');
})
router.get('/contact' ,function(req,res){
  res.render('contact');
})

router.get("/Donations", (req, res) => {
    res.render("Donations");
  });
  
  
  
    
//nodemailer

router.post('/send' ,function(req,res){
  const output = `
  <p>You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>
    <li>firstName : ${req.body.firstname}</li>
    <li>lastName : ${req.body.lastname}</li>
    <li>PhoneNumber : ${req.body.number}</li>
    <li>Email : ${req.body.email}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
  `;
    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: "aditya.s.baghel1@gmail.com",
            pass: "Aditya@9876"
        }
    });
  
    // Message object
    let message = {
        from: '"Volunteer" <aditya.s.baghel1@gmail.com> ',
        to: 'aditya <nishantkh786@gmail.com>',
        subject: 'Nodemailer is unicode friendly ✔',
        text: 'Hello to myself!',
        html: output
    };
  
    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return process.exit(1);
        }
  
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
        res.render('contact')
      });
  });
  
  
  router.post('/sends' ,function(req,res){
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>firstName : ${req.body.firstname}</li>
      <li>lastName : ${req.body.lastname}</li>
      <li>PhoneNumber : ${req.body.number}</li>
      <li>Email : ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;
      // Create a SMTP transporter object
      let transporter = nodemailer.createTransport({
          service: 'gmail',
          port: 587,
          secure: false,
          auth: {
              user: "aditya.s.baghel1@gmail.com",
              pass: "Aditya@9876"
          }
      });
    
      // Message object
      let message = {
          from: '"Volunteer" <aditya.s.baghel1@gmail.com> ',
          to: 'aditya <adityatradershelp@gmail.com>',
          subject: 'Nodemailer is unicode friendly ✔',
          text: 'Hello to myself!',
          html: output
      };
    
      transporter.sendMail(message, (err, info) => {
          if (err) {
              console.log('Error occurred. ' + err.message);
              return process.exit(1);
          }
    
          console.log('Message sent: %s', info.messageId);
          // Preview only available when sending through an Ethereal account
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      
          res.render('patient')
        });
    });

  
  module.exports= router;

module.exports = router;
