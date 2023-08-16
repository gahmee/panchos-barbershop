const mongoose = require('mongoose')
const Appointment = require('../models/appointmentModel')


const getAllAppointment = async (req, res) => {
    const appointments = await Appointment.find({})
    res.status(200).json(appointments)
}

const createAppointment = async (req, res) => {
    const { name, date, service } = req.body
    try {
        const appointment = await Appointment.create({ name, date, service })
        res.status(200).json(appointment)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

const getAppointment = async (req, res) => {
    const { _id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'not a valid format' })
    }

    const appointment = await Appointment.findById(_id)

    if (!appointment) {
        return res.status(404).json({ error: 'cannot find appointment' })
    }
}

const editAppointment = async (req, res) => {
    const { _id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'not a valid format' })
    }

    const appointment = await Appointment.findByIdAndUpdate(_id, {
        ...req.body
    })

    if (!appointment) {
        return res.status(404).json({ error: 'cannot find appointment' })
    }

    const updatedAppointment = await Appointment.findById(_id)

    res.status(200).json(updatedAppointment)
}

const deleteAppointment = async (req, res) => {
    const { _id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'not a valid format' })
    }

    const appointment = await mongoose.findOneAndDelete(_id)

    if (!appointment) {
        return res.status(404).json({ error: 'cannot find appointment' })
    }

    res.status(200).json(appointment)
}

module.exports = {
    getAllAppointment,
    createAppointment,
    getAppointment,
    editAppointment,
    deleteAppointment,
}