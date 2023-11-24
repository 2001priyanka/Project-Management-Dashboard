import express from "express";
import connectDb from "./ConnectDb/Db.js";
import dotenv from "dotenv";
import userRoutes from './Routes/UserRoutes.js';
import houseRoutes from './Routes/houseRoutes.js'
import { errorHandler } from "./Middleware/errorHandler.js";
import cors from "cors"


dotenv.config(); 

connectDb();  

// const corsOptions = {
//   origin: "*",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/houses", houseRoutes);
app.use("/api/users", userRoutes);


// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions));


const port = process.env.PORT || 5000;
    


app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
