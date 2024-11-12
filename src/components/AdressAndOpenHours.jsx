

function AdressAndOpenHours() {
    return (
        <div className="place-description">
            <h2 className='place'>Kungliga Slottet</h2>
            <a href="https://www.google.com/maps/place/The+Royal+Palace/@59.3268215,18.0717194,17z/data=!3m1!4b1!4m6!3m5!1s0x465f9d587e4c4a01:0xbdf97a9648763e36!8m2!3d59.3268215!4d18.0717194!16zL20vMDF2cmx0?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
                target='blank'>
                <span className="material-symbols-outlined">
                    location_on
                </span> Kungliga slottet, 107 70 Stockholm
            </a>
            <p className="telephone"><span className="material-symbols-outlined">
                call
            </span> (000)555 - 1234</p>
            <p className="open-hours">

                <span className="material-symbols-outlined">
                    schedule
                </span>
                <b> Mon-Fri</b> 9.00 am - 22.00 pm
                <br />
                <span className="material-symbols-outlined oppacity-null">
                    schedule
                </span>
                <b> Sat-Sun</b> Closed
            </p>
        </div>
    )
}

export default AdressAndOpenHours