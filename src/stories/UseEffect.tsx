import React, {useEffect, useMemo, useState} from "react";

export default {
    title: "UseEffect demo"
}


export const UseEffectExample = () => {
    const [fake, setFake] = useState(1)

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        document.title = counter.toString()
    }, [counter])


    return <>
        <button onClick={() => setCounter(counter + 1)}></button>
        {counter} {fake}
    </>
}

export const UseEffectExampleSetTIMEOUT = () => {
    const [fake, setFake] = useState(1)

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        setTimeout(() => {
            document.title = counter.toString()
        }, 1000)
    }, [counter])


    return <>
        <button onClick={() => setCounter(counter + 1)}></button>
        <button onClick={() => setFake(fake + 1)}></button>
        {counter} {fake}
    </>
}


export const UseEffectExampleSetINTERVAL = () => {
    const [fake, setFake] = useState(1)

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
    }, [counter])


    return <>
        {/*<button onClick={() => setCounter(counter + 1)}></button>*/}
        {/*<button onClick={() => setFake(fake + 1)}></button>*/}
        counter: {counter} - fake: {fake}
    </>
}