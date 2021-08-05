import React from 'react';


let Datetoday = () => {
    var showDate = new Date().toLocaleDateString(undefined, {
        day: 'numeric',
        weekday: 'long',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
    var dateNum = showDate

    return (
        <div>{dateNum}</div>
    )
}

export default Datetoday
