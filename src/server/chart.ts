
import express from "express";

import { getUpdateAt } from "../utils";
import prisma from "../lib/prisma";
const app = express.Router()


// 列表
app.get(`/`, async (req, res) => {
    const type = req.query.type || ''
    const list = await prisma.componentChart.findMany({
        orderBy: {
            updateAt: 'desc'
        },
        where: type ? {
            type: String(type)
        } : {}



    })

    res.json({ data: list })
})


// 详情
app.get(`/:id`, async (req, res) => {
    const id = req.params.id
    const list = await prisma.componentChart.findUnique({
        where: {
            id: Number(id)
        },

    })

    res.json({ data: list })
})

// 新增
app.post(`/`, async (req, res) => {
    const body = req.body;

    const result = await prisma.componentChart.create({
        data: {
            ...body
        }
    })
    res.json({ data: result })
})


// 修改
app.put(`/:id`, async (req, res) => {
    const id = req.params.id
    const body = req.body;
    const result = await prisma.componentChart.update({
        where: {
            id: Number(id)
        },
        data: {
            ...body,
            ...getUpdateAt(),
        }

    })

    res.json({ data: result })
})

// 删除
app.delete(`/:id`, async (req, res) => {
    const id = req.params.id
    const result = await prisma.componentChart.delete({
        where: {
            id: Number(id)
        }
    })
    res.json({ data: result })

})

export default app
