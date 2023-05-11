import React, {useEffect, useState} from 'react';


type PropsType = {

}

function detDigitsToString(number: number) {
   return  number < 10 ? "0" + number : number
}

const Clock = (props: PropsType) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() =>{
            setDate(new Date())
        }, 1000)
    }, [])


    const secondsString = detDigitsToString(date.getSeconds())

    const minutesString = detDigitsToString(date.getMinutes())

    const hoursString = detDigitsToString(date.getHours())


    return (
        <div>
<span>{hoursString}</span>
            :
<span>{minutesString}</span>
            :
<span>{secondsString}</span>

        </div>
    );
};

export default Clock;