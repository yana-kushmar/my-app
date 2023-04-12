import React, {useReducer, useState} from "react";

export default {
    title: "React.memo demo"
}


const Counter = (props: {count: number}) => {
    return (
        <div>{props.count}</div>
    )
}
const UsersSecret = (props: {users: Array<string>}) => {
    return (
        <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
    )
}

const Users = React.memo(UsersSecret)
export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Yana", "Milana", "Una"])
const addUser = () => {
        const newArr = [...users, "Tatsiana " +  new Date().getTime()]
        
    setUsers(newArr)
}

    return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => {addUser}
        }>add user</button>
   <Counter count={counter}/>
    <Users users={users}/>
    </div>

)
}