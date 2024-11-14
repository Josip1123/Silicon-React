import { useState } from "react"

function MainContactForm() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        specialist: "Private"
    })
    const [errors, setErrors] = useState({})


    function handleChange(e) {
        const { name, value } = e.target
        validate(name, value)
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        validateBeforeSub()
        console.log(formData);
    }


    function validateBeforeSub() {

        let newErr = {}

        if (formData.email === "") {
            newErr.email = "Email field cannot be empty"
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            newErr.email = "Email is not valid (eg. name@example.com)"
        }

        if (formData.email === "") {
            newErr.fullName = "Name field cannot be empty"
        } else if (!/^[A-Öa-ö]+(?: [A-Öa-ö]+){1,49}$/.test(formData.fullName)) {
            newErr.fullName = "Name and surname (atleast 2 char long no special charaters or numbers"
        }


        setErrors(newErr)

        return Object.keys(newErr).length === 0
    }

    function validate(name, value) {
        let error = "";

        if (name === "email" && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
            error = "Email is not valid (eg. name@example.com)"
        } else if (name === "fullName" && !/^[A-Öa-ö]+(?: [A-Öa-ö]+){1,49}$/.test(value)) {
            error = "Name and surname (atleast 2 char long no special charaters or numbers"
        }
        setErrors(prevErrors => ({ ...prevErrors, [name]: error }))
    }


    return (
        <div className='main-contact-form' noValidate>
            <h2 className='main-form-header'>Get Online Consultation</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder='Type in your name' />
                    <span className="error-text error" >{errors.fullName}</span>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='email@example.com' />
                    <span className="error-text error" >{errors.email}</span>
                </div>
                <div>
                    <label htmlFor="specialist">Choose a specialist</label>
                    <select id="specialist" name="specialist" value={formData.specialist} onChange={handleChange}>
                        <option value="Private" selected >Private</option>
                        <option value="Buissnes" >Company</option>
                        <option value="Support" >Support</option>
                    </select>
                    <span></span>
                </div>
                <button type="submit" className='main-btn'>Make an appointment!</button>
            </form>
        </div>
    )
}

export default MainContactForm