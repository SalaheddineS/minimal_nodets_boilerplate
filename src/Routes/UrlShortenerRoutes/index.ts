import UrlShortenerService from "../../Services/UrlShortenerService";
import { Router } from "express";

const router = Router();

router.get('/getAllUrls',UrlShortenerService.getAllLinks);
router.get('/:incrementableId',UrlShortenerService.redirectLinks)
router.post('/addUrl',UrlShortenerService.addLink);

export default router