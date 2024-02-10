const { NODE_MAILER_USER } = process.env

/**
    * Function to generate email options for successful user registration.
    * 
    * @param {string} username - Username of the registered user.
    * @param {string} email - Email address of the registered user.
    * 
    * @returns {object} - Returns email options including sender, recipient, subject, and HTML content.
*/

const mailOptionsRegister = (username, email) => {
    const mailOptions = {
        from: `CloseFriends <${NODE_MAILER_USER}>`,
        to: [`${email}`],
        subject: 'Successful user registration',
        html: `
            <p>  Welcome ${username},</p>
            
            <p>
                Now that your registration has been successfully completed, you can enjoy this application, meet friends from around the world, and create posts of your favorite moments.
            </p>


            <small>CloseFriends © 2024</small>
        `
    }

    return mailOptions
};

export default mailOptionsRegister