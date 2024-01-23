const { NODE_MAILER_USER } = process.env

const mailOptionsUserBanned = (username, email) => {
    const mailOptions = {
        from: `CloseFriends <${NODE_MAILER_USER}>`,
        to: [`${email}`],
        subject: 'Tu cuenta baneada',
        html: `
            <p> Lamentamos informarte ${username} que te cuenta ha sido suspendida temporalmente por algunos reportes y/o quejas de otros usuarios.</p>
            
            <small>CloseFriends © 2024</small>
        `
    }

    return mailOptions
};

export default mailOptionsUserBanned