
function MenuBtn({ onClick, isMenuVisible }) {

    return (
        <>
            <a href="#" className="signin main-btn">
                <span className="material-symbols-outlined"> Person </span>Sign
                in/up
            </a>

            <a className="mobile-menu" onClick={onClick} aria-label="mobile menu">
                <span className="material-symbols-outlined"> {isMenuVisible ? "close" : "menu"} </span>
            </a>
        
        </>
        
    )
}

export default MenuBtn