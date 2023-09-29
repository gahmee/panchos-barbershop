const Footer = () => {
    return (
        <section id="footer">
            <div id="business-info-container">
                <div className="footer-info-title">LOCATION</div>
                <div>
                    421 Thomas Rd.
                    Mahopac, NY 10541
                </div>
                <div>
                    1-(716)-432-1012
                </div>
            </div>
            <div id="business-hours-container">
                <div className="footer-info-title">HOURS</div>
                <table>
                    <tr>
                        <td>monday - friday</td>
                        <td>9am - 5pm</td>
                    </tr>
                    <tr>
                        <td>saturday</td>
                        <td>9am - 2pm</td>
                    </tr>
                    <tr>
                        <td>sunday</td>
                        <td>closed</td>
                    </tr>
                </table>

            </div>
            <div id="social-container">
                FOLLOW US [INSTAGRAM]
            </div>

        </section>
    )
}

export default Footer