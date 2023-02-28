import React, {useState} from "react";


type UnAccordionPropsType = {
    titleValue: string;
    collapsed?: boolean;
}
function UncontrolledAccordion (props: UnAccordionPropsType) {

    const [collapsed, setCollapsed]= useState(false);

    return <div>
        <UnAccordionTitle title={props.titleValue}
                        onClick={() => {setCollapsed(!collapsed)}}/>
        {!collapsed && <UnAccordionBody />}


    </div>
}

type UnAccordionTitlePropsType = {
    title : string;
    onClick: () => void
}

function UnAccordionTitle(props: UnAccordionTitlePropsType) {
    return(
        <h3 onClick={() => {props.onClick()}}>--- {props.title} ---</h3>
    )
}


function UnAccordionBody(){
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )

}
export default UncontrolledAccordion;