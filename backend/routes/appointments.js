const express = require('express')

const router = express.Router()

router.get('/', getAllAppointment)

router.get('/:id', getAppointment)

router.patch('/:id', editAppointment)

router.delete('/:id', deleteAppointment)

module.exports = router