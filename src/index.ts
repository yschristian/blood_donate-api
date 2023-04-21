import "dotenv/config"
import "module-alias/register"
import validateEnv from "@/utils/validateEnv"
import App from "./app"
import BloodController from "@/resources/blood/blood.controller"

validateEnv()

const app = new App([
    new BloodController
],Number(process.env.PORT))

app.listen();
