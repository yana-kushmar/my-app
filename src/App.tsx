import React, {useState} from 'react';
import './App.css';
import Accordion, {AccordionPropsType} from "./components/accordion/accordion";
import Rating, {RatingValueType, Star} from "./Rating/Rating";
import {Switcher} from "./components/On-Off/OnOff";
import OnOff from "./components/On-Off/OnOff_2";
import UncontrolledAcordion from "./components/UncontrolledAccordion/UncontrolledAcordion";
import UncontrolledRating from "./Rating/UncontrolledRating";
import UncontrolledOnOff from './components/On-Off/UncontrolledOnOff_2';


function App() {
    const [isActive, setIsActive] = useState(false)
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    const [switchON, setSwitchON] = useState<boolean>(false)




    return (
        <div className={"App"}>

            <input/>
            <input checked={true} value="yo" type={"password"}/>

            <PageTitle title={"App Component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>

            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            Article 2
            {/*<Rating value={0} */}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <Switcher isActive={isActive} setIsActive={setIsActive}/>
            <div>
                <OnOff on={switchON} onChange={setSwitchON}/> \
                <UncontrolledOnOff onChange={setSwitchON}/>
            </div>
            <div>
                <UncontrolledAcordion titleValue={"Menu"}/>
                <UncontrolledAcordion titleValue={"Users"}/>
            </div>
            <div>
                <UncontrolledRating/>
            </div>


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
