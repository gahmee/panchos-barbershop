import { useState } from 'react'
const BookAppointment = () => {
    const [barber, setBarber] = useState()
    const [service, setService] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [name, setName] = useState()
    const [phone, setPhone] = useState()


    const today = new Date()
    const threeWeeksOut = new Date()
    threeWeeksOut.setDate(today.getDate() + 21)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const appointment = { barber, date, service, name }


        const response = await fetch('http://localhost:4000/api/appointments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(appointment)
        })


        console.log(response)

        const json = await response.json()

    }


    return (
        <div id="book-appointment">
            <div>
                <h1>Book Appointment</h1>
                <div id="appointment-form-container">
                    <form>
                        <label>
                            Barber:
                            <select onChange={(e) => setBarber(e.target.value)}>
                                <option>Barber A</option>
                                <option>Barber B</option>
                                <option>Barber C</option>
                            </select>
                        </label>
                        <label>
                            Service:
                            <select onChange={(e) => setService(e.target.value)}>
                                <option>Haircut / Beard Trim</option>
                                <option>Shave</option>
                            </select>
                        </label>
                        <label onChange={(e) => setDate(e.target.value)}>
                            Date:
                            <input type="date" min={today.toISOString().split('T')[0]} max={threeWeeksOut.toISOString().split('T')[0]}></input>
                        </label>
                        <label>
                            Time:

                        </label>
                        <label>
                            Name:
                            <input type="text" onChange={(e) => setName(e.target.value)}></input>
                        </label><label>
                            Phone:
                            <input type="tel" onChange={(e) => setBarber(e.target.value)}></input>
                        </label>
                        <button onClick={(e) => handleSubmit(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookAppointment