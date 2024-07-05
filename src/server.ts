import { PrismaClient } from '@prisma/client'
import helmet from "helmet";

import express from 'express'
import dashboard from './server/dashboard'
import apiManage from './server/api-manage'
import apiProxy from './server/api-proxy'
import { errorHandlerJsonMiddleware, prismaErrorMiddleware, } from './middleware';

export const prisma = new PrismaClient()
const app = express()

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


// app.use(errorMiddleware);

app.use('/dashboard', dashboard)
app.use('/api-manage', apiManage)
app.use('/api-proxy', apiProxy)


app.use(prismaErrorMiddleware)
app.use(errorHandlerJsonMiddleware());

app.use(function (req, res, next) {
    // res.setHeader("Access-Control-Expose-Headers", "access_Token")
    res.status(200).json({
        data: {},
        message: "Not Found"
    })
});


export { app }
