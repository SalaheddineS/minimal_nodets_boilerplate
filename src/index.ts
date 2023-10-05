import express, { json } from "express";
import * as dotenv from "dotenv";
import Routes from "./Routes";

dotenv.config();
const app = express();
const port = process.env.PORT||4000;
app.use(json());
app.use('/api',Routes.UrlShortenerRoutes)

app.listen(port,()=>{
    console.log(`successfully running on port:${port}`)
})
