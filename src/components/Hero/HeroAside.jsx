import heroImgBig from "/assets/img/hero-img.webp"
import heroImgSmall from "/assets/img/hero-img-small.webp"

function HeroAside() {
    return (
        <aside>
            <picture>
                <source
                    media="(min-width: 1200px)"
                    srcSet={heroImgBig}
                    height="700"
                    width="760"
                />

                <source
                    media="(min-width: 768px)"
                    srcSet={heroImgSmall}
                    height="481"
                    width="522"
                />

                <img
                    src={heroImgBig}
                    alt="Image of a phone with silicon app"
                    height="700"
                    width="760"
                />
            </picture>
        </aside>
    )
}

export default HeroAside