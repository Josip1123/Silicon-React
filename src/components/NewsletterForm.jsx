import BellImg from "/assets/img/bell-icon.svg"

function NewsletterForm() {
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
                <form action="" name="newsletter" id="email-subscription">
                    <div className="form-content">
                        <div className="email-input">
                            <input
                                type="email"
                                className=""
                                placeholder="Your email"
                            />
                        </div>
                        <button className="submit-btn main-btn">
                            Subscribe
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default NewsletterForm