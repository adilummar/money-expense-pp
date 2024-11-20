import express from 'express'
import { signup, singin } from '../controller/auth.controller.js'

const router = express.Router()

router.post('/sign-up',signup)
router.post('/sign-in',singin)

export default router