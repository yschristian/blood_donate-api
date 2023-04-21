import Joi from "joi"

const create  = Joi.object({
    title : Joi.string().required,
    description : Joi.string().required,
    categories : Joi.string().required
})

export default {create}