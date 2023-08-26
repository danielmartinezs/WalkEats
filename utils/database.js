import mongoose, { mongo } from "mongoose";

let isConnected = false;//track connection

export const dbConnection = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("MongoDB is already connected!");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:"WalkEats",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;
        console.log("MongoDB is connected!");
    } catch (error) {
        console.log(error);
    }
}

export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGODB_URI);
        if(connection.readyState === 1) {
            console.log("MongoDB connected!")
            return Promise.resolve(true);
        }
    } catch (error) {
        console.log(error);
        return Promise.reject(false);
    }
}