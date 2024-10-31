import HeroContent from "./HeroContent"
import HeroAside from "./HeroAside"

function Hero() {
    return (
        <div className="hero-wrapper-bg">
        <section className="hero-container">
            <HeroContent/>
            <HeroAside/>
        </section>
    </div>
    )
}

export default Hero