import React from 'react'

function MainContactForm() {
    return (
        <div className='main-contact-form'>
            <h2 className='main-form-header'>Get Online Consultation</h2>
            <form>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" name="fullName" required />
                    <span></span>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    <span></span>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                    <span></span>
                </div>
                <button type="submit" className='main-btn'>Make an appointment!</button>
            </form>
        </div>
    )
}

export default MainContactForm