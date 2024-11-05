import AppShowcase1 from "/assets/img/app-showcase-screens-1.webp"
import AppShowcase2 from "/assets/img/app-showcase-screens-2.webp"
import AppShowcase3 from "/assets/img/app-showcase-screens-3.webp"
function HowDoesItWork() {
    return (
        <div className="app-showcase-wrapper">
            <section className="app-showcase-container">
                <h2 className="showcase-heading">How Does It Work</h2>
                <div className="showcase-images-container">
                    <img
                        className="showcase-img"
                        src={AppShowcase1}
                        loading="lazy"
                        alt="Showcase feature 1"
                    />
                    <img
                        className="showcase-img"
                        src={AppShowcase2}
                        loading="lazy"
                        alt="Showcase feature 2"
                    />
                    <img
                        className="showcase-img"
                        src={AppShowcase3}
                        loading="lazy"
                        alt="howcase feature 3"
                    />
                </div>
                <h3>Transfers to people from your contact list</h3>
                <p className="showcase-text">
                    Proin volutpat mollis egestas. Nam luctus facilisis
                    ultrices. Pellentesque volutpat ligula est. Mattis
                    fermentum, at nec lacus.
                </p>
            </section>
        </div>
    )
}

export default HowDoesItWork