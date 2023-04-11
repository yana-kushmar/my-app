import React, {useState} from "react";
import s from "./Select.module.css"

type ItemsType = {
    title: string,
    value: any
}
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemsType[]
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElement, setHoveredElement] = useState(props.value)

    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElement)

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {props.onChange(value);
        toggleItems()}

    return (
        <>

        <div className={s.select}>
            <span  className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>

            {
                active &&
            <div className={s.items}>
            {props.items.map(i => <div
                onMouseEnter={() => {setHoveredElement(i.value)}}
                className={s.item + " " + (hoveredItem === i ? s.selected: "")}
                key={i.value}
                onClick={() => {onItemClick(i.value)}}
                >{i.title}
            </div>)}
            </div>
            }
        </div>
        </>

    )

}