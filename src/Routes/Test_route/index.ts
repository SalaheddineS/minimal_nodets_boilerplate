import Services from "../../Services";
import { Router } from "express";

const router = Router();

router.get('/get',Services.testServices.helloWorldService.helloWorld);

export default router;