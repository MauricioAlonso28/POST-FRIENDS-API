const { NODE_MAILER_USER } = process.env

/**
    * Function to generate email options when publishing a new post.
    * 
    * @param {object} post - Details of the newly published post.
    * @param {object} user - Information of the user who made the post.
    * 
    * @returns {object} - Returns email options including sender, recipient, subject, and HTML content.
*/

const mailOptionsNewPost = (post, user) => {
    const { email, username } = user

    const mailOptions = {
        from: `CloseFriends <${NODE_MAILER_USER}>`,
        to: [`${email}`],
        subject: 'Post successfully published',
        html: `
            <p>${username}, your post has been successfully published,</p>

            <div>
                <b>Post details: </b>
                
                <p>${post.message}</p>
            </div>

            <p>
                We hope you continue to share more important moments of your life with friends.
            </p>


            <small>Reactions and comments on posts will be enabled soon.</small>
            <br/>
            <small>CloseFriends © 2024</small>
        `
    }

    return mailOptions
};

export default mailOptionsNewPost