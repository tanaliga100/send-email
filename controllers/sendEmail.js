// const nodemailer = require("nodemailer");

// const sendEmailControllerTesting = async (req, res) => {
//   let testAccount = await nodemailer.createTestAccount();
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     auth: {
//       user: "aylin36@ethereal.email",
//       pass: "aDz9kr5jvxsaa4JN9H",
//     },
//   });

//   let info = await transporter.sendMail({
//     from: '"jordantanaliga100" <jordantanaliga@gmail.com>',
//     to: "jordantanaliga@gmail.com",
//     subject: "Hello",
//     html: "<b>Hello world, sending email with nodeJS</b>",
//   });
//   res.json({ info });
// };

// sending using SENDGRID
// const sendEmailController = async (req, res) => {
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//   const msg = {
//     to: "jordantanaliga20@gmail.com", // Change to your recipient
//     from: "jordantanaliga@gmail.com", // Change to your verified sender
//     subject: "Sending with SendGrid is Fun",
//     text: "and easy to do anywhere, even with Node.js",
//     html: "<strong>and easy to do anywhere, even with Node.js</strong>",
//   };
//   const response = await sgMail.send(msg);
//   res.json(response);
// };

const sgMail = require("@sendgrid/mail");
const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "jordantanaliga20@gmail.com", // Change to your recipient
    from: "jordantanaliga@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  const info = await sgMail.send(msg);
  res.json(info);
};

module.exports = sendEmail;
