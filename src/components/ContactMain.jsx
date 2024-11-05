function ContactMain() {
    return (
        <section className="contact-medium-and-large">
            <div className="contact-phone">
                <span className="material-symbols-outlined phone-icon"
                >phone_in_talk</span
                >
                <p>Still have questions?</p>
                <a href="#" className="contact-us-via-phone">Call us now</a>
            </div>
            <div className="contact-chat">
                <span className="material-symbols-outlined chat-icon"
                >chat</span
                >
                <p> Do not like phones?</p>
                <a href="#" className="contact-us-via-chat"
                >Chat with us</a
                >
            </div>
        </section>
    )
}

export default ContactMain