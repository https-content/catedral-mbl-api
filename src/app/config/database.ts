import { connect } from "mongoose";

const { MONGO_USER, MONGO_USER_PASSWORD, CLUSTER_URL } = process.env;

if (!MONGO_USER)
  throw {
    message: `Please provide MONGO_USER .env variable`,
  };

if (!MONGO_USER_PASSWORD)
  throw {
    message: `Please provide MONGO_USER_PASSWORD .env variable`,
  };
if (!CLUSTER_URL)
  throw {
    message: `Please provide CLUSTER_URL .env variable`,
  };

export default class DatabaseConnectionService {
  async execute() {
    try {
      const uri = `mongodb+srv://${MONGO_USER}:${MONGO_USER_PASSWORD}@${CLUSTER_URL}`;
      connect(uri, {});
      console.log("Database connected");
    } catch (error) {
      throw {
        message:
          "Database connection failed, verify the connection data at .env",
        error: JSON.stringify(error),
      };
    }
  }
}
