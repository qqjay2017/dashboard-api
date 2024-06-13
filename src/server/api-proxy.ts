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
    'cache-control',
    'transfer-encoding',
    'access-control-allow-credentials',
    "content-security-policy",
    'x-content-type-options',
    'strict-transport-security',
    'x-frame-options',
    'x-xss-protection',
    'referrer-policy',
    'access-control-allow-methods',
    'expires',
    'access-control-max-age',
    'access-control-allow-headers',
    'access-control-expose-headers',
    'date',
    'access-control-allow-origin',
]

const proxyResHeaderKeys = ['access_token',
    'access-control-allow-credentials',
    "content-security-policy",
    'x-content-type-options',
    'strict-transport-security',
    'x-frame-options',
    'x-xss-protection',
    'referrer-policy',
    'access-control-allow-methods',
    'expires',
    'access-control-max-age',
    'access-control-allow-headers',
    'access-control-expose-headers',
    'date',
    'access-control-allow-origin',]
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
        const proxyRes = await requestIns
        // requestIns.end((err, proxyRes) => {
        //     // console.log(err, proxyRes, "err, proxyRes")

        //     if (err) {
        //         console.log(err, 'request')
        //         return res.status(err.status).json(err.response.body)
        //     }




        //     console.log(proxyRes?.body, 'proxyRes')

        //     return res.status(proxyRes?.status).json(proxyRes?.body || {})

        // })

        Reflect.ownKeys(proxyRes.headers).forEach((k) => {
            const key = String(k)
            if (proxyResHeaderKeys.includes(key)) {
                const value = proxyRes.headers[key]

                res.set(key, value)
            }
        })

        return res.status(proxyRes?.status).json(proxyRes?.body || {})



    } catch (e) {
        console.error(e, 'eee')
        res.status(500).json({
            error: 'Server error!',
        })
    }
})

export default app