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
        const requestIns = request(method, url)
        let allHeaders = {
            ...req.headers,


        };
        (apiConfig?.headers || []).forEach((item: any) => {
            allHeaders[item.headerKey] = item.headerValue
        });
        allHeaders = {
            ...allHeaders,
            ...headersParam
        }
        return handleProxy({
            requestIns,
            allHeaders,
            res
        })
    } catch (e) {
        console.error(e, 'eee')
        res.status(500).json({
            error: 'Server error!',
        })
    }
})


app.post('/proxy-test', async (req, res) => {
    const body = req.body;

    const { data, origin: originParam, headers: headersParam = {}, formValues = {} } = body
    const { originId, baseNameId, headers: headersParam2 = [] } = formValues;
    let origin = originParam;
    let baseName = '';
    if (originId) {
        const o = await prisma.apiOrigin.findFirst({
            where: {
                id: originId
            }
        })
        if (o && o.origin) {
            origin = o.origin
        }
    }
    if (baseNameId) {
        const b = await prisma.apiBaseName.findFirst({
            where: {
                id: baseNameId
            }
        })
        if (b && b.baseName) {
            baseName = b.baseName
        }
    }
    const url = origin + join(baseName || '', formValues.url || '')
    const method = (formValues?.method || 'get').toLowerCase()
    const requestIns = request(method, url)
    let allHeaders = {
        ...req.headers,
        ...headersParam2,

    };
    (headersParam2 || []).forEach((item: any) => {
        allHeaders[item.headerKey] = item.headerValue
    });

    allHeaders = {
        ...allHeaders,
        ...headersParam
    };


    return handleProxy({
        requestIns,
        allHeaders,
        res
    })
})

async function handleProxy({
    allHeaders,
    requestIns,
    res
}: any) {
    Reflect.ownKeys(allHeaders).forEach((k) => {
        const key = String(k).toLowerCase();
        if (headerKeys.includes(key)) {
            requestIns.set(key, String(allHeaders[key]))
        }
    })
    const proxyRes = await requestIns
    Reflect.ownKeys(proxyRes.headers).forEach((k) => {
        const key = String(k)
        if (proxyResHeaderKeys.includes(key)) {
            const value = proxyRes.headers[key]

            res.set(key, value)
        }
    })
    return res.status(proxyRes?.status).json(proxyRes?.body || {})
}

export default app