import { useState } from 'react'

function ShowMapBtn() {
    const [isMapShown, setIsMapShown] = useState(false)

    function handleClick() {
        document.querySelector(".google-maps").classList.toggle("shown")
        document.querySelector(".google-maps").classList.toggle("hidden")

        setIsMapShown(!isMapShown)  
    }
    return (
        <button className="main-btn show-map" onClick={handleClick}> { isMapShown ? `Hide map` : `Show map`}  </button>
    )
}

export default ShowMapBtn