import React, {useReducer, useState} from "react";


type UnAccordionPropsType = {
    titleValue: string;
    collapsed?: boolean;
}


type ActionType = {
    type: string
}

const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"

type StateType = {
    collapsed: boolean
}
const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
           return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            throw new Error("Bad action type")
    }
    return state
}

function UncontrolledAccordion(props: UnAccordionPropsType) {

    // const [collapsed, setCollapsed]= useState(false);
    let [state, dispatch] = useReducer(reducer, {collapsed: false});


    return <div>
        {/*<UnAccordionTitle title={props.titleValue}*/}
        {/*                  onClick={() => {*/}
        {/*                      setCollapsed(!collapsed)*/}
        {/*                  }}/>*/}
        <UnAccordionTitle title={props.titleValue}
                          onClick={() => {dispatch({type: TOGGLE_CONSTANT})
                          }}/>
        {!state.collapsed && <UnAccordionBody/>}


    </div>
}

type UnAccordionTitlePropsType = {
    title: string;
    onClick: () => void
}

function UnAccordionTitle(props: UnAccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>--- {props.title} ---</h3>
    )
}


function UnAccordionBody() {
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