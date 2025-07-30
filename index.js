import express from "express";
import ErrorHandler from "./middleware/errorHandler.js";

const app = express();

const PORT = 3000;





app.use(ErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
