// /Users/jonatas/Documents/Projects/i-sommelier-react/backend/src/utils/mailer.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail', // Substitua pelo seu provedor SMTP
    auth: {
        user: 'your-email@gmail.com', // Seu e-mail
        pass: 'your-email-password', // Sua senha
    },
});

const sendEmail = async (to, subject, text) => {
    try {
        await transporter.sendMail({
            from: 'your-email@gmail.com', // Seu e-mail
            to,
            subject,
            text,
        });
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendEmail;