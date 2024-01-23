const { NODE_MAILER_USER } = process.env

const mailOptionsNewPost = (post, user) => {
    const { email, username } = user

    const mailOptions = {
        from: `CloseFriends <${NODE_MAILER_USER}>`,
        to: [`${email}`],
        subject: 'Post publicado éxitosamente',
        html: `
            <p>${username} tu post ha sido publicado con éxito,</p>

            <div>
                <b>Detalles del post: </b>
                
                <p>${post.message}</p>
            </div>

            <p>Espero te sigas animando a postear más momentos importantes de tu vida para compartir con amigos.</p>


            <small>Pronto se habilitarán las reacciones y comentarios a los Posts</small>
            <br/>
            <small>CloseFriends © 2024</small>
        `
    }

    return mailOptions
};

export default mailOptionsNewPost