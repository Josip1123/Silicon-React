
function MenuBtn({ onClick }) {

    return (
        <>
            <a href="#" className="signin main-btn">
                <span className="material-symbols-outlined"> Person </span>Sign
                in/up
            </a>

            <a className="mobile-menu" onClick={onClick} aria-label="mobile menu">
                <span className="material-symbols-outlined"> Menu </span>
            </a>
        
        </>
        
    )
}

export default MenuBtn