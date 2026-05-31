import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import dns from "node:dns";
import contactRoutes from "./routes/contactRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

dns.setDefaultResultOrder("ipv4first");
try {
    dns.setServers(["8.8.8.8", "1.1.1.1"]);
} catch (e) {
    console.warn("Could not set DNS servers:", e.message);
}


dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174", "https://idowuolakunleportfolio.vercel.app"],
    credentials: true,
}));


app.use("/api", contactRoutes);
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("My Portfolio is running");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});