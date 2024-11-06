import ContactMain from "./ContactMain"
import { useState, useEffect } from "react"
import FaqCard from "./FaqCard"
import Loader from "./Loader"


function Faq() {
    const url = "https://win24-assignment.azurewebsites.net/api/faq"
    const [faqs, setFaqs] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        async function fetchData() {
            setIsLoaded(true)
            const res = await fetch(url);
            const faqs = await res.json();
            setFaqs(faqs);
            setIsLoaded(false)
        }

        fetchData();

    }, [])

    return (

        <section className="faq-container">
            <div className="faq-heading-container">
                <h2 className="faq-heading">
                    Any questions? Check out the FAQs
                </h2>
                <p className="faq-text">
                    Still have unanswered questions and need to get in
                    touch?
                </p>
            </div>

            <div className="faq-cards-container">
                {isLoaded ? <Loader /> : faqs.map((item) => {
                    return <FaqCard key={item.id} question={item.title} answer={item.content} />
                })}
            </div>
            <ContactMain />
        </section>
    )
}

export default Faq