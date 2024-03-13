# CloseFriends Api

This is an API centered around social interaction. This API enables users to connect with friends, make posts, and efficiently explore their friends' posts intuitively and securely.


## Features

- Friend Connections
- Post Management
- Advanced Validations
- Email Notifications


## Tech Stack

- NodeJs
- ExpressJs
- Mongoose
- MongoDB 


## Installation

1.- Clone the repo.

```bash
  git clone https://github.com/MauricioAlonso28/POST-FRIENDS-API.git
```

2.- From the main folder, move to "server" directory and install dependencies.

```bash
  cd server
  npm install
```

3.- Create a .env file inside the "server" directory and add the following information:

```bash
    PORT =  // Your number port
    URL_DB =   // Your MongoDB url
    ENDPOINT = // Your MongoDB endpoint
    NAME_DB =  // Name the database

    // nodemailer (Use Google Credentials)
    
    NODE_MAILER_USER =  // Your google email
    NODE_MAILER_PASSWORD =  // Create a password for google apps
```

4.- Run npm run dev in the terminal, located at the "server" directory.

```bash
    npm run dev
```


