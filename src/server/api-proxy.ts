import { join } from 'path'
import express from "express";
import request from "superagent";
import { PrismaClient } from '@prisma/client'
import { errorRes } from "../utils";


const headerKeys = [
    'fp',
    'ct',
    'pt',
    'authorization',
    'user-agent',
    'system-id',
    'access_token',
    'host',
    'origin',
    'cookie',
    'accept-encoding',
    'accept',
    'content-type',
    'cache-control'
]
const app = express.Router()


export const prisma = new PrismaClient()


// 新增
app.post(`/proxy`, async (req, res) => {
    try {
        const body = req.body;

        // const { authorization, ct, pt, fp,
        // } = req.headers
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
        // console.log(apiConfig, 'apiConfig')

        const requestIns = request(method, url)
        const allHeaders = {
            ...req.headers,
            ...headersParam
        }
        Reflect.ownKeys(allHeaders).forEach((k) => {
            const key = String(k).toLowerCase();
            if (headerKeys.includes(key)) {
                requestIns.set(key, String(allHeaders[key]))
            }
        })
        // requestIns.then((proxyRes) => {
        //     console.log(proxyRes, 'proxyRes22')

        // })
        requestIns.end((err, proxyRes) => {
            console.log(err, proxyRes, "err, proxyRes")

            if (err) {
                console.log(err, 'request')
                // Reflect.ownKeys(err?.response?.headers || {}).forEach((k) => {
                //     const key = String(k)
                //     res.set(key, String(proxyRes.headers[key] || ''))
                // })
                res.status(err.status).json(err.response.body)
            }
            // console.log(proxyRes, 'proxyRes')
            // console.log(proxyRes, 'proxyRes')
            console.log(proxyRes.headers, 'proxyRes.headers')
            Reflect.ownKeys(proxyRes.headers).forEach((k) => {
                const key = String(k)
                const value = proxyRes.headers[key]
                res.set(key, value)
            })

            res.json(proxyRes?.body || {})

        })

    } catch (e) {
        console.error(e, 'eee')
        res.status(500).json({
            error: 'Server error!',
        })
    }
})

export default app