const nodemailer = require("nodemailer");

const sendEmailController = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "aylin36@ethereal.email",
      pass: "aDz9kr5jvxsaa4JN9H",
    },
  });

  let info = await transporter.sendMail({
    from: '"jordantanaliga100" <jordantanaliga@gmail.com>',
    to: "jordantanaliga@gmail.com",
    subject: "Hello",
    html: "<b>Hello world, sending email with nodeJS</b>",
  });
  res.json({ info });
};
module.exports = sendEmailController;
