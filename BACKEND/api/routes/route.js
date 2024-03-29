import  express from "express";
const router = express.Router()
import {create} from '../controller/curd.js'

router.route('/')
    .post(create)

export {router}