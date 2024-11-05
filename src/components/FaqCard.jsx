import { useState } from "react"

function FaqCard(props) {

    const [click, setClick] = useState(false)
    function handleClick() {
        setClick(!click)
    }
    return (
        <div className={`faq-card ${click ? "animate-and-show-answer" : ""}`} onClick={handleClick}>
            <div className="q-and-btn-container">
                <p className="question">
                    {props.question}
                </p>
                <div className="accordion-btn">
                    <span
                        className="material-symbols-outlined down-arrow animated-btn"
                    >
                    </span>
                </div>
            </div>
            <p className="answer">
                {props.answer}
            </p>
        </div>
    )
}

export default FaqCard