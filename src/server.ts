import { PrismaClient } from '@prisma/client'
import express from 'express'

export const prisma = new PrismaClient()
const app = express()

app.use(express.json())

// 列表
app.get(`/dashboard`, async (req, res) => {
  try {
    const list = await prisma.dashboard.findMany({
      orderBy: {
        createdAt: 'desc'
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
app.get(`/dashboard/:id`, async (req, res) => {
  try {
    const id = req.params.id
    const list = await prisma.dashboard.findUnique({
      where: {
        id: Number(id)
      },

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
app.post(`/dashboard`, async (req, res) => {
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
app.put(`/dashboard/:id`, async (req, res) => {
  try {
    const id = req.params.id
    const body = req.body;
    const result = await prisma.dashboard.update({
      where: {
        id: Number(id)
      },
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
// 删除
app.delete(`/dashboard/:id`, async (req, res) => {
  try {
    const id = req.params.id
    await prisma.dashboard.delete({
      where: {
        id: Number(id)
      }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: 'Server error!',
    })
  }

})

export { app }
