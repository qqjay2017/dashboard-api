import { app } from './server'
import { env } from 'process'
const { NODE_ENV } = env;
const isProd = NODE_ENV === 'production'
const PORT = isProd ? 80 : 3001;

app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}`),
)
