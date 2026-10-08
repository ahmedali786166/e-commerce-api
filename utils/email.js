const nodemailer = require('nodemailer');

const sendWelcomeEmail = async (userEmail, username) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: 'Welcome to Our E-Commerce App!',
            text: `Hi ${username},\n\nWelcome to our platform. We are glad to have you!`
        };

        await transporter.sendMail(mailOptions);
        console.log("Welcome email sent!");
    } catch (error) {
        console.log("Email sending failed:", error);
    }
};

module.exports = sendWelcomeEmail;