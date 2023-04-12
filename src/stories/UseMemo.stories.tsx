import React, {useMemo, useState} from "react";

export default  {
    title: "UseMemo"
}

export const DifficultCountingExample1 = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)


    let resultB = 1


 const  resultA = useMemo(() => {
        let tempResultA = 1

    for (let i = 1; i <= a; i++) {
        let fake = 0
        while (fake < 100000) {
            fake++
         const fakeValue = Math.random()
        }
        tempResultA = tempResultA +1

    }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB +1
    }


    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
            Result for b: {resultB}
        </div>
        </>
    )
}


    const UsersSecret = (props: {users: Array<string>}) => {
        return (
            <div>
                {props.users.map((u, i) =>
                    <div key={i}>{u}</div>)}</div>
        )
    }

    const Users = React.memo(UsersSecret)
    export const HelpsToReactMemo = () => {
        const [counter, setCounter] = useState(0)
        const [users, setUsers] = useState(["Yana", "Milana", "Una"])

        const addUser = () => {
            const newArr = [...users, "Tatsiana " +  new Date().getTime()]

            setUsers(newArr)
        }



const newArr = useMemo(() => {
   return  users.filter(el => el.toLowerCase().indexOf("a") > 1)
}, [users])


        return (
            <div>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                <button onClick={() => addUser()}>add user</button>
                {counter}
                <Users users={newArr}/>
            </div>

        )
    }


