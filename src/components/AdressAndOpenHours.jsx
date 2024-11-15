

function AdressAndOpenHours() {
    return (
        <div className="place-description">
            <h2 className='place'>Kungliga Slottet</h2>
            <p
                target='blank'>
                <span className="material-symbols-outlined">
                    location_on
                </span> Kungliga slottet, 107 70 Stockholm
            </p>
            <p className="telephone"><span className="material-symbols-outlined">
                call
            </span> (000)555 - 1234</p>
            <p className="open-hours">

                <span className="material-symbols-outlined">
                    schedule
                </span>
                <b> Mon-Fri:</b> 9.00 am - 22.00 pm
                <br />
                <span className="material-symbols-outlined oppacity-null">
                    schedule
                </span>
                <b> Sat-Sun:</b> Closed
            </p>
        </div>
    )
}

export default AdressAndOpenHours