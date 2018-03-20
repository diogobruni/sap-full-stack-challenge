import express from 'express'
import stringRoutes from './string.route'

const router = express.Router() // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
)

// mount string routes at /users
router.use('/string', stringRoutes)

export default router
