import { PrismaClient } from '@prisma/client'

import express from 'express'
import dashboard from './server/dashboard'
import apiManage from './server/api-manage'
import apiProxy from './server/api-proxy'

export const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.use('/dashboard', dashboard)
app.use('/api-manage', apiManage)
app.use('/api-proxy', apiProxy)

export { app }
