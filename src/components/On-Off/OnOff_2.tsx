import React, {useState} from "react";


type PropsType = {
    // on: boolean
}


const OnOff = (props: PropsType) => {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "6px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "6px",
        backgroundColor: on ? "green" : "red"


    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                setOn(true)
            }}>ON
            </div>
            <div style={offStyle} onClick={() => {
                setOn(false)
            }}>OFF
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff