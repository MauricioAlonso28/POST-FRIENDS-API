import nodemailer from 'nodemailer'

const createTransporter = (NODE_MAILER_USER, NODE_MAILER_PASSWORD) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: NODE_MAILER_USER,
            pass: NODE_MAILER_PASSWORD
        }
    })

    return transporter
}



const sendMail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.log(error.message);
    }
}

export { createTransporter, sendMail }