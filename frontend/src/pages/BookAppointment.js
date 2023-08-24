
const BookAppointment = () => {
    const today = new Date()
    today.setDate(today.getDate() - 1)
    const threeWeeksOut = new Date()
    threeWeeksOut.setDate(today.getDate() + 21)


    return (
        <div id="book-appointment">
            <div>
                <h1>Book Appointment</h1>
                <div id="appointment-form-container">
                    <form>
                        <label>
                            Barber:
                            <select>
                                <option>Barber A</option>
                                <option>Barber B</option>
                                <option>Barber C</option>
                            </select>
                        </label>
                        <label>
                            Service:
                            <select>
                                <option>Haircut / Beard Trim</option>
                                <option>Shave</option>
                            </select>
                        </label>
                        <label>
                            Date:
                            <input type="date" min={today.toISOString().split('T')[0]} max={threeWeeksOut.toISOString().split('T')[0]}></input>
                        </label>
                        <label>
                            Time:

                        </label>
                        <label>
                            Name:
                            <input></input>
                        </label><label>
                            Phone:
                            <input></input>
                        </label>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookAppointment