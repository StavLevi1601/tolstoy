import express from "express";
import cors from "cors";
import urlsRoutes from "./src/routes/urls.routes.js";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Working");
});

const limiter = rateLimit({
  windowMs: 1000,
  max: 5,
});

app.use(express.json());

app.use(limiter);

app.use(helmet());
app.use(cors());

app.use("/url", urlsRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
