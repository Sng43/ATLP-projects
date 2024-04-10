import express  from "express";


export const startingPoint = async (req: express.Request, res: express.Response) => {
    try{
        res.set({
            "Allow-acces-Allow-Origin": '*'
        })

        return res.redirect('index.html')
    }catch (error){
        console.log(error);
        return res.status(400).json(error)
    }
}