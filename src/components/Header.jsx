import NavigationAndLogo from "./NavigationAndLogo"
import DarkmodeToggle from "./DarkmodeToggle"
import MenuBtn from "./MenuBtn"
import { useState } from "react"
import MobileMenu from "./MobileMenu"
import WarningMessage from "./WarningMessage"

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
                <MenuBtn onClick={toggleMobileMenu} isMenuVisible={isMenuVisible} />
                <MobileMenu isMenuVisible={isMenuVisible} reset={reset} />
            </div>
            <WarningMessage />
        </header>
    )
}

export default Header