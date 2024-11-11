import React from 'react'

function MapsIframe() {
    return (
        <iframe className="google-maps hidden" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.3671318208883!2d18.06914447706183!3d59.32682421122136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d587e4c4a01%3A0xbdf97a9648763e36!2sThe%20Royal%20Palace!5e0!3m2!1sen!2sse!4v1731163020103!5m2!1sen!2sse"
            width="450"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    )
}

export default MapsIframe