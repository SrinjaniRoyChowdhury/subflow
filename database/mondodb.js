import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if(!DB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.<development/production>.local');
}

const connectToDatabase = async () => {
  try{
    // For local MongoDB, remove SSL options
    const connectionOptions = {};
    
    // Only add SSL options if connecting to a remote database (like MongoDB Atlas)
    if (DB_URI.includes('mongodb+srv://') || DB_URI.includes('cloud.mongodb.com')) {
      connectionOptions.ssl = true;
      connectionOptions.tlsAllowInvalidCertificates = true;
    }

    await mongoose.connect(DB_URI, connectionOptions);

    console.log(`Connected to database in ${NODE_ENV} mode`);
  } catch(error) {
    console.error('Error connecting to database: ', error);

    process.exit(1);
  }
}

export default connectToDatabase;