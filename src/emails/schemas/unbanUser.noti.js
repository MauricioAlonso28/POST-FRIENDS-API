const { NODE_MAILER_USER } = process.env

const mailOptionsUserUnban = (username, email) => {
    const mailOptions = {
        from: `CloseFriends <${NODE_MAILER_USER}>`,
        to: [`${email}`],
        subject: 'Cuenta activa nuevamente',
        html: `
            <p> Bienvenido nuevamwente ${username},</p>

            <p> Después de un tiempo baneado creemos que has cambiado y queremos darte otra oportunidad para disfrutar de CloseFriends.</p>
            
            <small>CloseFriends © 2024</small>
        `
    }

    return mailOptions
};

export default mailOptionsUserUnban