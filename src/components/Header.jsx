import NavigationAndLogo from "./NavigationAndLogo"
import DarkmodeToggle from "./DarkmodeToggle"
import MenuBtn from "./MenuBtn"
import { useState } from "react"
import MobileMenu from "./MobileMenu"

function Header() {


    const [isMenuVisible, setIsMenuVisible] = useState(false);


    function toggleMobileMenu() {
        setIsMenuVisible(prevState => !prevState);
        console.log(isMenuVisible);
    };

    function reset(){
        setIsMenuVisible(false);
    }

    return (

        <header>
            <div className="header-container">
                <NavigationAndLogo />
                <DarkmodeToggle />
                <MenuBtn onClick={toggleMobileMenu}  />
                <MobileMenu isMenuVisible={isMenuVisible} reset={reset} />
            </div>
        </header>
    )
}

export default Header