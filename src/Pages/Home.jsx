import Hero from "../components/Hero"
import Brands from "../components/Brands"
import Faq from "../components/Faq"
import AppFeatures from "../components/AppFeatures"
import HowDoesItWork from "../components/HowDoesItWork"
import NewsletterForm from "../components/NewsletterForm"
import Payments from "../components/Payments"
import Testemonials from "../components/Testemonials"


function Home() {
    return (
        <>
            <Hero />
            <Brands />
            <AppFeatures />
            <HowDoesItWork />
            <Payments />
            <Testemonials />
            <Faq />
            <NewsletterForm />
        </>
    )
}

export default Home