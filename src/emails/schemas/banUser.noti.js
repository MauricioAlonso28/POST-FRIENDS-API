const { NODE_MAILER_USER } = process.env

/**
    * Function to generate email options for notifying a user about their account being banned.
    * 
    * @param {string} username - Username of the banned user.
    * @param {string} email - Email address of the banned user.
    * 
    * @returns {object} - Returns the email options including sender, recipient, subject, and HTML content.
*/

const mailOptionsUserBanned = (username, email) => {
    const mailOptions = {
        from: `CloseFriends <${NODE_MAILER_USER}>`,
        to: [`${email}`],
        subject: 'Your account has been banned',
        html: `
            <p> We regret to inform you, ${username} that your account has been temporarily suspended due to some reports and/or complaints from other users.</p>
            
            <small>CloseFriends © 2024</small>
        `
    }

    return mailOptions
};

export default mailOptionsUserBanned