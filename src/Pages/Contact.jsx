import BasicBreadcrumbs from "../components/BasicBreadcrumbs"
import MainContactForm from "../components/MainContactForm"
import MapsIframe from "../components/MapsIframe"
import ShowMapBtn from "../components/ShowMapBtn"
import ContactInfo from "../components/contactInfo"



function Contact() {
    return (
        <>
            <BasicBreadcrumbs />
            <div className="contact-container">
                <ContactInfo />
                <MainContactForm />
            </div>
            <ShowMapBtn />
            <MapsIframe />
        </>
    )
}

export default Contact