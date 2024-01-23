const { NODE_MAILER_USER } = process.env

const mailOptionsRegister = (username, email) => {
    const mailOptions = {
        from: `CloseFriends <${NODE_MAILER_USER}>`,
        to: [`${email}`],
        subject: 'Registro de usuario éxitoso',
        html: `
            <p> Bienvenido ${username},</p>
            
            <p>
                Ahora que tu registro se ha realizado con éxito puedes disfrutar de esta aplicación, conocer amigos de todo el mundo y realizar posts de tus momentos preferidos.
            </p>


            <small>CloseFriends © 2024</small>
        `
    }

    return mailOptions
};

export default mailOptionsRegister