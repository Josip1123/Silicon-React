import Brand1 from "/assets/img/01-brands.svg"
import Brand2 from "/assets/img/02-brands.svg"
import Brand3 from "/assets/img/03-brands.svg"
import Brand4 from "/assets/img/04-brands.svg"
import Brand5 from "/assets/img/05-brands.svg"
import Brand6 from "/assets/img/06-brands.svg"


function Brands() {
    return (
        <section id="brands" className="brands-container">
                <div className="brand-logo">
                    <img src={Brand1} />
                </div>
                <div className="brand-logo">
                    <img src={Brand2} />
                </div>
                <div className="brand-logo">
                    <img src={Brand3} />
                </div>
                <div className="brand-logo">
                    <img src={Brand4} />
                </div>
                <div className="brand-logo">
                    <img src={Brand5} />
                </div>
                <div className="brand-logo">
                    <img src={Brand6} />
                </div>
            </section>
    )
}

export default Brands