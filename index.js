import app from "./src/app.js";
import { connectDB } from "./src/db.js";

const { PORT } = process.env

connectDB();
app.listen(PORT);
console.log('Server on port: ', PORT);