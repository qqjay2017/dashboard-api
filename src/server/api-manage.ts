import express from "express";

import { apiManageSchema } from "../schemas";
import { errorRes } from "../utils";
import { getUpdateAt } from "../utils";

import prisma from "../lib/prisma";
const app = express.Router()






// 新建分组
app.post('/group', async (req, res) => {
    const body = req.body;
    const result = await prisma.apiGroup.create({
        data: {
            ...body
        }

    })

    res.json({ data: result })
})
// 分组下拉列表
app.get('/group/list', async (req, res) => {
    const result = await prisma.apiGroup.findMany({
        orderBy: {
            createdAt: 'desc'
        }

    })

    res.json({ data: result })
})


// 新建baseName
app.post('/baseName', async (req, res) => {
    const body = req.body;
    const result = await prisma.apiBaseName.create({
        data: {
            ...body
        }

    })

    res.json({ data: result })
})
// baseName下拉列表
app.get('/baseName/list', async (req, res) => {
    const result = await prisma.apiBaseName.findMany({

        orderBy: {
            createdAt: 'desc'
        }
    })

    res.json({ data: result })
})

// 新建apiOrigin
app.post('/origin', async (req, res) => {
    const body = req.body;
    const result = await prisma.apiOrigin.create({
        data: {
            ...body
        }

    })

    res.json({ data: result })
})
// origin下拉列表
app.get('/origin/list', async (req, res) => {
    const result = await prisma.apiOrigin.findMany({
        orderBy: {
            createdAt: 'desc'
        }

    })

    res.json({ data: result })
})


// 新建api
app.post('/create', async (req, res) => {
    const body = req.body;
    const result = await prisma.apiManage.create({
        data: {
            ...body
        }


    })

    res.json({ data: result })
})

// api列表
app.get('/list', async (req, res) => {
    const result = await prisma.apiManage.findMany({
        orderBy: {
            createdAt: 'desc'
        },


    })

    res.json({ data: result })
})

// api详情
app.get('/:id', async (req, res) => {
    const id = req.params.id
    const result = await prisma.apiManage.findFirst({
        where: {
            id: id
        },


    })

    res.json({ data: result })
})


// 编辑api
app.put('/edit/:id', async (req, res) => {
    const id = req.params.id

    const body = req.body;
    const { success, data, error } = apiManageSchema.safeParse(body)


    if (!success) {
        return errorRes({
            res,
            message: error.toString()
        })
    }

    const result = await prisma.apiManage.update({
        where: {
            id
        },
        data: {
            ...data,
            ...getUpdateAt(),
        }


    })

    res.json({ data: result })
})


app.post("/export", async (req, res) => {
    const apiGroup = await prisma.apiGroup.findMany({
    })
    const apiBaseName = await prisma.apiBaseName.findMany({
    })
    const apiOrigin = await prisma.apiOrigin.findMany({
    })
    const api = await prisma.apiManage.findMany({
        orderBy: {
            createdAt: 'desc'
        },

    })
    const jsonObj = {
        apiGroup: (apiGroup || []).map(item => {
            return {
                ...item,
                createdAt: undefined,
                updateAt: undefined

            }
        }),
        apiBaseName: (apiBaseName || []).map(item => {
            return {
                ...item,
                createdAt: undefined,
                updateAt: undefined

            }
        }),
        apiOrigin: (apiOrigin || []).map(item => {
            return {
                ...item,
                createdAt: undefined,
                updateAt: undefined

            }
        }),
        api: (api || []).map(a => {
            return {
                ...a,

                createdAt: undefined,
                updateAt: undefined
            }
        })

    }

    // res.setHeader('Content-Disposition', contentDisposition('api.json'))


    res.json({ data: jsonObj })

})

app.post("/import", async (req, res, next) => {
    try {
        const body = req.body || {};
        const { apiGroup = [], apiBaseName = [], apiOrigin = [], api = [] } = body
        if (apiGroup && apiGroup.length) {
            await Promise.all(apiGroup.map((group) => {
                return new Promise(async (resolve) => {
                    try {
                        await prisma.apiGroup.create({
                            data: group
                        })
                    } catch (error) {

                    } finally {

                        resolve({})
                    }
                })
            }))

        }
        if (apiBaseName && apiBaseName.length) {
            await Promise.all(apiBaseName.map((basename) => {
                return new Promise(async (resolve) => {

                    try {
                        const d = await prisma.apiBaseName.create({
                            data: basename
                        })


                    } catch (error) {



                    } finally {
                        resolve({})
                    }

                })
            }))
        }
        if (apiOrigin && apiOrigin.length) {
            // await prisma.apiOrigin.createMany({
            //     data: apiOrigin
            // })

            await Promise.all(apiOrigin.map((origin) => {
                return new Promise(async (resolve) => {
                    try {
                        await prisma.apiOrigin.create({
                            data: origin
                        })
                    } catch (error) {

                    } finally {
                        resolve({})
                    }
                })
            }))
        }
        if (api && api.length) {
            await Promise.all(api.map(a => {
                return new Promise(async (resolve) => {
                    try {
                        await prisma.apiManage.create({
                            data: {
                                ...a,
                                headers: a.headers && typeof a.headers === 'object' ? JSON.stringify(a.headers) : a.headers
                            }
                        })
                    } catch (error) {

                    } finally {
                        resolve({})
                    }
                })
            }))

        }

        res.json({ data: {} })
    } catch (error) {
        console.error(error, 'error')

        next(error)
    }
})

export default app