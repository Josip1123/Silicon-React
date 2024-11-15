import React, { useContext } from 'react'
import { WarningContext } from '../App'


function WarningMessage() {

    const [isWarningDismissed, setIsWarningDismissed, message] = useContext(WarningContext)

    function HandleDismiss() {
        setIsWarningDismissed(true)
    }
    return (
        <div className={`alert ${isWarningDismissed ? `hidden` : ``}`}>
            <p>{message}</p>
            <button onClick={HandleDismiss} className='main-btn'>Dismiss</button>
        </div> 
        
    )
}

export default WarningMessage