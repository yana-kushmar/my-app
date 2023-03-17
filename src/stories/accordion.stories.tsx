import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import Accordion from "../components/accordion/accordion"


export default {
    title: 'Accordion',
    component: Accordion

 }

 const callback = action("accordion mode change event fired")
 const onClickCallback = action("item was clicked")

export const menuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback}/>
export const userUncontrolledMode = () => <Accordion
    titleValue={'Users'}
    collapsed={false}
    onChange={callback}
    items={[{title:"yana", value: 1}, {title:"victor", value: 2}, {title:"igor", value: 3}]}
onClick={onClickCallback}
/>
 export const ModeChanging = () => {
    const [value, setValue] = useState(true)
     return (
         <Accordion titleValue={'Users'}
                    collapsed={value}
                    onClick={(value) => {alert(`users with ID ${value} should be happy`)}}
                    items={[{title:"yana", value: 1},
                        {title:"victor", value: 2},
                        {title:"igor", value: 3} ]}

                    onChange={() => {
             setValue(!value)
         }}
         />
     )
 }