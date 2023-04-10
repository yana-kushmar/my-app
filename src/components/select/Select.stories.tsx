import React, {useState} from "react";

import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: "Select",
    component: Select
}

export const WithValue = () =>
        <Select onChange={action("Value changed")}
                value={"2"}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "New York"},
                    {value: "3", title: "Dubai"},
                ]}/>


export const WithoutValue = () =>
    <Select onChange={action("Value changed")}

            items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "New York"},
                {value: "3", title: "Dubai"},
            ]}/>






