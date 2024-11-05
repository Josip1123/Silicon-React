import ClientTestemonial from "./ClientTestemonial"
import { useEffect, useState } from "react"

function Testemonials() {

    const [testemonials, setTestemonials] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://win24-assignment.azurewebsites.net/api/testimonials");
            const testemonials = await res.json();
            setTestemonials(testemonials);
        }

        fetchData();
    }, [])

    return (
        <div className="testemonial-wrapper">

            <section className="client-testemonial">
                <h2>Clients are Loving Our App</h2>
                {testemonials.map((item)=>{
                    return <ClientTestemonial key={item.id} starRating={item.starRating} comment={item.comment} avatarUrl={item.avatarUrl} author={item.author} jobRole={item.jobRole} />
                })}
                <div className="quotes-icon">
                    <img src="./styles/img/quotes.svg" alt="" />
                </div>
            </section >
        </div >
    )
}

export default Testemonials