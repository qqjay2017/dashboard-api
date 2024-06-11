import { PrismaClient } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
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

// 新建分组
app.post('/api-manage/group', async (req, res) => {
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
app.get('/api-manage/group/list', async (req, res) => {
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

// 新建api
app.post('/api-manage/create', async (req, res) => {
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

export { app }
