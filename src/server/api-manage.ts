import express from "express";
import { PrismaClient } from '@prisma/client'
const app = express.Router()


export const prisma = new PrismaClient()



// 新建分组
app.post('/group', async (req, res) => {
    try {
        const body = req.body;
        const result = await prisma.apiGroup.create({
            data: {
                ...body
            }

        })

        res.json({ data: result })
    } catch (e: any) {

        res.status(500).json({
            error: e.message || 'Server error!',
        })
    }
})
// 分组下拉列表
app.get('/group/list', async (req, res) => {
    try {
        const result = await prisma.apiGroup.findMany({


        })

        res.json({ data: result })
    } catch (e: any) {

        res.status(500).json({
            error: e.message || 'Server error!',
        })
    }
})


// 新建baseName
app.post('/baseName', async (req, res) => {
    try {
        const body = req.body;
        const result = await prisma.apiBaseName.create({
            data: {
                ...body
            }

        })

        res.json({ data: result })
    } catch (e: any) {

        res.status(500).json({
            error: e.message || 'Server error!',
        })
    }
})
// baseName下拉列表
app.get('/baseName/list', async (req, res) => {
    try {
        const result = await prisma.apiBaseName.findMany({


        })

        res.json({ data: result })
    } catch (e: any) {

        res.status(500).json({
            error: e.message || 'Server error!',
        })
    }
})

// 新建apiOrigin
app.post('/origin', async (req, res) => {
    try {
        const body = req.body;
        const result = await prisma.apiOrigin.create({
            data: {
                ...body
            }

        })

        res.json({ data: result })
    } catch (e: any) {

        res.status(500).json({
            error: e.message || 'Server error!',
        })
    }
})
// origin下拉列表
app.get('/origin/list', async (req, res) => {
    try {
        const result = await prisma.apiOrigin.findMany({


        })

        res.json({ data: result })
    } catch (e: any) {

        res.status(500).json({
            error: e.message || 'Server error!',
        })
    }
})


// 新建api
app.post('/create', async (req, res) => {
    try {
        const body = req.body;
        const result = await prisma.apiManage.create({
            data: {
                ...body
            }


        })

        res.json({ data: result })
    } catch (e: any) {

        res.status(500).json({
            error: e.message || 'Server error!',
        })
    }
})

// api列表
app.get('/list', async (req, res) => {
    try {
        const result = await prisma.apiManage.findMany({

            include: {
                origin: true,
                baseName: true,
                group: true
            }

        })

        res.json({ data: result })
    } catch (e: any) {

        res.status(500).json({
            error: e.message || 'Server error!',
        })
    }
})

// api详情
app.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const result = await prisma.apiManage.findFirst({
            where: {
                id: id
            },
            include: {
                origin: true,
                baseName: true,
                group: true
            }

        })

        res.json({ data: result })
    } catch (e: any) {

        res.status(500).json({
            error: e.message || 'Server error!',
        })
    }
})


// 编辑api
app.put('/edit/:id', async (req, res) => {
    try {

        const id = req.params.id
        console.log(id, 'id')
        const body = req.body;
        const result = await prisma.apiManage.update({
            where: {
                id
            },
            data: {
                ...body
            }


        })

        res.json({ data: result })
    } catch (e: any) {

        res.status(500).json({
            error: e.message || 'Server error!',
        })
    }
})


export default app