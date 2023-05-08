import React, {useMemo, useState} from "react";

export default {
    title: "UseState demo"
}

 // function generateData() {
 //    //difficult counting
 //    return 1234567
 // }
export const UseStateExample = () => {
    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(() => { //or generateData
        return 12345
    })


    return <>
        <button onClick={() => setCounter(counter + 1)}></button>
        {counter}
    </>
}