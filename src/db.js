import mongoose from "mongoose";

const { ENDPOINT, NAME_DB } = process.env

export const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${ENDPOINT}/${NAME_DB}`)
        console.log("DB is connected");
    } catch (error) {
        console.log(error);
    }
}