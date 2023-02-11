import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/accordion/accordion";
import Rating, {Star} from "./components/Rating";
import {Switcher} from "./components/On-Off/OnOff";




function App() {
    const [isActive, setIsActive] = useState(false)



    return (
        <div>

            <input/>
            <input checked={true} value="yo" type={"password"}/>

            <PageTitle title={"App Component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Switcher isActive={isActive} setIsActive={setIsActive}/>



        </div>
    )
}

type PagePropsType = {
    title: string
}

function PageTitle(props: PagePropsType) {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}


export default App;
