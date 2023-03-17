import React, {ChangeEvent, useRef, useState} from "react";
import OnOff_2 from "../components/On-Off/OnOff_2";
import {action} from "@storybook/addon-actions";
import {string} from "prop-types";

export default {
    title: "input",
    //component: OnOff_2
}

export const UncontrolledInput = () => <input/>

export const UncontrolledInputWithTrackValue = () => {
    const [value, setValue] = useState("")
    const change = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

        return (
            <> <input onChange={change}
            /> - {value}</>
        )
    }

     export const GetValueOfUncontrolledInputByButtonPress = () => {
        const [value, setValue] = useState("")
        const inputRef = useRef<HTMLInputElement>(null)

        const save = () => {
            const el = inputRef.current as HTMLInputElement
            setValue(el.value)
        }

            return (
                <> <input ref={inputRef}/>
                    <button onClick={save}
                    >add
                    </button>
                    -actual value: {value}</>
            )

    }


    export const ControlledInputWithFixedValue = () => <input value={"Yana"}/>

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <input value={parentValue} onChange={change}/>
    )

}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2")

    const change = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <select value={parentValue} onChange={change}>
            <option>None</option>
            <option value={"1"}>Minsk</option>
            <option value={"2"}>Moscow</option>
            <option value={"3"}>Dubai</option>
            <option value={"4"}>Petrburg</option>
            <option value={"5"}>Paris</option>
        </select>
        )


}


export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return (
        <input type="checkbox"  checked={parentValue} onChange={change}/>
    )


}
