import nodemailer from 'nodemailer'

/**
    * Function to create a nodemailer transporter.
    * 
    * @param {string} NODE_MAILER_USER - User's email address for the email service.
    * @param {string} NODE_MAILER_PASSWORD - User's password for the email service.
    * 
    * @returns {object} - Returns a nodemailer transporter object.
*/

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

/**
    * Function to send an email using the provided transporter and mail options.
    * 
    * @param {object} transporter - Nodemailer transporter object.
    * @param {object} mailOptions - Email options including sender, recipient, subject, and HTML content.
*/

const sendMail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions)
    } catch (error) {
        throw new Error(error.message)
    }
}

export { createTransporter, sendMail }