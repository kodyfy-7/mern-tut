const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe } = require('../controllers/userController')
const { 
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal 
} = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router