const { NODE_MAILER_USER } = process.env

/**
    * Function to generate email options for notifying about a successful login.
    * 
    * @param {string} username - Username of the logged-in user.
    * @param {string} email - Email address of the logged-in user.
    * 
    * @returns {object} - Returns the email options including sender, recipient, subject, and HTML content.
*/

const mailOptionsLogin = (username, email) => {
    const mailOptions = {
        from: `CloseFriends <${NODE_MAILER_USER}>`,
        to: [`${email}`],
        subject: 'Successful login',
        html: `
            <p> Welcome back, ${username}</p>
            
            <p>
                We're glad to see you again, and we hope you continue to enjoy the features that CloseFriends provides.
            </p>


            <small>CloseFriends © 2024</small>
        `
    }

    return mailOptions
};

export default mailOptionsLogin