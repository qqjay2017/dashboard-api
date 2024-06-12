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

        const { authorization, ct, pt, fp,
        } = req.headers
        const { apiId, data, origin: originParam, headers: headersParam = {} } = body
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
        const url = origin + join(apiConfig?.baseName?.baseName || '', apiConfig?.url || '')
        console.log(url, method, 'url')
        // console.log(apiConfig, 'apiConfig')

        const requestIns = request(method, url)


        if (authorization) {
            requestIns.set("Authorization", authorization)
        }
        if (ct) {
            requestIns.set("ct", String(ct))
        }
        if (pt) {
            requestIns.set("pt", String(pt))
        }
        if (fp) {
            requestIns.set("fp", String(fp))
        }
        requestIns.set("User-Agent", String(req.headers['user-agent'] || "Apifox/1.0.0 (https://apifox.com)"))


        Reflect.ownKeys(headersParam).forEach((key) => {
            requestIns.set(String(key), String(headersParam[key] || ''))
        })


        // if (method == 'get') {
        //     requestIns.query(data)
        // } else {
        //     requestIns.send(data)
        // }
        requestIns.end((err, proxyRes) => {
            if (err) {
                console.log(err, 'request')
                return res.status(err.status).json(err.response.body)
            }
            // console.log(proxyRes, 'proxyRes')

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