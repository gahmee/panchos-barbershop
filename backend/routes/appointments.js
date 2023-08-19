const express = require('express')
const router = express.Router()

const { getAllAppointment,
    createAppointment,
    getAppointment,
    editAppointment,
    deleteAppointment } = require('../controllers/appointmentController')

router.get('/', getAllAppointment)

router.post('/', createAppointment)

router.get('/:id', getAppointment)

router.patch('/:id', editAppointment)

router.delete('/:id', deleteAppointment)

module.exports = router