import nodemailer from 'nodemailer'

const { NODE_MAILER_USER, NODE_MAILER_PASSWORD } = process.env

const createTransporter = () => {
    return nodemailer.createTransport({
        pool: true,
        host: "smtp.gmail.com",
        port: 465,
        // service: "gmail",
        auth: {
            user: `${NODE_MAILER_USER}`,
            pass: `${NODE_MAILER_PASSWORD}`,
        },
        secure: true,
    });
};

export default createTransporter
