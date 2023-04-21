import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/utils/interfaces/controller.interface";
import HttpException from "@/utils/exceptions/http.exception";
import validationMiddleware from "@/middleware/validation.middleware"
import validate from "@/resources/blood/blood.validation"
import BloodService from "@/resources/blood/blood.service"

class BloodController implements Controller {
    public path = "/bloods";
    public router = Router();
    private BloodService = new BloodService()

    constructor() {
        this.initialiseRoutes()
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.create),
            this.create
        )
    }

    private create = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const { title, description, categories } = req.body
            const blood = await this.BloodService.create(title, description, categories)
            res.status(201).json({ blood: blood });
        } catch (error) {
            next( new HttpException(400 , "can not post"))
        }
    }

}

export default BloodController