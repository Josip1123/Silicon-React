import FeatureCard from "./FeatureCard"
import FeaturesImage from "/assets/img/app-features-img.webp"

function AppFeatures() {
    return (

        <section className="app-features-container" id="features">
            <h2 className="app-features-heading">App Features</h2>
            <p className="app-features-heading-text">
                Lorem ipsum dolor sit amet tetur adipisicing elit. Ab, dolor
                debitis. Dignissimos vero, vitae cumque libero aut magni
                sint earum facilis.
            </p>
            <div className="features-wrapper">
                <FeatureCard icon="icon-1" />
                <FeatureCard icon="icon-2"/>
                <FeatureCard icon="icon-3"/>
                <FeatureCard icon="icon-4"/>
                <FeatureCard icon="icon-5"/>
                <FeatureCard icon="icon-6"/>
            </div>
            <aside className="app-features-img">
                <img
                    src={FeaturesImage}
                    loading="lazy"
                    alt="Image of app features"
                    height={600}
                />
            </aside>
        </section>
    )
}

export default AppFeatures