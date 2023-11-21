import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import { printVersion110 } from "../Versions/V1.1.0/preview.js";
import { printVersion100 } from "../Versions/V1.0.0/preview.js";
import {LimitPreview} from "../middlewares/rateLimit/ratelimit.js"

const Preview = Router();
const version = routesVersioning()


// Accept-Version

Preview.get("/",version({
    // "1.0.0" : printVersion100,
    // "1.1.0" :(req,res)=>{
    //     console.log(JSON.stringify(LimitPreview()))
    //     res.send(JSON.stringify(LimitPreview()))
    //     }


    //     const db= await conx();
// const collection = db.collection("user")
//     try {
//     let funtion= await collection.find({}).toArray();
//     res.status(200).send(funtion)
//     } catch (error) {
//         res.send(error)
//     }

    }))


export default Preview;