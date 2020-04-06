global.fetch = require("node-fetch");
const cc = require("cryptocompare");
const nodemailer = require("nodemailer");
const moment = require("moment");

// Gmail password
// Change this line to:
// let pw = "youPassWord";
let pw = require("../../nocheckin.js").pw;

// Set gmail username and password
let spec = `smtps://ee599.sp2020@gmail.com:${pw}@smtp.gmail.com`;

// // Sends an email using gmail account
function SendMail(mailOptions) {
  var transporter = nodemailer.createTransport(spec);
  return transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log("Error in sending email: ", error);
      try {
        if (/quota/.test(error)) {
          console.log("We failed because of email quota!");
        }
      } catch (error) {
        console.log("Error: ", error);
      }
      return console.log(error);
    }
    console.log("Message sent: " + info.response);
  });
}
//-----------------------------------------------------------

async function sendNotification() {
  let data = await cc.price("BTC", "USD");
  console.log(data);
  
  let date = moment().format("MMMM Do YYYY, h:mm:ss a");
  let body = `<pre>`;
  body += date + "\n";
  body += `Bitcoin is now ${JSON.stringify(data)} USD!`;
  body += `</pre>`;

  let mailOptions = {
    from: '"NodeJS" <ee599.sp2020@gmail.com>', // sender address
    to: "saifhash@usc.edu", // list of receivers
    subject: "💰Most recent bitcoin price", // Subject line
    text: "", // plaintext body
    html: body
  };
  SendMail(mailOptions);
}


setInterval( sendNotification, 3000);
