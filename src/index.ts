import express from "express";
import * as dotenv from "dotenv";
import Routes from "./Routes";

dotenv.config();
const app = express();
const port = process.env.PORT||4000;

app.use('/api',Routes.testrouter);

app.listen(port,()=>{
    console.log(`successfully running on port:${port}`)
})
