import { useState } from "react"
import BellImg from "/assets/img/bell-icon.svg"
import SuccesfullSubmit from "./SuccesfullSubmit"

function NewsletterForm() {

    const [formData, setFormData] = useState({ email: "" })
    const [errors, setErrors] = useState({})
    const [isSubmited, setIsSubmited] = useState(false)


    function handleChange(e) {
        const { name, value } = e.target
        validate(name, value)
        setFormData({ ...formData, [name]: value })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!validateBeforeSub()) {
            return 
        }

        try {
            const res = await fetch("https://win24-assignment.azurewebsites.net/api/forms/subscribe", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            setIsSubmited(true)
            setFormData({ email: "" })
            console.log(res);

        } catch {
            alert("Something went wrong with form submission, try again later or contact us via phone")
        }
    }

    function validate(name, value) {
        let error = "";


        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
            error = "Your email is not valid"
        }

        setErrors(prevErrors => ({ ...prevErrors, [name]: error }))
    }


    function validateBeforeSub() {

        let newErr = {}

        if (formData.email === "") {
            newErr.email = "Email field cannot be empty"
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            newErr.email = "not valid format"
        }


        setErrors(newErr)

        return Object.keys(newErr).length === 0
    }


    return (
        <div className="contact-form-wrapper">
            <section className="form-container">
                <div className="form-heading">
                    <div className="notification-img-container">
                        <img
                            src={BellImg}
                            loading="lazy"
                            alt="Ring bell icon"
                        />
                    </div>
                    <h2>Subscribe to our newsletter</h2>
                </div>
                {isSubmited ? <SuccesfullSubmit text={"Thanks for subscribing to our newsletter"} /> :

                    <form action="" name="newsletter" id="email-subscription" onSubmit={handleSubmit} noValidate>
                        <div className="form-content">
                            <div className="email-input">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    className=""
                                    placeholder="Your email"
                                    onChange={handleChange}
                                />
                            </div>
                            <button className={`submit-btn main-btn`} >
                                Subscribe
                            </button>
                        </div>
                        <span className="error-text error" >{errors.email}</span>
                    </form>
                }
            </section>
        </div>
    )
}

export default NewsletterForm