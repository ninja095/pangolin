const express = require('express');
const {
  getUsers,
  getUser,
  deleteUser,
  createUser,
  updateUser
} = require('../controllers/user-controller')
const router = express.Router();



router.get('/pangolin', getUsers)
router.get('/pangolin/:id', getUser)
router.delete('/pangolin/:id',deleteUser)
router.post('/pangolin', createUser)
router.patch('/pangolin/:id', updateUser)


module.exports = router;
