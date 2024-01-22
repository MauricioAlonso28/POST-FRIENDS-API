import createTransporter from '../transporter/transporter.js'

const { NODE_MAILER_USER } = process.env

const sendRegisterEmail = (userEmail, userName) => {
    const transporter = createTransporter();
    const mailOptions = {
        from: `CloseFriends <${NODE_MAILER_USER}>`,
        to: userEmail,
        subject: 'Registro de usuario éxitoso',
        html: `
            <p> Bienvenido ${userName},</p>
            
            <p>
                Ahora que tu registro se ha realizado con éxito puedes disfrutar de esta aplicación, conocer amigos de todo el mundo y realizar posts de tus momentos que más te gusten.
            </p>


            <small>CloseFriends © 2024</small>
        `
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

export default sendRegisterEmail