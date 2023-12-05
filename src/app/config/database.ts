import mongoose from "mongoose";

const { MONGO_USER, MONGO_USER_PASSWORD, CLUSTER_URL } = process.env;

let error: string = "";

if (!MONGO_USER)
  throw {
    message: "You must provide MONGO_USER in config.env",
  };

if (!MONGO_USER_PASSWORD) {
  throw {
    message: "You must provide MONGO_USER_PASSWORD in config.env",
  };
}

if (!CLUSTER_URL) {
  throw {
    message: "You must provide CLUSTER_URL in config.env",
  };
}

export default class DatabaseConnectService {
  async execute() {
    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_USER_PASSWORD}@${process.env.CLUSTER_URL}`;
    console.log(uri);
    try {
      mongoose.connect(uri, {
        dbName: process.env.DB_NAME,
      });
    } catch (error) {
      throw {
        message: "Error connecting to database",
        error: JSON.stringify(error),
      };
    }
  }
}
