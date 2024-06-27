import express from "express";
import { PrismaClient } from '@prisma/client'
import { getUpdateAt } from "../utils";
const app = express.Router()


export const prisma = new PrismaClient()

// 列表
app.get(`/`, async (req, res) => {
    try {
        const list = await prisma.dashboard.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                id: true,
                userId: true,
                createdAt: true,
                updateAt: true,
                published: true,
                name: true,
                coverThumbnail: true,
                description: true,
                visits: true,
                submissions: true,
                shareURL: true
            }

        })

        res.json({ data: list })
    } catch (e) {
        console.error(e)
        res.status(500).json({
            error: 'Server error!',
        })
    }
})
// 详情
app.get(`/:id`, async (req, res) => {
    try {
        const id = req.params.id
        const list = await prisma.dashboard.findUnique({
            where: {
                id: Number(id)
            },
            select: {
                id: true,
                userId: true,
                createdAt: true,
                updateAt: true,
                published: true,
                name: true,
                content: true,
                description: true,
                visits: true,
                submissions: true,
                shareURL: true
            }

        })

        res.json({ data: list })
    } catch (e) {
        console.error(e)
        res.status(500).json({
            error: 'Server error!',
        })
    }
})
// 新增
app.post(`/`, async (req, res) => {
    try {
        const body = req.body;
        const result = await prisma.dashboard.create({
            data: {
                ...body
            }

        })

        res.json({ data: result })
    } catch (e) {
        console.error(e)
        res.status(500).json({
            error: 'Server error!',
        })
    }
})
// 修改
app.put(`/:id`, async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body;
        const result = await prisma.dashboard.update({
            where: {
                id: Number(id)
            },
            data: {
                ...body,
                ...getUpdateAt(),
            }

        })

        res.json({ data: result })
    } catch (e) {
        console.error(e)
        res.status(500).json({
            error: 'Server error!',
        })
    }
})
// 删除
app.delete(`/:id`, async (req, res) => {
    try {
        const id = req.params.id
        const result = await prisma.dashboard.delete({
            where: {
                id: Number(id)
            }
        })
        res.json({ data: result })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: 'Server error!',
        })
    }

})


// 预览详情
app.get(`/preview/:id`, async (req, res) => {
    try {
        const id = req.params.id
        const list = await prisma.dashboard.findUnique({
            where: {
                shareURL: id
            },
            select: {
                id: true,
                userId: true,
                createdAt: true,
                updateAt: true,
                published: true,
                name: true,
                content: true,
                description: true,
                visits: true,
                submissions: true,
                shareURL: true
            }

        })

        res.json({ data: list })
    } catch (e) {
        console.error(e)
        res.status(500).json({
            error: 'Server error!',
        })
    }
})
export default app
