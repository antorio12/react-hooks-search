import React, { useContext } from 'react'
import {AlertContext} from './context/alert/alertContext'

export const Alert= () =>{
    const {alert, hide}= useContext(AlertContext)

    if (!alert) return null


    return (
        <div>
           < div className={`alert alert-${alert.type || 'secondary'} alert-dismissible`}
            role="alert">
                {alert.text}
                <button type="button" onClick={hide} className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
        </div>
    )
}