import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: './.env' });

const startServer = async () => {
  try {
      app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running at port ${process.env.PORT || 3000}`);
                });
                  } catch (err) {
                      console.log("Server failed to start", err);
                        }
                        };

                        startServer();
