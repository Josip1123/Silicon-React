import ContactInfo from "./contactInfo"
import MainContactForm from "./MainContactForm"

function ContactWrapper() {
    return (
        <div className="contact-wrapper">

            <div className="contact-container">
                <ContactInfo />
                <MainContactForm />
            </div>
        </div>
    )
}

export default ContactWrapper