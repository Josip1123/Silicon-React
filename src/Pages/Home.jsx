import Hero from "../components/Hero"
import Brands from "../components/Brands"
import Faq from "../components/Faq"
import AppFeatures from "../components/AppFeatures"
import HowDoesItWork from "../components/HowDoesItWork"
import NewsletterForm from "../components/NewsletterForm"
function Home() {
    return (
        <>
            <Hero />
            <Brands />
            <AppFeatures />
            <HowDoesItWork />
            <Faq />
            <NewsletterForm />
        </>
    )
}

export default Home