import { app } from './server'
const PORT = 80

app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}`),
)
