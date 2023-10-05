import { Request, Response } from "express";
interface UrlType {
  [url: string]: string;
}
let incrementable = 0;
const Urls: UrlType = {};

const addLink = (req: Request, res: Response) => {
  const { url } = req.body;
  const shortenedUrl= `${incrementable}`;
  Urls[shortenedUrl]=url
  res.status(201).json({ message: "The shortened URL is: ",url:process.env.PROTOCOL + "://" + process.env.DOMAIN + "/api/" + incrementable  });
  incrementable++;
};

const getAllLinks = (req: Request, res: Response) => {
  res.status(201).json({ Urls });
};

const redirectLinks = (req:Request,res:Response) => {
  const { incrementableId } = req.params;
  console.log(incrementableId)
  if (Urls.hasOwnProperty(incrementableId)) {
    const originalUrl = Urls[incrementableId];
    console.log(originalUrl)
    if (!originalUrl.startsWith("https://")){
    res.redirect('https://'+originalUrl);}
    else if(originalUrl.startsWith("https://")) res.redirect(originalUrl)
  } else {
    res.status(404).json({ message: "Shortened URL not found" });
  }
}

export default {
    getAllLinks,
    addLink,
    redirectLinks
}