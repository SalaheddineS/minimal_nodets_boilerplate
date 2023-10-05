import { Request,Response } from "express"

const helloWorld = (req:Request,res:Response)=>{
res.status(201).json({message:'the new route works flawlessly'});
}

export default {
    helloWorld
}