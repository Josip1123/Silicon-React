import PaymentTransfer from "/assets/img/payment-transfer-img-1.png"
import PaymentTransfer2 from "/assets/img/payment-transfer-img-2.png"

function Payments() {
    return (
        <section className="payments">
            <div className="make-payments">
                <h2>Make your money transfer simple and clear</h2>
                <ul className="transfer-perks-list">
                    <li>Banking transactions are free fro you</li>
                    <li>No monthly cash commission</li>
                    <li>Manage transactions and payments online</li>
                </ul>
                <a href="#" className="learn-more-payments main-btn" aria-label="learn more about making payments">Learn more &rarr; </a>
            </div>

            <div className="payment-img-container">
                <img src={PaymentTransfer} alt="Managing transfers in app" />
            </div>
            <div className="payment-img-container ">
                <img src={PaymentTransfer2} alt="Managing transfers in app" />
            </div>
            <div className="receive-payments">
                <h2>Receive payment from international bank</h2>
                <div className="international-features">
                    <div className="feature">
                        <div className="payment-icon-1"></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quos deserunt eveniet.
                            Beatae consequatur eaque incidunt reiciendis eum ut molestias! </p>
                    </div>
                    <div className="feature">
                        <div className="payment-icon-2"></div>
                        <p>Lorem ipsum dolor sit amet . Ab quos deserunt eveniet.
                            Beatae consequatur olestias, consectetur adipisicing elit! </p>
                    </div>
                </div>
                <a href="#" className="learn-more-payments main-btn" aria-label="learn more about making payments">Learn more &rarr; </a>
            </div>
        </section>
    )
}

export default Payments