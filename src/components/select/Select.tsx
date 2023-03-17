import React from "react";
import {RatingValueType, Star} from "../../Rating/Rating";

type ItemsType = {
    title: string,
    value: any
}
type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemsType[]
}

export function Select(props: SelectPropsType) {
    return (
        <div>
            <div>{props.value}</div>
            {props.items.map(i => <div></div>)}
        </div>

    )

}