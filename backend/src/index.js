import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: './.env' });

const startServer = () => {
  try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`✅ Server is running at port ${PORT}`);
    });
  } catch (err) {
    console.log("❌ Server failed to start", err);
  }
};

startServer();
