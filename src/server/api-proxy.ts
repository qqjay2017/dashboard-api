import { join } from 'path'
import express from "express";
import request from "superagent";
import { PrismaClient } from '@prisma/client'
import { errorRes } from "../utils";
const app = express.Router()


export const prisma = new PrismaClient()


// 新增
app.post(`/proxy`, async (req, res) => {
    try {
        const body = req.body;
        const { apiId, data, origin: originParam } = body
        if (!apiId) {
            return errorRes({
                res,
                message: 'apiId必传'
            })

        }
        const apiConfig = await prisma.apiManage.findFirst({
            where: {
                id: apiId
            },
            include: {
                origin: true,
                baseName: true
            }
        })
        // 请求域名
        const origin = apiConfig?.origin?.origin || originParam;
        const method = (apiConfig?.method || 'get').toLowerCase()
        const url = join(origin, apiConfig?.baseName?.baseName || '', apiConfig?.url || '')

        console.log(apiConfig, 'apiConfig')

        const b = request(method, url)
        // b.set()

        if (method == 'get') {
            b.query(data)
        } else {
            b.send(data)
        }
        b.end((err, proxyRes) => {
            if (err) {
                console.log(err, 'err')
                return errorRes({
                    res,
                    error: err,
                })
            }
            console.log(proxyRes, 'proxyRes')

            res.json(proxyRes?.body)

        })






    } catch (e) {
        console.error(e)
        res.status(500).json({
            error: 'Server error!',
        })
    }
})

export default app