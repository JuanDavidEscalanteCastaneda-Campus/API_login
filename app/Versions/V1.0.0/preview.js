import {conx} from "../../database/connection.js";

export const printVersion100 = async (req,res)=>{
    res.send("Hola100")

// const db= await conx();
// const collection = db.collection("user")
//     try {
//     let funtion= await collection.find({}).toArray();
//     res.status(200).send(funtion)
//     } catch (error) {
//         res.send(error)
//     }
    
}