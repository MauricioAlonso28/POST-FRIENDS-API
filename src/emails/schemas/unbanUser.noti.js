const { NODE_MAILER_USER } = process.env

/**
    * Function to generate email options for notifying about the reactivation of a user's account.
    * 
    * @param {string} username - Username of the user whose account is reactivated.
    * @param {string} email - Email address of the user whose account is reactivated.
    * 
    * @returns {object} - Returns email options including sender, recipient, subject, and HTML content.
*/

const mailOptionsUserUnban = (username, email) => {
    const mailOptions = {
        from: `CloseFriends <${NODE_MAILER_USER}>`,
        to: [`${email}`],
        subject: 'Account active again',
        html: `
            <p> Welcome back ${username},</p>

            <p> 
                After some time banned, we believe you've changed, and we want to give you another chance to enjoy CloseFriends.
            </p>
            
            <small>CloseFriends © 2024</small>
        `
    }

    return mailOptions
};

export default mailOptionsUserUnban