const { NODE_MAILER_USER } = process.env

const mailOptionsLogin = (username, email) => {
    const mailOptions = {
        from: `CloseFriends <${NODE_MAILER_USER}>`,
        to: [`${email}`],
        subject: 'Inicio de sesión exitoso',
        html: `
            <p> Bienvenido nuevamente ${username}</p>
            
            <p>
                Nos alegra verte nuevamente, esperamos sigas disfrutando de las funcionalidades que te brinda CloseFriends.
            </p>


            <small>CloseFriends © 2024</small>
        `
    }

    return mailOptions
};

export default mailOptionsLogin