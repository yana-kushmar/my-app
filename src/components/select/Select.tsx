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

    const selectedItem = props.items.find(el => el.value === props.value)

    const toggleItems = () => setActive(!active)

    return (
        <>
            <select>
                <option value="">Minsk</option>
                <option value="">New York</option>
                <option value="">Dubai</option>
            </select>
        <div className={s.select}>
            <h3 onClick={toggleItems}>{selectedItem && selectedItem.title}</h3>

            {
                active &&
            <div className={s.items}>
            {props.items.map(i => <div key={i.value}>{i.title}</div>)}
            </div>
            }
        </div>
        </>

    )

}