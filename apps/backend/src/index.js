import "dotenv/config";
import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
  origin: process.env.CORS_ORIGIN || "*",
}));
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({
    message: "IT Blog backend is running",
  });
});

app.use("/api", healthRoutes);

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
